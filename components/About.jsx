import React from 'react'
import Inder from '../public/Inder.png'
const About = () => {
  return (
    <div className='bg-black text-white text-center py-16' id='about'>
      
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row item-center md:space-x-12 '>
                <img src={Inder} alt="" className='w-72 h-90 rounded object-cover mb-8 md:mb-0 mt-3'/>
                <div className='flex-1'> 
                    <p className='text-lg text-left mb-8'>
                        Hi, I’m Inderjeet Singh, a passionate Full-Stack Developer from NIT Jalandhar with over 2 years of experience in building scalable and responsive web applications. I specialize in HTML, CSS, React.js, and Node.js, and enjoy crafting seamless user experiences with clean, maintainable code.
<br />
I’ve had the opportunity to work with 10+ clients, delivering high-quality solutions in web design, content writing, and digital marketing. Whether it's frontend magic or backend logic, I strive to bridge the gap between design and development, ensuring performance, accessibility, and user satisfaction.
<br /><br />
Let’s build something great together!
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                         <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>

                    <div className='mt-12 flex justify-between          text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r form-green-400 to-blue-500'>
                                2+
                            </h3>
                            <p>Years Experience</p>
                        </div>
                         <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r form-green-400 to-blue-500'>
                                10+
                            </h3>
                            <p>Projects Completed</p>
                        </div>
                         <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r form-green-400 to-blue-500'>
                                10+
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default About
