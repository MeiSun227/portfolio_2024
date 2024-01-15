import img2 from '../assets/img2.png'
import AboutCard from './Card/AboutCard'

const AboutSection =()=>{
    return(
    <div id="about" className='mt-48'>
         <h2 className="text-3xl font-bold mb-4 pb-2">About Me</h2>
         <hr className="mx-auto mb-4 w-20 border-t-2 border-gray-500 "/>
         <div className='h-full px-10 pr-10 mt-10 my-10 justify-center items-center md:py-10 mx-10 md:flex relative'>
            <img src={img2} alt="girl" width={280} height={280} className="img-glow  rounded-full bg-indigo-400 lg:w-1/3 mb-4 md:mb-0 lg:pl-10" />
         <div className=' mb-8 mt-1 md:container  md:flex-row md:w-1/2 pl-2  md:px-3' >
            <p className='leading-7  font-body'> Hey! Warm greeting from Finland. <span>I'm a student turned software engineer. I specialize in the backend,frontend and primarily Node and React, but love building with whatever tools are right for the job.</span></p>
            <p className='leading-7 md:pt-2 font-body'> I'm looking for new positions where I can continue learning and developing. If you think you've got an opening that I might like, let's connect </p>
        </div>
         </div>
         <div className="md:flex flex-row items-center justify-center expanded ">
             <AboutCard/>
             </div>
          
    </div>)
}

export default AboutSection
