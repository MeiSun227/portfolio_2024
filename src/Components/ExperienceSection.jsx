import myData from '../../db.json';


const ExperienceSection=()=>{
    const experiences = myData.experiences;

    return(
        <div id="experience" className='mt-32 overflow-hidden shadow-lg ' >
            <div className='mt-9 gap-4 grid'>
         <h2 className=" text-3xl font-bold mb-4 pb-2">Work Experiences</h2>        
          <hr className=" mx-auto mb-4 w-20 border-t-2 border-gray-500 "/>
            {experiences.map((experience,index)=>(
                <div key={index } className="pt-2 px-3 items-start justify-between ">
                    <div className='flex'>
                    <h2 className='flex-1 font-extrabold font-body text-2xl text-left'>{experience.company} </h2>
                    <span className=" text-base text-center right-0 align-bottom justify-center">{experience.year}</span>
                     </div>
                     <div className='flex'>
                     <h3 className=" flex-1 mt-2 items-start text-left font-body font-medium text-green-500">{experience.title}</h3>
                    <span className='text-sm mt-2 text-center right-0 align-bottom justify-center font-body' >{experience.location}</span>
                    </div>
                    <p className='text-left mt-2 pb-2 font-light'>{experience.description}</p>
                    <div className="flex justify-start gap-2 mt-4 flex-wrap pb-2 mb-4 " >
                  {experience.tech.map((tech,index)=>( <p key={index} className='text-left inline-block mx-2 px-2 pb-1 font-body text-sm border-1 rounded-md shadow-lg bg-slate-800/80 glass pt-2'> {tech}</p>))}
                  </div>
                  <div className="flex-grow border-t border-gray-400/30"></div>
                </div>
         
            ))}
             </div>
        </div>

    );
}

export  default ExperienceSection