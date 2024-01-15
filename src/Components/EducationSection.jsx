import myData from '../../db.json'

const EducationSection=()=>{
    const educations = myData.educations   
    return(
        <div className="sm:col-span-8 lg:col-span-8 px-10 pt-1 mt-2 py-10 font-body">
            {educations.map((education, index)=>(
                <div  key={index} className='px-1 py-3'>
                    <h3 className='font-bold text-lg mb-1'>{education.name}</h3>
                    <span className=' text-green-500 text-base leading-3 mt-1'>{education.year}</span>
                    <p className='text-xs'>{education.major}</p>
                    <p className='mt-2'>{education.degree}</p>
                </div>  
            ))}
        </div>
    )
}
export default EducationSection