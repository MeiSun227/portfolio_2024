import { AiFillLinkedin, AiFillGithub , AiFillMail} from "react-icons/ai";


const ContactSection =()=>{
    return(
    <div className="mt-32">
       <div className="">
            <h2 className="text-5xl font-bold mb-4 pb-2 md:text-[78px]">Contact</h2>
            <div className="text-center font-thin">
                <p>Shoot me an email if you want to connect! You can also find me on Linkedin or download my resume if there is any interesting position.</p>
            </div>
           <div className='font-body p-3 m-3'>
               <p>work with me</p>
               </div>
               <div className="flex justify-center">
                        <div className='flex items-center justify-center h-6 w-6 rounded-full m-4 p-4'>
                        <a href="mailto:meysunlee@gmail.com" className='link-icon-mobile'><AiFillMail className='text-4xl lg:text-[ 36px] '/></a>
                    </div>
                    <div className='flex items-center justify-center h-6 w-6 rounded-full m-4 p-4'>
                    <a className='link-icon-mobile' href="https://www.linkedin.com/in/mei-sun-lee-paloposki-3565907b/" ><AiFillLinkedin  className='text-4xl lg:text-[ 36px] '/></a>
                    </div>
                    <div className='flex items-center justify-center h-6 w-6 rounded-full m-4 p-4'>
                    <a href="https://github.com/MeiSun227" className='link-icon-mobile'><AiFillGithub className='text-4xl lg:text-[ 36px] '/></a>
                    </div>
                  
                    </div>
                </div>
                </div>

    )
}

export default ContactSection