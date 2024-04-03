import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './main.css'
import { Context } from '../../context/Context';

function Main() {

    const {onSent, recentPrompt, showResult, loading,resultData, setInput,input} = useContext(Context);

    return <>
        <div className="main">
            <div className="nav">
                <p>Gemeni</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult?<>
                    <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card card-1" onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")}>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card card-2" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card card-3" onClick={() => onSent("Brainstrom team bonding activities for our work retreat")}>
                        <p>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card card-4" onClick={() => onSent("Improve the readibility of the following code")}>
                        <p>Improve the readibility of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>:
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                        <><div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        </>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div>
            </div>    
            }
                

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://support.google.com/gemini/answer/13594961?visit_id=638477507158502890-1103742168&p=privacy_notice&rd=1#privacy_notice"> Your privacy & Gemini Apps</a>
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Main;