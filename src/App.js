import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnvitedState from './Context/EnvitedState';
import Event from './Components/Event';
import Create from './Components/Create';
import Home from './Components/Home';





function App() {
  return (

    <div className="App">
      <EnvitedState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='event' element={<Event />} />  
            <Route path='create' element={<Create />} />  
          </Routes>
        </BrowserRouter>
      </EnvitedState> 
    </div>
  );
}

export default App;
