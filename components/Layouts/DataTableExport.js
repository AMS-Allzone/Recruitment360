"use client";

import React, { useRef, useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Col, Container, Form, Row, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is loaded
import { RiFileExcel2Fill, RiFilePdf2Fill } from "react-icons/ri";
import { saveAs } from 'file-saver'; // Import saveAs for Excel export
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const columns = [
    { name: 'Code', selector: row => row.code, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Category', selector: row => row.category, sortable: true },
    { name: 'Quantity', selector: row => row.quantity, sortable: true },
    { name: 'Salary', selector: row => row.salary, sortable: true },
    { name: 'Age', selector: row => row.age, sortable: true },
];

export default function DataTableWithExport() {
    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [status, setStatus] = useState('all');
    const [department, setDepartment] = useState('all');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [timeRange, setTimeRange] = useState('last_month');

    useEffect(() => {
        fetchData();
    }, [currentPage, rowsPerPage, searchQuery, status, department, timeRange, startDate, endDate]);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: currentPage,
                pageSize: rowsPerPage,
                search: searchQuery,
                status,
                department,
                timeRange,
                startDate: startDate ? startDate.toISOString() : null,
                endDate: endDate ? endDate.toISOString() : null,
            })
        });
        const result = await response.json();
        setData(result.data || []);
        setTotalRows(result.total || 0);
        setLoading(false);
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const extractDataKey = (selector) => {
        const match = selector.toString().match(/row\s*=>\s*row\.(\w+)/);
        return match ? match[1] : '';
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default();
                const pdfColumns = columns.map(col => ({
                    title: col.name,
                    dataKey: extractDataKey(col.selector) || col.name.toLowerCase()
                }));
                doc.autoTable(pdfColumns, data);
                doc.save('products.pdf');
            });
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const blob = new Blob([buffer], { type: EXCEL_TYPE });
        saveAs(blob, `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`);
    };

    // Pagination control functions
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleRowsPerPageChange = (e) => {
        console.log("Event: ", e);
        const { value } = e.target || {}; // Destructure value with a fallback
        if (value) {
            setRowsPerPage(parseInt(value, 10)); // Parse the value as integer with radix 10
            setCurrentPage(1); // Reset to the first page on rows per page change
        } else {
            console.error("Unexpected event target: ", e.target); // Log unexpected target
        }
    };
    

    // Generate pagination buttons
    const pageCount = Math.ceil(totalRows / rowsPerPage);
    const paginationItems = [];
    for (let i = 1; i <= pageCount; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div className="container-fluid mt-5">
            {/* Filters */}
            <Row className="mb-4">
                <Col xs={12} md={3}>
                    <Form.Control
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Col>

                <Col xs={12} md={2}>
                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="approve">Approve</option>
                        <option value="reject">Reject</option>
                    </Form.Select>
                </Col>

                <Col xs={12} md={2}>
                    <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="all">All Departments</option>
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="development">Development</option>
                    </Form.Select>
                </Col>

                <Col xs={12} md={3}>
                    <Form.Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                        <option value="last_month">Last Month</option>
                        <option value="current_month">Current Month</option>
                        <option value="custom">Custom Date</option>
                    </Form.Select>
                    {timeRange === 'custom' && (
                        <div className="d-flex">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={new Date()} // Prevent selecting future dates
                                minDate={new Date().setFullYear(new Date().getFullYear() - 2)} // Example: limit past dates to the last 2 years
                                placeholderText="Start Date"
                                className="form-control me-2"
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={new Date()} // Prevent selecting future dates
                                minDate={startDate || new Date().setFullYear(new Date().getFullYear() - 2)} // Ensure end date cannot be before start date or more than 2 years in the past
                                placeholderText="End Date"
                                className="form-control"
                            />
                        </div>
                    )}
                </Col>

                <Col xs={12} md={2}>
                    <Form.Select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                        <option value={10}>10 rows</option>
                        <option value={15}>15 rows</option>
                        <option value={20}>20 rows</option>
                        <option value={30}>30 rows</option>
                        <option value={50}>50 rows</option>
                        <option value={100}>100 rows</option>
                        <option value={"all"}>All</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* Export Buttons */}
            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={exportExcel} className="me-2 rounded-circle">
                    <RiFileExcel2Fill />
                </Button>
                <Button variant="danger" onClick={exportPdf} className="rounded-circle">
                    <RiFilePdf2Fill />
                </Button>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                paginationDefaultPage={currentPage}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
                progressPending={loading}
                highlightOnHover
                responsive
            />

            {/* Custom Pagination Controls */}
            <Pagination className="justify-content-center mt-4">
                <Pagination.Prev onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} />
                {paginationItems}
                <Pagination.Next onClick={() => currentPage < pageCount && handlePageChange(currentPage + 1)} />
            </Pagination>
        </div>
    );
}
