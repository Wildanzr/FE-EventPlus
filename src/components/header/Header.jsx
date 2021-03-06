import React from 'react'
import '../../css/Header.css'
import Logo from '../../images/web/logoevent.jpg'

const Header = () => {
  return (
    <section className="h-full w-full border-box transition-all duration-500 linear lg:px-24 md:px-20 px-3 py-3 bg-[#F2F5FA]">
      <div className="navbar-1-1">
        <div className="container mx-auto flex flex-wrap flex-row items-center justify-between md:px-0 md:py-1">
          <a href="" className="flex font-medium items-center">
            <img
              src={Logo}
              className="items-center rounded-lg"
              width="120"
              height="80"
            />
          </a>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#092A33"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full lg:ml-auto lg:mr-auto flex-wrap items-center text-base justify-center"
            id="menu"
          >
            <nav className="items-center justify-center text-base text-[#5C7B99] pt-4 space-x-0 space-y-4 lg:space-x-20 lg:flex lg:pt-0 lg:space-y-0">
              <a
                href=""
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Home
              </a>
              <a
                href=""
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Event
              </a>
              <a
                href=""
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Company
              </a>
              <a
                href=""
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Contacts
              </a>
            </nav>
          </div>

          <div
            className="hidden text-center lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <a href="">
              <button className="bg-[#003366] font-nunito text-white items-center border-0 py-1 px-10 focus:outline-none rounded-lg font-medium text-base mt-6 lg:mt-0">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
