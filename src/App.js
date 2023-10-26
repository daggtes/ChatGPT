import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import mssIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

function App () {
    return (
        <div className='App'>
            <div className='sideBar'>
                <div className='upperSide'>
                     <div className='upperSideTop'><img src={gptlogo} alt='Logo' className='logo'/> <span className='brand'> ChatGPT</span></div>
                     <button className='midBtn'><img src={addBtn} alt='new Chat' className='addBtn'/>New Chat</button>
                     <div className='upperSideBotton'>
                        <button className='query'> <img src={mssIcon} alt='Query'/> What is Programming</button>
                        <button className='query'> <img src={mssIcon} alt='Query'/> How to use an API</button>
                     </div>
                </div>
                <div className='lowerSide'>
                    <div className='listItems'> <img src={home} alt='Home' className='listItemsImg'/> Home</div>
                    <div className='listItems'> <img src={saved} alt='Saved' className='listItemsImg'/> Saved</div>
                    <div className='listItems'> <img src={rocket} alt='Rocket' className='listItemsImg'/> Upgrade to pro</div>
                </div>
            </div>
            <div className='main'>
                <div className='chats'>
                   <img src={userIcon} alt='' /><p className='txt'> Lorem ipsum is the way we think about to do thing and have fun with the things we have towards wchich leads to fun and accuracy with the problem aside</p> 
                </div>
                <div className='chats'>
                   <img src={gptImgLogo} alt='' /><p className='txt'> Lorem ipsum is the way we think about to do thing and have fun with the things we have towards wchich leads to fun and accuracy with the problem aside</p> 
                </div>
                <div className='chatFooter'>
                    <div className='inp'>
                        <input type='text' placeholder='Send Message....'/><button className='send'><img src={sendBtn} alt='Send'/></button>
                    </div>
                    <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version</p>
                </div>

            </div>

        </div>
    );
}

export default App;