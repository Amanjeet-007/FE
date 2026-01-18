import { useState } from "react";
import { Link } from "react-router";

const Search = () => {
  return (
    <>
      <label htmlFor="search" className='searchlable flex bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width='30' viewBox="0 0 24 24" fill="#8c8c8c"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        <input type="text" placeholder="Search Anything" className='focus:outline-none focus:ring-0' />
      </label>
    </>

  )
}

const Navbar = ({ filter = true }) => {

  const [all, setAll] = useState(false)

  /*
Echo & Alexa
Fire TV
Kindle E-Readers & eBooks
Audible Audiobooks
Amazon Prime Video
Amazon Prime Music
Shop by Category
Mobiles, Computers
TV, Appliances, Electronics
Men's Fashion
Women's Fashion
See all
Programs & Features
Gift Cards & Mobile Recharges
Amazon Launchpad
Amazon Business
Handloom and Handicrafts
See all
Help & Settings
Your Account
Customer Service
Sign in
   */


  const All = [
    {
      heading: "Trending",
      option: [{
        name: 'Bestsellers',
        path: '/'
      }, {
        name: 'New Releases',
        path: "/"

      }, {
        name: "Movers and Shakers",
        path: "/"
      },]
    },
    {
      heading: "Digital Content and Devices",
      option: [
        {
          name: "Smartphones",
          path: "/"
        }
      ]
    }
  ]
  const filterOptions = [
    { name: "All", path: "/" },
    { name: "Fresh", path: "/" },
    { name: "Today's Deals", path: "/" },
    { name: "Sell", path: "/" },
    { name: "Buy Again", path: "/" },
    { name: "Gift Card", path: "/" },
    { name: "Hitory", path: "/" },
    { name: "Customer Service", path: "/" },
  ]

  return (
    <header className="sticky top-0 bg-primary border-b shadow-sm backdrop-blur-lg bg-opacity-95 z-50">
      <nav className='h-min'>
        {/* menu icon for mobile */}
        <div className="menuIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width='30' viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
        {/* Logo */}
        <div className="logo text-2xl font-bold ">
          NeoShop
        </div>
        {/* options menu */}
        <div className="mainSearch">
          <Search />
        </div>

        {/* cart and account*/}
        <div className="rightCorner justify-between flex items-center">
          <div className="cart ">
            <Link to={'/cart'} >
            <svg xmlns="http://www.w3.org/2000/svg" width='30' viewBox="0 0 24 24" fill="#030712"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg></Link>
          </div>
          <div className="account">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="#030712"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C13.1046 15 14 15.8954 14 17H16C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17H10C10 15.8954 10.8954 15 12 15Z"></path></svg>
          </div>
        </div>


      </nav>
      {
        filter &&
        <div className="search_filter ">
          <div className="filter justify-around w-full ">
            {/* options */}
            {
              filterOptions.map((el, i) => {
                return (
                  (i == 0) ?
                    <div className="text-black flex items-center " key={i} onClick={() => setAll(el => !el)}>
                      <svg style={{ margin: "5px" }} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                      {el.name}
                    </div> :
                    <div className="text-black" key={i}>
                      {el.name}
                    </div>
                )
              })
            }
          </div>
          {/* search */}
          <div className="search">
            <Search />
          </div>
        </div>
      }
      {
        all &&
        <div className="Alloption absolute h-[80vh] w-100 top-38 left-0 flex items-center bg-blue-500 flex-col">
          <div className="cut absolute -right-10 font-bold cursor-pointer text-2xl text-blue-700 border-2 border-amber-500 w-10 flex justify-center" on>X</div>
          {
            All.map((el, i) => {
              return (
                <>
                  <p key={i} className="font-bold text-xl">{el.heading}</p>
                  {
                    el.option.map((a, i) => {
                      return(
                        <p >{a.name}</p>
                      )
                    })
                  }
                </>)
            })
          }
        </div>
      }
    </header>
  );
};

export default Navbar;