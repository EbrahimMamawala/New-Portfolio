import React from 'react'
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

  const links =[
    {
        id: 1, 
        child: (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href: "https://linkedin.com/in/ebrahim-mamawala",
        style: 'rounded-tr-md',
    },
    {
        id: 2, 
        child: (
            <>
                GitHub <FaGithub size={30}/>
            </>
        ),
        href: "https://github.com/EbrahimMamawala",
    },
    {
        id: 3, 
        child: (
            <>
                Mail <HiOutlineMail size={30}/>
            </>
        ),
        href: "mailto:ebrahimmamawala@gmail.com",
    },
    {
        id: 4, 
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href: "//resume link",
        style: 'rounded-br-md',
        download: true,
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map((link) => (
                // eslint-disable-next-line no-useless-concat
                <li key={link.id} className={"flex justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rouded-md duration-300" + " " + link.style}>
                    <a href={link.href}
                    className='flex justify-between items-center w-full text-white'
                    download={link.download}
                    target='_blank' rel="noreferrer">
                        {link.child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks