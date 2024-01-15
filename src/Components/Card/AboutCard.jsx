import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EducationSection from '../EducationSection';
import { AiFillCloseCircle } from "react-icons/ai";
import CertificationSection from '../CertificationSection';



const items = [
    { id: 1, title: 'Education',  content:<EducationSection/>},
    {id:2, title: 'Certification',content:<CertificationSection/>},
  ];
  
  const AboutCard = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedItem = items.find((item) => item.id === selectedId);
  
    return (
      <div className="relative md:flex flex-row items-center justify-center mx-2 my-4 pl-3 ">
        {items.map((item) => (
          <motion.div
            className="z-10 link text-2xl md:text-xl cursor-pointer p-4 m-4 border "
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
          >
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
  
        
        <AnimatePresence>
         {selectedId && (
          <motion.div
          key="card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="sm:w-full md:w-96 bottom-1/2 absolute transform rounded-md shadow-md z-20 bg-gray-800 dark:border-gray-700">
          <div className="flex pl-3 ">
          <div className="flex-1">
            <motion.h2 className='flex font-body font-semibold text-xl mt-5 mb-5 md:text-3xl ml-3'>{items.find((item) => item.id === selectedId).title}</motion.h2>
   </div>
            <div className='link-icon-mobile flex items-center justify-center h-10 w-10 px-1 rounded-full p-2 m-3  '>
            <AiFillCloseCircle  onClick={() => setSelectedId(null)} size="20px"/>
            </div>
            </div>
          <div className="relative flex w-full items-center overflow-hidden ">
              <div className='text-left ml-5 mx-1'>{selectedItem.content}</div>
              </div>
              </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AboutCard; 