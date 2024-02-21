import { useState } from 'react'

const InputBox = ({ onSubmit }) => {
    const [question, setQuestion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(question)
        setQuestion('')
    }

    return (
        <form onSubmit={handleSubmit} className="input-box">
            <div className='relative pt-4 '>
                <input
                    className='appearance-none block w-full bg-slate-700 text-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-50 chatBotInput'
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask me anything"
                />
                <button type="submit" className="text-white absolute end-2 bottom-1  focus:ring-4 focus:outline-none font-normal rounded-lg text-sm px-4 py-2">Ask</button>
            </div>
        </form>
    )
}

export default InputBox
