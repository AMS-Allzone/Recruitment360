import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Link from 'next/link';

export default function SidebarItem({ item, isOpen, onToggle, pathName, isActive, mobileclose, ismobileDevice }) {
  const hasSubmenu = item?.submenu?.length > 0;

  // Handle parent and child path checks
  const parentPath = pathName && item.path
    ? (item.path.length > 1 ? pathName.startsWith(item.path) : item.path === pathName)
    : false;
  const childPath = item?.submenu?.some(subItem => subItem.path === pathName);

  // Log for debugging
  console.log("parentPath:", parentPath, "childPath:", childPath, "pathName:", pathName);

  return (
    <div className={`mb-0 p-1 ${isOpen ? 'open' : ''}`}>
      <div
        className={`hover:scale-102 transition-transform duration-300 flex items-center justify-between cursor-pointer p-3 ${hasSubmenu && isOpen ? 'rounded-t-lg border border-[var(--custom-btn-items-stroke-Inactive)] border-b-0' : 'rounded-lg'} ${parentPath || childPath ? 'border-2 !border-indigo-600 bg-[var(--custome-btn-bg-fill)]' : ''} ${parentPath && !isOpen ? 'bg-[var(--custome-btn-bg-fill)]' : ''} ${isActive ? 'text-indigo-600' : ''} ${parentPath && isOpen && hasSubmenu ? '!border-indigo-600' : ''}`}
        onClick={() => {
          onToggle();
          if (!hasSubmenu && ismobileDevice) mobileclose();
        }}
        // style={{border:"1px solid red"}}
      >
        {hasSubmenu ? (
          <>
            <div className={`flex items-baseline justify-start space-x-2 gap-2  ${isOpen ? '' : ''}`}>
              <span className={`${isOpen ? 'rotate-360' : 'rotate-360-reverse'} ${parentPath ? 'text-indigo-600' : ''}`}>{item.icon}</span>
              <span className={`${parentPath ? 'font-semibold text-indigo-600' : ''}`}>{item.title}</span>
            </div>
            <div className={`sidebar-icon  ${isOpen ? 'rotate-180' : 'rotate-180-reverse'}`}>
              {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </>
        ) : (
          item?.path && (
            <Link key={item.id} href={item.path} className={` bg-transparent justify-start gap-2 w-full no-underline flex items-center space-x-2 items-baseline rounded-lg  ${parentPath ? 'text-indigo-600 bg-[var(--custome-btn-bg-fill)] font-semibold' : ''}`}>
              <span className=' '>{item.icon}</span>
              <span className=''>{item.title}</span>
            </Link>
          )
        )}
      </div>
      {isOpen && hasSubmenu && (
        <div className={`pl-10 pr-1 space-y-2 py-2 rounded-b-lg border border-[var(--custom-btn-items-stroke-Inactive)] ${parentPath ? 'border-2 !border-indigo-600 text-indigo-600 bg-[var(--custome-btn-bg-fill)]' : ''}`}>
          {item.submenu.map(subItem => (
            subItem?.path && (
              <Link key={subItem.id} onClick={mobileclose} href={subItem.path} className={` ease-in-out block no-underline py-2 px-4 transition-colors duration-300 rounded-lg ${pathName === subItem.path ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:bg-[var(--menu-item-hover)]'}`}>
                {subItem.title}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}
