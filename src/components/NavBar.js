/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Logo from './Logo';
import React from 'react';
import {useRouter} from 'next/router';
import { GithubIcon, LinkedInIcon, EmailIcon } from './Icons';
import {motion} from 'framer-motion';

const CustomLink = ({href, title, className=""}) => {  
    const router = useRouter();
    return (
        <Link href = {href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 
            ${router.aspath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    );
}

const NavBar = () => { 
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
    
    <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="Shahed_Issa_Resume.pdf" title="Resume" className='mx-4' target="_blank" />
    </nav>

    <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://github.com/Shahed-i" target={"_blank"} whileHover={{y:-5}} whileTap={{scale:0.9}} className='w-9 mr-5'><GithubIcon /></motion.a>
        <motion.a href="https://www.linkedin.com/in/shahed-issa/" target={"_blank"} whileHover={{y:-5}} whileTap={{scale:0.9}} className='w-9 ml-5'><LinkedInIcon /></motion.a>
        <motion.a href="mailto:shahedissa9@gmail.com" target={"_blank"} whileHover={{y:-5}} whileTap={{scale:0.9}} className='w-9 mr-5 ml-10'><EmailIcon /></motion.a>
    </nav>

    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
    </div>

    </header>
  );
}

export default NavBar;