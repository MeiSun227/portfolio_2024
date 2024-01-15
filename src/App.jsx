import { BrowserRouter as Router,  Routes,Route} from 'react-router-dom';

import './App.css'
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';

import NavBar from './Components/NavBar'
import ProjectSection from './Components/ProjectSection';
import HomeScreen from './Screen/HomeScreen'

const App=()=> {
  return(
    <div className=''>
    <Router>
    <div className="bg-gray-800 bg-opacity-70 p-3 top-0 left-0 fixed w-full z-50 blurred-nav " >
       <NavBar/>
       </div>
    <Routes>
        <Route path="/contact" element={<ContactSection/>} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/about" element={<AboutSection/>} />
        <Route path ="/" element={<HomeScreen/>}/>
        </Routes>
        </Router>
        </div>
)
}

export default App
