"use client";
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';  // Hook to get the pathname
import { GoHomeFill } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiStickyNoteAddFill, RiPassPendingFill, RiUserSettingsFill } from "react-icons/ri";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { MdAssignmentAdd } from "react-icons/md";
import Image from 'next/image';
import Logo from '../../../assets/Images/logo.svg';
import SidebarItem from '../Items/SidebarItems';


export default function Sidebar({ isMobileOpen, toggleMobileMenu }) {
  const [openItem, setOpenItem] = useState(null);
  const pathname = usePathname();  // Get the current path

  const handleToggle = (item) => {
    setOpenItem(openItem === item.id ? null : item.id);
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
        { id: 21, title: "Employees", path: "/resource/employees" },
        { id: 22, title: "External", path: "/resource/external" }
      ]
    },
    {
      id: 3,
      title: "Set Questions",
      icon: <RiStickyNoteAddFill style={{ transform: 'scale(1.3)' }} />,
      path: "/setquestion",
      submenu: []
    },
    {
      id: 4,
      title: "Request Hub",
      icon: <BiSolidAlarmAdd style={{ transform: 'scale(1.3)' }}/>,
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
        { id: 71, title: "Pre-Recruitment", path: "/recruitment/prerecruitment" },
        { id: 72, title: "Post-Recruitment", path: "/recruitment/postrecruitment" }
      ]
    },
  ];

  const renderedMenuItems = useMemo(() => menuItems.map((item) => (
    <SidebarItem
      key={item.id}
      item={item}
      pathName={pathname}
      isOpen={openItem === item.id}
      onToggle={() => handleToggle(item)}
      mobileclose={toggleMobileMenu}
      ismobileDevice={isMobileOpen}
    />
  )), [menuItems, pathname, openItem, isMobileOpen]);

  return (
    <nav className="h-full py-4 px-2 overflow-auto scrollbar-hidden custom-scrollbar pt-5 overflow-hidden overflow-y-auto bg-[var(--card-bg)] border border-[var(--card-stroke)] rounded-lg">
      <div className="flex flex-col items-center mb-10">
        <Image src={Logo} width={50} height={50} alt="Logo" />
        <h5 className="font-bold">Recruitment 360</h5>
      </div>
      <hr className='border-1 border-[var(--color-border)]' />
      {renderedMenuItems}
    </nav>
  );
}
