const TechSection=()=>{
    const workTech =['HTML&CSS','React','Redux','Node.JS',
        'Express','Postgres','MongoDB','Git','Jira','Heroku','AWS','GraphQL','Docker',
        'Django','GitHubAction','Flutter','JavaScript','TypeScript', 'Python', 'Ruby', 'C#']

    const funTech=['Figma','Blender','React Fiber', 'Robot Framework','SCSS', 'Tailwind','Adobe XD', 'Material UI','React Native']
    
    return(
        <div className="mt-40">
            <h2 className="text-3xl font-bold mb-4 pb-2">Tech Skill</h2>
            <hr className="mx-auto mb-4 w-20 border-t-2 border-gray-500 "/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10"> 
                <div className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal glass">            <div className="mb-8">
                    <h2 className="text-xl flex items-center font-body font-semibold px-2 py-4 ml-4 "> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                Use for Work</h2>
                </div>
                <div className="flex justify-start gap-2 mt-4 flex-wrap pb-2 mb-4 ml-4 "> 
                    {workTech.map((tech, index) => (
                        <p key={index} className="text-left inline-block mx-2 px-2 pb-1 font-body text-sm border-1 rounded-lg shadow-lg bg-slate-800/80 pt-2">{tech}</p>
                    ))}
                </div>
                </div>
                <div className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-start leading-normal glass">    
                    <div className="mb-3">
                        <h2 className="text-xl flex items-center font-body font-semibold px-2 py-4 ml-4 ">       
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className="w-6 h-6 mr-2 animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg> Use for fun</h2>
                    </div>
                    <div className="flex justify-start gap-2 mt-6 flex-wrap pb-2 mb-4 pl-3 pt-4 ml-4"> 
                        {funTech.map((tech, index) => (
                            <p key={index} className="text-left inline-block mx-2 px-2 pb-1 font-body text-base border-1 rounded-lg shadow-lg bg-slate-800/80 pt-2">{tech}</p>
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default TechSection