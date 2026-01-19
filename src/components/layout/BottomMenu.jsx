import { NavLink } from "react-router"

export default function BottomMenu(){
    const options = [
        {
            path:'/',
            icon:<svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(10,10,10,0.7)"><path d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863Z"></path></svg>
        },
        {
            path:'/store',
            icon:<svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(10,10,10,0.7)"><path d="M22 9.999V20C22 20.5523 21.5523 21 21 21H13V9.999H22ZM11 15.999V21H3C2.44772 21 2 20.5523 2 20V15.999H11ZM11 3V13.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V7.999H13V3H21Z"></path></svg>
        },
         {
            path:'/wishlist',
            icon: <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(200,0,0,1)"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
        },
         {
            path:'/profile',
            icon: <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(10,10,10,.7)"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
        },
        //  {
        //     path:'/',
        //     icon:
        // }
    ]
    return(
        <>
        <div className=" bottomNav absolute -bottom-6 h-14 md:hidden flex w-full bg-white">
            <ul className="flex items-center justify-around w-full">
               {
                options.map((el,i)=>{
                    return(<NavLink to={el.path}>
                    <li key={i}>
                        {el.icon}
                    </li>
                    </NavLink>)
                })
               }
                {/* <li></li> for search option */}
            </ul>
        </div>
        </>
    )
}