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
        <section className=''>     
            <div className='mt-32 lg:px-32 px-10 lg:py-0 py-20 text-center gap-4 lg:text-start flex lg:flex-row flex-col-reverse justify-between'>
                <div className='h-full lg: py-20 flex flex-col justify-center lg:items-start items-center' >
                    <div  className="container mx-auto p-4">
                        <h2 className='text-3xl font-semibold mb-8 leading-normal'>Hello!<span> Looking for</span> <br/><span className='text-green-500'>{typeEffect}</span>?</h2>
                        <p className='font-body'> My name is Mei. Welcome to my digital space, where stories unfold and connections flourish. I am a Fullstack developer with 3 years experience. </p>
                    </div>
                    <div className='flex mt-8 gap-2'>
                        <div className='flex items-center justify-center relative'>
                            <div className='flex space-x-2 relative'>
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
                </div>   
                <img src={img} alt="girl" className='rounded-full img-glow h-auto bg-indigo-400 md:w-2/4 '  />       
            </div>
        </section>
    )}

export default HeroSection