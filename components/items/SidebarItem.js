// components/items/SidebarItem.js
import { Nav } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Link from 'next/link';

export default function SidebarItem({ item, isOpen, onToggle,pathName, isActive }) {
  const hasSubmenu = item.submenu.length > 0;
  // const parentpath = item.path.length>1? pathName.startsWith(item.path) : item.path === pathName ;
  
   const parentpath = pathName && item.path
    ? (item.path.length > 1 ? pathName.startsWith(item.path) : item.path === pathName)
    : false;
  const childPath = item.submenu.filter(item =>item.path===pathName).length;

  console.log("parentpath", parentpath, "pathName",pathName, "item.path:",item.path)
  console.log("childPath", childPath);
  return (
    <div className={`sidebar-item ${isOpen ? 'open' : ''}`} style={{marginBottom:"0px", padding:'5px', border:"1px solid red"}}>
      <div
        className={`sidebar-header ${hasSubmenu ? 'has-submenu' : ''} ${isActive ? 'active ' : ''}  `}
        onClick={() => onToggle()}
        style={{backgroundColor:parentpath?"none" :"none", borderRadius:hasSubmenu && isOpen?"10px 10px 0 0" : "10px", borderBottom:hasSubmenu&&isOpen &&"1px solid #5657FF" , border:parentpath || childPath?"2px solid #5657FF" : "", backgroundColor:parentpath&& !isOpen?"#EEEEFF" : "" , color:parentpath&&"#5657FF"}}
      >
        {hasSubmenu ? (
          <div className='d-flex justify-content-between' style={{ padding: "12px 20px", width:"100%", }}>
            <div className='sidebar-title' >
              <span className={`sidebar-icon ${isOpen ? 'rotate-360' : ''}`}>{item.icon}</span> {item.title}
            </div>
            <div className={`sidebar-icon ${isOpen ? 'rotate' : ''}`}>
              {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
        ) : (
          <div className='sidebar-title w-100'>
            <Nav className="flex-column" style={{ width: "100%" ,  }}> 
              <Nav.Link as={Link} href={item.path} key={item.title} style={{ padding: "0px", color:parentpath?"#5657FF" :"#5C626C" , transition:"all 0.45s",  padding:"12px 20px", borderRadius:'10px'}} className='sidebar-title'>
                {item.icon} {item.title}
              </Nav.Link>
            </Nav>
          </div>
        )}
      </div>
      {isOpen && hasSubmenu && (
        <div className="sidebar-body">
          <Nav className="flex-column single-menu">
            {item.submenu.map(subItem => (
              <Nav.Link as={Link} href={subItem.path} key={subItem.title} style={{ marginLeft: "0px", padding:"5px 10px  10px 40px",color:pathName===subItem.path ? "#5657FF" : "" }} >
                {subItem.title}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      )}
    </div>
  );
}
