import { HiEmojiHappy } from 'react-icons/hi'


const BotMessage = ({ chatSet }) => {
    return (
        <div  className="flex-1 overflow-y-auto">
            {chatSet.map((set, index) => (  
                <div key={index} className="flex flex-col  space-y-2 mt-4 px-4">

                    <div className="flex items-end justify-end space-x-2 mt-4 px-4">
                        <div className="bg-blue-500 text-white p-2 rounded-lg">
                            <p className="text-sm">
                                <strong> </strong>
                                {set.question}
                            </p>
                        </div>
                        <a className="w-8 h-8 rounded-full "> <HiEmojiHappy  className='text-4xl py-1 '/></a>  
                    </div>
                    <div className='flex items-start space-x-2'>
                        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                            <p className='text-xs'>Cat</p>
                        </div>
                        <div className="bg-blue-400 p-2 rounded-lg">
                            <p className="text-sm"> 
                                <strong>You:</strong> {set.response}
                            </p>
                        </div>
                    </div>
                   
                </div>
            ))}
        </div>
    )
}

export default BotMessage
