import axios from 'axios'
import { useState } from 'react'
import BotMessage from './BotMessage'
import InputBox from './InputBox'

const ChatBotContainer = ({ isVisible }) => {
    const [chatSet, setChatSet] = useState([])
    
    const handleSubmit = async (question) => {
        try {
            const res = await axios.post('https://chatbot-backend-p7tt.onrender.com/ask', { question })
            setChatSet((prevSet) => [
                ...prevSet,
                { question, response: res.data.answer },
            ])
        } catch (error) {
            console.error('Error fetching answer:', error)
        }
    }

    return (
        <div  className={`fixed bottom-0 right-56 mr-4 mb-4 bg-slate-400/70  px-2 py-2 rounded-lg ${isVisible ? 'block' : 'hidden'}`}>
            <BotMessage chatSet={chatSet} />
            <InputBox onSubmit={handleSubmit} />
        </div>
    )
}

export default ChatBotContainer