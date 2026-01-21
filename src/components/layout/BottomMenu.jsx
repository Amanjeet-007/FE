import { use, useState } from "react";
import { NavLink } from "react-router";

const Search = () => {
    return (
        <div className="flex items-center w-full px-4 py-3 md:py-0 fixed top-15 bg-gray-400 z-50">
            <label className="flex items-center w-full bg-slate-100 rounded-2xl px-4 py-2 border border-gray-600 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
                <input
                    type="text"
                    placeholder="Search Anything"
                    className="bg-transparent w-full text-sm outline-none text-slate-700 placeholder:text-slate-400"
                />
            </label>
            {/* Mobile Dot Menu */}
            <svg className="md:hidden block ml-2" xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 24 24" fill="rgba(0,0,255,1)"><path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>
        </div>
    );
};


export default function BottomMenu() {
    const options = [
        {
            path: '/',
            icon: <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863Z"></path></svg>,
            label: "Home"
        },
        {
            path: '/store',
            icon: <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.999V20C22 20.5523 21.5523 21 21 21H13V9.999H22ZM11 15.999V21H3C2.44772 21 2 20.5523 2 20V15.999H11ZM11 3V13.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V7.999H13V3H21Z"></path></svg>,
            label: "Store"
        },
        {
            isSearch: true, // Special tag for search button
            icon: <svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>,
            label: "Search"
        },
        {
            path: '/wishlist',
            icon: <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>,
            label: "Saved"
        },
        {
            path: '/profile',
            icon: <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>,
            label: "Account"
        }
    ];

    const [search,setSearch ] = useState(false);

    return (
        <> 
        {search && <Search/>}
        
        <div className="fixed -bottom-1 left-0 right-0 h-16 md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-100 px-4 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
            <ul className="flex items-center justify-between h-full max-w-md mx-auto">
                {options.map((el, i) => {
                    // Render Search Button
                    if (el.isSearch) {
                        return (
                            <li key={i} className="flex flex-col items-center justify-center -translate-y-4" onClick={()=>setSearch(el=>!el)}>
                                <button
                                    onClick={() => console.log("Open Search Modal")}
                                    className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-300 active:scale-90 transition-transform duration-200 border-4 border-white"
                                >
                                    {el.icon}
                                </button>
                                <span className="text-[10px] font-bold text-blue-600 mt-1">Search</span>
                            </li>
                        );
                    }

                    // Render Standard Links
                    return (
                        <NavLink
                            key={i}
                            to={el.path}
                            className={({ isActive }) =>
                                `relative flex flex-col items-center justify-center transition-all duration-300 w-12 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={`transition-all duration-300 ${isActive ? 'scale-110 -translate-y-1' : 'scale-100'}`}>
                                        {el.icon}
                                    </div>
                                    <span className={`text-[10px] font-medium transition-all ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                                        {el.label}
                                    </span>
                                    {isActive && (
                                        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-600 animate-pulse"></div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </ul>
        </div>
        </>

    );
}