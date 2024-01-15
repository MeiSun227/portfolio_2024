import myData from '../../db.json'

const CertificationSection=()=>{
    const certifications = myData.certifications 
    return(
        <div className="sm:col-span-8 lg:col-span-8 px-10 pt-1 mt-2 py-10 font-body">
            {certifications.map((certification, index)=>(
                <div  key={index} className='px-1 py-3'>
                    <h3 className='font-bold text-lg mb-1'>{certification.name}</h3>
                    <p className=' text-green-500 text-base leading-3 mt-1'>{certification.valid}</p>
                </div>
            ))}
        </div>
    )
}

export default CertificationSection