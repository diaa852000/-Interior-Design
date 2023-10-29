import React, {useState} from 'react'

import heroImage from "../../assets/hero-image.svg"
import logo from '../../assets/logo.svg'
import cartIcon from '../../assets/cart-icon.svg'
import searchIcon from '../../assets/search-icon.svg'

import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'

import {heroTitle, heroSubtitle, links} from '../../fixtures/data'

import  {NavList, NavLink } from '../../components/NavLink/NavLink'
import FadeIn from '../../components/FadeIn/FadeIn'

const Hero = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className='h-screen relative flex flex-col items-center bg-hero bg-bottom bg-no-repeat bg-cover'>
            <div className='container relative w-full flex items-center justify-between pt-5 px-4 md:pt-10 md:px-10'>
                <img src={logo} alt="logo" />
                <NavList links={links}/>
                <img 
                    src={cartIcon} 
                    alt="cartIcon"
                    className='hidden md:block cursor-pointer'
                />

                <HiMenuAlt3 size={30} className='block md:hidden cursor-pointer text-white' onClick={() => setShowMobileMenu(prev => !prev)}/>

                <div 
                    className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[312px]" : "top-0"} left-0 bg-[#dde0e5] h-[310px] transition-all duration-[800ms] shadow-xl z-10 px-12 py-8 rounded-b-xl`}
                >
                    <AiOutlineClose size={25} className='absolute top-5 right-5 cursor-pointer text-black' onClick={() => setShowMobileMenu(prev => !prev)}/>

                    {links && <NavList links={links} isMobile/> }
                    <img src={cartIcon} alt="cartIcon" className='mt-8 mx-auto cursor-pointer' />
                </div>
            </div>
            <FadeIn delay={0.2} direction={"down"} padding fullWidth >
                <h1 className='mt-[90px] text-center text-5xl leading-tight xs:text-[4rem] text-white max-w-[1050px]'>
                    {heroTitle}
                </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction={"down"} padding fullWidth >
                <h1 className='mt-6 text-center text-lg xs:text-xl text-white max-w-[500px] font-semibold'>
                    {heroSubtitle}
                </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction={"up"} padding fullWidth>
                <div className='relative w-full xs:w-[460px] mt-11'>
                    <input 
                        type="text" 
                        placeholder='Search'
                        className='rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white'
                    />
                    <img src={searchIcon} alt="searchIcon" className='absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer'/>
                </div>
            </FadeIn>

            <div className='absolute bottom-0 h-[50px] xs:h-[150px] w-full bg-gradient-to-b from-[#ffffff00] to-[#ffffff]'/>
        </div>
    )
}

export default Hero