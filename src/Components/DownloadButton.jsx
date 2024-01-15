
import resumePDF from '../assets/MeiCV2023.pdf'

const DownloadButton = () => {

    const handleDownload = async () => {
        try {
            const response = await fetch(resumePDF)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(new Blob([blob]))
            const link = document.createElement('a')
            link.href = url
  
            link.setAttribute('download', 'downloaded.pdf')
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (error) {
            console.error('Error fetching or downloading PDF:', error)
        }
    }
  
    return (
        <>
            <a  className="link text-center m-4 animate-bounce animation-delay-2000"onClick={handleDownload}>My Resume  <span className='inline-block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-center animate-bounce justify-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </span>
            </a>
        </>
    )
}
  
export default DownloadButton
  