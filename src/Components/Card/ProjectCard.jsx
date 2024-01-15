import { AiOutlineGithub, AiOutlineShareAlt  } from 'react-icons/ai'


const ProjectCard = ({project}) => {
    const techs = project.techInused.map((tech,index)=>(<div key={index} className=" text-sm font-semibold p-1  text-green-500 mr-1 mb-1">{tech +'-'}</div>))
 
    return(
        <div className="p-4 ">
            <div className="flex overflow-hidden rounded-lg h-full p-8 flex-col bg-slate-50/10 glass">
                <div className="flex items-center mb-3">
                    <h2 className="text-white text-xl font-bold font-body px-1">{project.name}</h2>
                    <div className="flex-grow border-t border-x-white-400 mt-2"></div>
                    <a href={project.link}> <AiOutlineShareAlt size='28px'/></a>
                    <a  href={project.github}><AiOutlineGithub size='28px' /></a>
                </div>
                <div className='flex flex-wrap'>
                    {techs}
                </div>
                <div className='text-left'>
                    <p className="font-body leading-7">
                        {project.description}
                        <div className="text-green-800"><a href="#"> Learn more {'>'}</a></div>
                    </p>     
                </div>
            </div>
        </div>
        
    )  
}

export default ProjectCard