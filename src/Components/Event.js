import React, {useContext, useEffect} from 'react'
import '../Assets/Css/event.css'
import EnvitedContext from "../Context/envitedContext";
import { useNavigate } from 'react-router-dom';


const Event = () => {

  const navigate = useNavigate();


  useEffect(() => {
    
    if (localStorage.getItem('number') !== '1') {
      navigate("/create")
    }

    
    
  }, [navigate])
  

  const { file, events} = useContext(EnvitedContext);

  const dateConv = new Date(events.eventStart)
  const date = dateConv.toString('YYYY-MM-dd').split(' ')

  const local = dateConv.toLocaleString().split(' ')[1].split(':')


  const AM_PM = dateConv.toLocaleString([], { hour12: true}).split(' ')[2]


const utc = dateConv.toString('YYYY-MM-dd').split(' ')[5]




  const toDateConv = new Date(events.eventEnds)
  const toDate = toDateConv.toString('YYYY-MM-dd').split(' ')

  const toLocal = toDateConv.toLocaleString().split(' ')[1].split(':')


  const toAM_PM = toDateConv.toLocaleString([], { hour12: true}).split(' ')[2]

  return (
    <div className='cont'>
      <div style={{
              backgroundImage:
                file?.length > 0 ? `url(${file})` : "url(/fileUpload.png)",
            }} className="img-cont">
      </div>


      <div className="details-cont">
        <div className="det1">
          <h1>{events.eventName}</h1>
          <h3>Hosted by <span>{events.eventHostName}</span> </h3>

          <div className="det2">
            <img className='main-icon' src="/calenderIcon.svg" alt="" />
            <div className="evt-det">
              <h3>{date[2]} {date[1]} {local[0]}:{local[1]}{AM_PM?.toUpperCase()}</h3>
              <h4>to <span>{toDate[2]} {toDate[1]} {toLocal[0]}:{toLocal[1]}{toAM_PM?.toUpperCase()}</span> {utc}</h4>
            </div>
            <img className='arr' src="/arrow.svg" alt="" />
          </div>


          <div className="det2">
            <img className='main-icon' src="/locationIcon.svg" alt="" />
            <div className="evt-det">
              <h3>{events.eventHappening}</h3>
              <h4>Suburb, State, Postcode</h4>
            </div>
            <img className='arr' src="/arrow.svg" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Event