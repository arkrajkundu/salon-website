'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

import { motion } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'
import Socials from './Socials'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Header = () => {

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className='pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent'>

      {/* Topbar */}
      <div className='bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0'>
        <div className="container mx-auto h-full">
          <div className='flex items-center justify-between h-full'>
            {/* Phone & Email */}
            <div className='flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal'>
              <div className='flex items-center gap-2 text-white'>
                <FaPhoneAlt />
                <span>+916201579215</span>
              </div>
              <div className='flex items-center gap-2 text-white'>
                <IoMdMail />
                <span>arkraj.oggy@gmail.com</span>
              </div>
            </div>
            <div className='hidden xl:block'>
              <Socials containerStyles="flex gap-6 text-white" />
            </div>
          </div>

        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div>
          <Link href='/'>
            <Image src="/assets/logo.svg" width={120} height={44} priority alt='Logo' />
          </Link>
        </div>

        {/* Mobile Nav Trigger */}
        <div className='xl:hidden cursor-pointer' onClick={() => setMobileNav(!mobileNav)}>
          <AiOutlineMenu className='text-3xl text-primary' />
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className='fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50'>
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden xl:block'>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
