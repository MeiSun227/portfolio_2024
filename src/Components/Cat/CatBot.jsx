import './catbot.css'

const CatBot =({onClick})=>{

    return(
        <div className="fixed bottom-8 right-12 z-50" onClick={onClick}>
            <div className="cat">
                <div id="ear" className="leftear glass">
                    {' '}
                    <div className="earPart"></div>
                </div>
                <div id="ear" className="rightear glass">
                    {' '}
                    <div className="earPart-r"></div>
                </div>
                <div className="face glass">
                    <div id="eye" className="left-eye">
                        <div className="eyePupil"></div>
                    </div>
                    <div id="eye" className="right-eye">
                        <div className="eyePupil"></div>
                    </div>
                    <div className="nose"></div>
                </div>
            </div>
        </div>
    )
}

export default CatBot