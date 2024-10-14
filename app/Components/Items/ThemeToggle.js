"use client";

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AiFillMoon } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";

export default function ThemeToggle(hideText) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center p-4" style={{width:'100px'}}>
      {/* Toggle Container */}
      <div
        className={`relative w-full py-4 flex items-center p-2 rounded-full cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
          theme === "dark" ? "bg-neutral-800 border  border-gray-600" : "bg-gray-200 border  border-gray-300"
        }`}
        onClick={toggleTheme}
        
      >
        {/* Icon */}
        <div
          className={`absolute transform-translate-y-1/2 transition-all duration-500 ease-in-out ${
            theme === "dark" ? "left-full -translate-x-full" : "left-2"
          }`}
        >
          <div className={`flex items-center justify-center w-6 h-6 rounded-full shadow-xl mr-2 ${theme==='dark'? 'bg-gray-600':'bg-white'}`} >
            {theme === "light" ? (
              <BsFillSunFill className="text-yellow-500" />
            ) : (
              <AiFillMoon className="text-amber-200" />
            )}
          </div>
        </div>

        {/* Text */}
        {!hideText&&(
          <>
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
              theme === "dark" ? "opacity-0 -translate-x-full" : "right-4 opacity-100"
            }`}
          >
            <span className="text-sm font-bold dark:text-white">
              {theme === "light" ? "Light theme" : ""}
            </span>
          </div>

        {/* Text Animation for Dark Mode */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
            theme === "dark" ? "left-4 opacity-100" : "opacity-0 translate-x-full"
          }`}
        >
          <span className="text-sm font-bold dark:text-white text-slate-300">
            {theme === "dark" ? "Dark theme" : ""}
          </span>
        </div>
          </>
        )}
          
      </div>
    </div>
  );
}
