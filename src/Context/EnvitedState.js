import React, {useState} from 'react'
import EnvitedContext from './envitedContext'


function EnvitedState(props) {


  const eventDetails = JSON.parse(localStorage?.getItem('events'));
  const eventImage = localStorage?.getItem('image');
  
  

    const [file, setFile] = useState(eventImage)
    const [events, setEvents] = useState({
      eventDes: '',
      eventEnds: typeof(eventDetails?.eventEnds) == 'undefined' ?  '' : eventDetails?.eventEnds,
      eventHappening: typeof(eventDetails?.eventHappening) == 'undefined' ?  '' : eventDetails?.eventHappening,
      eventStart: typeof(eventDetails?.eventStart) == 'undefined' ?  '' : eventDetails?.eventStart,
      eventName: typeof(eventDetails?.eventName) == 'undefined' ?  '' : eventDetails?.eventName,
      eventHostName: typeof(eventDetails?.eventHostName) == 'undefined' ?  '' : eventDetails?.eventHostName,
    })
   
  return (
    <EnvitedContext.Provider
    value={{
        file,
        setFile,
        events,
        setEvents
    }}>
        {props.children}
    </EnvitedContext.Provider>
  )
}

export default EnvitedState