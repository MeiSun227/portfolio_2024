import ProjectCard from "./Card/ProjectCard"
import myData from '../../db.json';


const ProjectSection =()=>{
 const project = myData.projects.map((project)=>(<ProjectCard  key={project.id}project={project}/>))


return(
    <div className="mt-32">
        <h2 className="text-3xl font-bold mb-4 pb-2">Projects</h2>
            <hr className="mx-auto mb-4 w-20 border-t-2 border-gray-500 "/>
    <div className="relative flex py-5 items-center ">
    </div>
    <div className="md:grid grid-cols-2 gap-4 pt-5">
        {project}
    </div>
</div>
    )
}

export default ProjectSection