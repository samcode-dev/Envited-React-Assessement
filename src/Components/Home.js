import React from 'react'
import {Link}  from 'react-router-dom'
import '../Assets/Css/home.css'
import homeImg from '../Assets/Images/home-image.svg'

const Home = () => {

  return (
    <div className='home-container'>
        <div className="home-top">
            <h1>Imagine if</h1>
            <h1 className='snapchat'>Snapchat</h1>
            <h1>had events</h1>
            <h3>Easily host and share events with your friends across any social media.</h3>
            <Link to='/create'><div className="home-top-btn"><h1>🎉 Create my event</h1></div></Link>
        </div>

        <img src={homeImg} alt="homeImg" />


        <div className="home-btn"><Link to='/create'><h1>🎉 Create my event</h1></Link></div>
        
    </div>
  )
}

export default Home