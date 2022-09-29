import React, {useContext} from 'react'
import EnvitedContext from '../Context/envitedContext'
import '../Assets/Css/home.css'
import homeImg from '../Assets/Images/home-image.svg'

const Home = () => {
    const {name, setName} = useContext(EnvitedContext)
  return (
    <div className='home-container'>
        <div className="home-top">
            <h1>Imagine if</h1>
            <h1 className='snapchat'>Snapchat</h1>
            <h1>had events</h1>
            <h3>Easily host and share events with your friends across any social media.</h3>
            <div className="home-top-btn">🎉 Create my event</div>
        </div>

        <img src={homeImg} alt="" />


        <div className="home-btn">🎉 Create my event</div>
        
    </div>
  )
}

export default Home