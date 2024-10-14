"use client"
import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { GoHomeFill } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiStickyNoteAddFill,RiPassPendingFill,RiUserSettingsFill } from "react-icons/ri";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { MdAssignmentAdd } from "react-icons/md";
// import { VscTasklist } from "react-icons/vsc";
import Logo from '../../assets/Images/logo.svg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SidebarItem from '../items/SidebarItem';



export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const pathname= usePathname();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggle = (item) => {
    console.log('aaaa open Item', openItem, "aaaa open Item item.id", item.id)
    setOpenItem(openItem === item.id  ? null : item.id);
    console.log("open Itemsssss",item.id)
    if(item.submenu){

    }
    // setOpenItem( pathname !== item.path ? null : item.id)
  };

  const menuItems = [
    {
      id: 1,
      title: "Home",
      icon: <GoHomeFill style={{ transform: 'scale(1.3)' }} />,
      path: "/",
      submenu: []
    },
    {
      id: 2,
      title: "Resources",
      icon: <HiMiniUserGroup  style={{ transform: 'scale(1.3)' }} />,
      path: "/resource",
      submenu: [
        { title: "Employees", path: "/resource/employees" },
        { title: "External", path: "/resource/external" }
      ]
    },
    {
      id: 3,
      title: "Set Questions",
      icon: <RiStickyNoteAddFill style={{ transform: 'scale(1.3)' }}/>,
      path: "/inbox",
      submenu: [
        { title: "Medical", path: "/dashboard/settings/profile" },
        { title: "Network", path: "/ecommerce/products" },
        { title: "support", path: "/ecommerce/products" },
        { title: "Management", path: "/ecommerce/products" }
      ]
    },
    {
      id: 4,
      title: "Request Hub",
      icon: <div><BiSolidAlarmAdd style={{ transform: 'scale(1.3)' }}/></div> ,
      path: "/requesthub",
      submenu: []
    },
    {
      id: 5,
      title: "Evaluation Hub",
      icon: <MdAssignmentAdd style={{ transform: 'scale(1.3)' }}/>,
      path: "/evaluationhub",
      submenu: []
    },
    {
      id: 6,
      title: "Feedbacks",
      icon: <RiPassPendingFill style={{ transform: 'scale(1.3)' }}/>,
      path: "/feedbacks",
      submenu: []
    },
    {
      id: 7,
      title: "Recruitment",
      icon: <RiUserSettingsFill style={{ transform: 'scale(1.3)' }}/>,
      path: "/recruitment",
      submenu: [
        { title: "Pre-Recruitment", path: "/dashboard/settings/profile" },
        { title: "Post-Recruitment", path: "/d/y" }
      ]
    },
  ];
  
console.log("pathname:", pathname, "openItem",openItem)
  return (
    <div style={{ height:"100%" }}>
<div  style={{ height:"100%" }}>
      {/* Sidebar for larger screens */}
      {/* //classnames = sidebar sidebar-new */}
      <nav className="d-none d-md-block  justify-content-center py-4" style={{ height:"100%", width:"100%", paddingBottom:"100px"}}> 
       <div className='d-flex justify-content-center gap-2 mb-3 flex-column align-items-center' >
        <Image src={Logo} width={50} height={50}  />  
        <h5 >Recruitment360</h5>
        </div>
        {menuItems.map(item => (
          <SidebarItem
            key={item.id}
            item={item}
            pathName={pathname}
            isOpen={openItem === item.id }
            openItem={openItem }
            onToggle={() => handleToggle(item)}
          />
        ))}
      </nav>

      {/* Sidebar for smaller screens */}
      <Button variant="primary" className="d-md-none" onClick={handleShow}>
        ☰ Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {menuItems.map(item => (
            <SidebarItem
              key={item.id}
              item={item}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item)}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </div>
    
  );
}

