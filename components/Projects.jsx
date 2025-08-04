import React from 'react';

const projects =[
    {
        id:1,
        name:"Online Food Ordering System",
        technologies: "Python",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTsKBgt67g7V83MUa-6I2Ex33DrnrxBDwMw&s",
        github:"https://github.com/Inderjeetsingh0291/Python_Project",
    },
    {
        id:2,
        name:"Pizza_Haven",
        technologies: "HTML,CSS,JS",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZULgn7jR5IH6sCNm5PjEnH1xTaSLFJLmx8w&s",
        github:"https://github.com/Inderjeetsingh0291/Pizza_Haven",
    },

    
]


const Projects = () => {
  return (
     <div className='bg-black text-white text-center py-16' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {projects.map((project)=>(
                <div key={project.id} className="bg-gray-800 p-6 rounded-1g hover: shadow-1g transform transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.name} className=" mx-auto rounded-full mb-4 w-40 h-40 object-cover" />
            <h3 className="text-2x1 font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a href={project.github} className="inline-block bg-gradient-to-r
            from-greed-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
            rel="noopener noreferrer">GitHub</a>
                </div>
            ))}


            </div>
        </div>   
    </div>  
  )
}

export default Projects
