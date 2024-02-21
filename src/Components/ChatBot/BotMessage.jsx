import { HiEmojiHappy } from 'react-icons/hi'
import chatIcon from '../../assets/paws.png'

const BotMessage = ({ chatSet }) => {
    return (
        <div  className="flex-1 overflow-y-auto">
            {chatSet.map((set, index) => (
                <div key={index} className="flex flex-col items-start space-y-2 mt-4 px-4">
                    <div className ='flex items-start space-x-2' >
                        <a className="w-8 h-8 rounded-full"> <HiEmojiHappy  className='text-4xl'/></a>
                        <div className="bg-blue-400 p-2 rounded-lg">
                            <p className="text-sm"> 
                                <strong>You:</strong> {set.question}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end space-x-2">
                        <div className="bg-blue-500 text-white p-2 rounded-lg">
                            <p className="text-sm">
                                <strong> </strong>
                                {set.response}
                            </p>
                        </div>
                        <img src={chatIcon} alt="paws" className="w-8 h-8 rounded-full"></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BotMessage
