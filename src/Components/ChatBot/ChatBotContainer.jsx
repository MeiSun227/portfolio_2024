import axios from 'axios'
import { useState } from 'react'
import BotMessage from './BotMessage'
import InputBox from './InputBox'

const ChatBotContainer = ({ isVisible }) => {
    const [chatSet, setChatSet] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSubmit = async (question) => {
        try {
            setLoading(true)
            const res = await axios.post('https://chatbot-backend-p7tt.onrender.com/ask', { question })
            setChatSet((prevSet) => [
                ...prevSet,
                { question, response: res.data.answer },
            ])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching answer:', error)
        }
        finally {
            setLoading(false) // Ensure loading is set to false after response is received
        }
    }

    return (
        <div  className={`fixed bottom-0 right-56 mr-4 mb-4 bg-slate-400/70  px-2 py-2 rounded-lg ${isVisible ? 'block' : 'hidden'}`}>
            <div>
                <BotMessage chatSet={chatSet} />
                {loading && <div >Loading...</div>} 
                <InputBox onSubmit={handleSubmit} />
             
            </div>
     
     
        </div>
    )
}

export default ChatBotContainer