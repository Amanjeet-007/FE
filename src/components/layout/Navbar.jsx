/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import useSession from "../../hooks/useSession";
import { logout } from "../../Api/auth";
import SignOutModal from "../common/Signout";
import { searchProduct } from "../../Api/product";
import HighlightMatch from "../common/HighlightMatch";

// Verification Popup Component
function VarifyPopUp({ onClose, email }) {
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 z-300 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md rounded-xl p-6 shadow-lg animate-in zoom-in-95 duration-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-700">Verify Email</h3>
          <p className="text-slate-500 mt-2 text-sm">Sent to: {email || "your email"}</p>
        </div>
        <div className="mt-6 space-y-4">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full text-center py-3 bg-slate-100 border border-gray-600 rounded-xl outline-none focus:border-blue-500"
          />
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200" onClick={() => console.log(otp)}>
            Verify
          </button>
          <button onClick={onClose} className="w-full text-gray-400 text-sm">Cancel</button>
        </div>
      </div>
    </div>
  );
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!query) setSuggestions([]);
    const delay = setTimeout(async () => {
      if (query.length < 2) { setSuggestions([]); return; }
      const res = await searchProduct(query);
      setSuggestions(res);
    }, 400);
    return () => clearTimeout(delay);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    if (e.key === "ArrowUp") setActiveIndex((prev) => Math.max(prev - 1, 0));
    if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(suggestions[activeIndex].name);
      setSuggestions([]);
    }
  };

  return (
    <div className="flex items-center w-full px-4 py-3 md:py-0 relative">
      <label className="flex items-center w-full bg-slate-100 rounded-2xl px-4 py-2 border border-gray-600 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Anything"
          className="bg-transparent w-full text-sm outline-none text-slate-700 placeholder:text-slate-400"
        />
      </label>
      {suggestions.length > 0 && (
        <div className="rounded-t-0 absolute top-full left-0 right-0 w-[85%] mx-4 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((item, index) => (
            <div
              key={item._id}
              onClick={() => { setQuery(item.name); setSuggestions([]); }}
              className={`flex items-center px-4 py-3 text-sm cursor-pointer transition ${index === activeIndex ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <span className="mr-2 text-gray-400">🔍</span>
              <span className="truncate"><HighlightMatch text={item.name} query={query} /></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ filter = true }) => {
  const authStatus = useSelector((state) => state.auth.value);
  const [all, setAll] = useState(false); // Left Sidebar
  const [showNoti, setShowNoti] = useState(false); // Right Notification Sidebar
  const [popup, setPopup] = useState(false); // Verification Popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeSession, getSession } = useSession();
  const user = getSession();

  const [res, setRes] = useState(user);
  const [role, setRole] = useState(null);

  // Notifications logic
  const notifications = [
    { name: "verification", message: "Please verify your email by entering your OTP." }
  ];

  const triggerSignOutSideBar = (e) => {
    e.preventDefault();
    setAll(false);
    setIsModalOpen(true);
  };

  async function handleLogout() {
    try {
      await logout();
      removeSession();
      setIsModalOpen(false);
      window.location.reload();
    } catch (err) {
      console.log("Logout failed:", err);
    }
  }

  useEffect(() => {
    if (res) setRole(res.role);
  }, [res]);

  const AllInMobile = [
    { name: "Fresh", path: "/" },
    { name: "Today's Deals", path: "/" },
    { name: "Sell", path: "/request" },
    { name: "Buy Again", path: "/" },
    { name: "Gift Card", path: "/" },
    { name: "History", path: "/" },
    { name: "Customer Service", path: "/" },
  ];

  const All = [
    { heading: "Trending", option: [{ name: "Bestsellers", path: "/" }, { name: "New Releases", path: "/" }, { name: "Movers and Shakers", path: "/" }] },
    { heading: "Digital Content and Devices", option: [{ name: "Smartphones", path: "/" }] },
    { heading: "Programs & Features", option: [{ name: "Gift Cards & Mobile Recharges", path: "/" }, { name: "Neo Business", path: "/" }] },
    { heading: "Help & Settings", option: [{ name: " Your Account ", path: "/profile" }, { name: "Customer Service", path: "/service" }, { name: authStatus ? "Sign out" : "Sign in", path: authStatus ? "/" : "/auth" }] },
  ];

  const filterOptions = [
    { name: "All", path: "/" },
    { name: "Fresh", path: "/" },
    { name: "Today's Deals", path: "/" },
    { name: "Sell", path: (role == "seller" ? "/deskboard" : "/request") },
    { name: "Buy Again", path: "/" },
    { name: "Gift Card", path: "/" },
    { name: "History", path: "/" },
  ];

  return (
    <header className="w-full bg-white z-100">
      <SignOutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleLogout} />
      
      {/* Verification Popup */}
      {popup && <VarifyPopUp onClose={() => setPopup(false)} email={user?.email} />}

      {/* Navbar */}
      <nav className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between border-b border-slate-50 fixed top-0 w-full bg-white">
        <div className="flex-1 md:hidden">
          <div onClick={() => setAll(true)} className="cursor-pointer p-2 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="black">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-1 justify-center md:justify-start md:flex-none">
          <Link to={"/"} className="flex items-center gap-2">
            <div className=" logo w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">Neo</div>
            <span className="text-xl font-bold tracking-tight text-blue-600 hidden md:block">ecommerce</span>
          </Link>
        </div>

        <div className="hidden md:flex grow justify-center px-10"><Search /></div>

        <div className="flex flex-1 justify-end items-center gap-2 md:gap-5">
          {/* Notification Trigger */}
          <div className="notification text-black relative cursor-pointer" onClick={() => setShowNoti(true)}>
            <div className="bg-red-200 text-blue-500 font-bold absolute items-center flex justify-center rounded-2xl right-2 -top-2 px-1 py-.5">
              {notifications.length}
            </div>
            <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,74,212,1)">
              <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path>
            </svg>
          </div>

          {/* Role Based Icons */}
          <Link to={authStatus ? (role == "seller" ? "/deskboard" : "/cart") : "/auth"} className="p-2 hover:bg-blue-50 rounded-xl transition-all">
            <svg width="30" viewBox="0 0 24 24" fill="rgba(0,74,212,1)">
              <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
            </svg>
          </Link>
          <Link to={authStatus ? "/profile" : "/auth"} className="md:block hidden">
            <svg width="30" viewBox="0 0 24 24" fill="rgba(0,74,212,1)">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C13.1046 15 14 15.8954 14 17H16C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17H10C10 15.8954 10.8954 15 12 15Z"></path>
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden border-b border-slate-100 mten mt-16">
        <Search />
      </div>

      {/* Filters Bar */}
      {filter && (
        <div className="hidden w-full justify-around md:flex bg-slate-50/80 border-b border-slate-100 h-11 items-center px-4 overflow-x-auto no-scrollbar whitespace-nowrap gap-6 text-sm font-semibold text-slate-500 mten mt-20">
          {filterOptions.map((el, i) => (
            <Link to={el.path} key={i}>
              <div onClick={i === 0 ? () => setAll(true) : null} className={`flex items-center cursor-pointer hover:text-blue-600 transition-colors relative ${i === 0 ? "text-blue-600" : ""}`}>
                {i === 0 && <svg className="mr-1" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>}
                {el.name}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Right Sidebar (Notifications) */}
      {showNoti && (
        <div className="fixed inset-0 z-250 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowNoti(false)}></div>
          <div className="relative w-full max-w-75 bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <p className="font-bold text-lg">Notifications</p>
              <div onClick={() => setShowNoti(false)} className="cursor-pointer text-xl">✕</div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {notifications.map((n, i) => (
                <div 
                  key={i} 
                  onClick={() => { setShowNoti(false); setPopup(true); }}
                  className="p-4 border border-gray-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-all"
                >
                  <p className="font-bold text-blue-600 text-sm">{n.name === "verification" ? "Verify Email" : n.name}</p>
                  <p className="text-slate-600 text-xs mt-1">{n.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar (Menu) */}
      {all && (
        <div className="fixed inset-0 z-200 flex">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setAll(false)}></div>
          <div className="relative w-full max-w-75 bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-left duration-300 overflow-hidden">
            <div className="bg-blue-600 p-6 text-white shrink-0">
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold">Hi</div>
                <div onClick={() => setAll(false)} className="cursor-pointer text-2xl font-bold">✕</div>
              </div>
              <p className="font-bold text-lg">Hello, {user ? user.name : "Welcome"}</p>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              {All.map((section, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">{section.heading}</p>
                  <div className="space-y-3">
                    {section.option.map((opt, j) => (
                      <Link 
                        key={j} 
                        to={opt.path} 
                        className={`flex justify-between items-center font-bold text-sm ${opt.name === "Sign out" ? "text-red-600" : "text-slate-700"}`}
                        onClick={opt.name === "Sign out" ? triggerSignOutSideBar : () => setAll(false)}
                      >
                        {opt.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;