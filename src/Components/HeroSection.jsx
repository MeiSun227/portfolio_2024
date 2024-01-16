import { useTypewriter } from 'react-simple-typewriter'
import { AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import img from '../assets/img.png'
import DownloadButton from './DownloadButton'


const HeroSection =()=>{
    const [typeEffect]= useTypewriter({
        words:['Frontend developer', 'Backend developer','Cloud developer','Fullstack developer'],
        loop:{},
        typeSpeed:450,
        delaySpeed:320
    })
    return(
        <div className='mt-20 py-16'>     
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between md:px-20 md:ml-10 ">
                <div className="w-2/3 lg:w-1/2 lg:order-1 pr-8"> 
                    <div className='justify-start pr-4'>               
                        <h2 className='text-2xl font-semibold mb-8 leading-normal md:text-4xl'>Hello!<span> Looking for</span> <br/><span className='text-green-500'>{typeEffect}</span>?</h2>
                        <p className='mb-6 font-body text-left'> My name is Mei. Welcome to my digital space, where stories unfold and connections flourish. I am a Fullstack developer with 3 years experience. </p>
                    </div>
                    <div className='flex items-center justify-center  '>
                        <div className='flex relative'>
                            <DownloadButton/>
                            <div className='flex items-center justify-center h-16 w-1 rounded-full m-4 p-5'>
                                <a className='link-icon-mobile' href="https://www.linkedin.com/in/mei-sun-lee-paloposki-3565907b/" ><AiFillLinkedin  className='text-4xl lg:text-[ 36px] '/></a>
                            </div>
                            <div className='flex items-center justify-center h-16 w-16 px-2 rounded-full m-4 p-5 '>
                                <a href="https://github.com/MeiSun227" className='link-icon-mobile'><AiFillGithub className='text-4xl lg:text-[ 36px] '/></a>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0 lg:mr-10">
                    <img src={img} alt="girl" className='object-cover w-full h-full rounded-full img-glow  bg-indigo-400 lg:w-96'  />       

                </div>
            </div>
        </div>
    )}
    
export default HeroSection