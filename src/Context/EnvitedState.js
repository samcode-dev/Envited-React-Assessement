import React, {useState} from 'react'
import EnvitedContext from './envitedContext'


function EnvitedState(props) {
    const [name, setName] = useState('Samuel')
  return (
    <EnvitedContext.Provider
    value={{
        name,
        setName
    }}>
        {props.children}
    </EnvitedContext.Provider>
  )
}

export default EnvitedState