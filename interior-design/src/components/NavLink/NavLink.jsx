import React from 'react'
import { Link } from 'react-scroll'


export const NavLink = ({ children, to, offset = -50, isMobileMenu = false }) => {
  const className = isMobileMenu
    ? "text-black text-center hover:text-white w-full"
    : "lg:text-xl text-white hover:bg-clip-text hover:text-transparent";

  return (
    <li className={`text-lg cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 capitalize ${className}`}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        {children}
      </Link>
    </li>
  )
}

export const NavList = ({ links, isMobile }) => {
  const toggelMobile = isMobile
    ? 'pt-4 flex flex-col gap-4 items-center md:hidden'
    : 'hidden md:flex items-center gap-10 lg:gap-[68px]'

  return (
    <ul className={toggelMobile} >
      {links &&
        links.map(({ id, name, link }) => (
          <NavLink
            key={id}
            to={link}
            isMobileMenu={isMobile}
          >
            {name}
          </NavLink>
        ))
      }

    </ul>
  );
}



