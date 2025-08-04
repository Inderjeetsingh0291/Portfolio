import React from 'react';
import {FaFacebook,FaLinkedin,FaTwitter,FaGithub, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Inder</h3>
                <p className='text-gray-400'>
                    Full-Stack Developer based in the India, Spacializing in web and software developement
                    </p>
            </div>
            <div className='flex-1 w-full'>
                <form className='flex items-center justify-center'action='https://getform.io/f/anlxrdwa' method='POST'>
                    <input type="email" name='email'
                    placeholder='Your email'
                    className="w-full p-2 rounded-1-1g bg-gray-800 border border-gray-600
focus:outline-none focus:border-green-400" />
                    <button
                    type='submit'
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>
                </div>
            </div>


            
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between item-center'
                >
                    <p>
                        &copy; {new Date().getFullYear()} Inder. All rights reserved.
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                    
                    <a href="https://www.linkedin.com/in/inderjeet-singh-1663732b5"
                        className="text-gray-400 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FaLinkedin />
                    </a>

                    <a href="https://x.com/inder_0291?s=21" className='text-gray-400 hover:text-white ' target="_blank" 
                    rel="noopener noreferrer">
                        <FaTwitter/>
                    </a>
                    <a href="#"className='text-gray-400 hover:text-white'>
                        <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/inder_0291?igsh=MTlnZ3NybXV2dWZmeg%3D%3D&utm_source=qr"className='text-gray-400 hover:text-white' target="_blank" 
                     rel="noopener noreferrer">
                        <FaInstagram/>
                    </a>
                    </div>
                
                <div>
                    <a href="#"className='text-gray-400 hover:text-white'>
                        Privacy
                    </a>
                    <a href="#"className='text-gray-400 hover:text-white'>
                        Terms of Services
                    </a>
                </div>
            </div>
            </div>
    </footer>
    
  )
}

export default Footer
