import {  Link } from "react-router-dom";

const NavBar =()=>{

return(
    <nav>
        <div className="h-10vh flex z-50 justify-between lg:py-5 px-20 py-4">
         <div className="flex flex-1  items-center">
    <span className="text-green-800 text-3xl font-bold ">
    <Link to='/'> MeiMei</Link>
    </span>
    </div>
  <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
      <div className="flex-10">       
           <ul className="flex gap-8 mr-16 text-[18px]">
        <li className="nav"><Link to='/about'>About</Link></li>
        <li className="nav">< Link to='/project'>Project</Link></li>
        <li className="nav"><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>

        </div>
        </div>
        </nav>
  

)}

export default NavBar