import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import ExperienceSection from "../Components/ExperienceSection";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import TechSection from "../Components/TechSection";


const HomeScreen=()=>{
    return(
        <div className="container mx-auto relative">
            <div className="absolute top-0 -left-4 w-96 h-72 bg-indigo-500 rounded-full filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/2 -right-4 w-72 h-72 bg-yellow-300 rounded-full  filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/3 -1/4 left-0 w-72 h-72 bg-blue-300 rounded-full  filter blur-xl opacity-20 animate-blob animation-delay-1000"/>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-400 rounded-full mix-blend filter blur-xl opacity-30 animate-blob animation-delay-4000">
            <div className="absolute top-1/2 -right-1/3 w-72 h-72 bg-[#eb1298]  rounded-full  filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>
            <section >
                 <HeroSection/>
                 </section>
            <section >
            <AboutSection/>
            </section>
            <section>
                <TechSection/>

            </section>
            <section>
                <ExperienceSection/>
            </section>
            <section>
                <ProjectSection/>
            </section>
            <section>
                <ContactSection/>
            </section>
                   </div>
            
    )
}

export default HomeScreen;