
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () =>{

  const [progress, setProgress] = useState (0)
  
 
  const pagesize=8;
  const apiKey= process.env.REACT_APP_NEWS_API
  
    return (
      <div>
        <Router basename="/NewsPulse_React-App">
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
        <Route
            path="/"
            element={<Navigate to="/general" replace />}
          />
        <Route path="/business" element={< News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country="in" category="business"/>}/>
        <Route path="/entertainment" element={< News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country="in" category="entertainment"/>}/>
        <Route path="/general" element={< News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pagesize} country="in" category="general"/>}/>
        <Route path="/health" element={< News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country="in" category="health"/>}/>
        <Route path="/science" element={< News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country="in" category="science"/>}/>
        <Route path="/sports" element={< News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country="in" category="sports"/>}/>
        <Route path="/technology" element={< News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pagesize} country="in" category="technology"/>}/>
         
        </Routes>
        </Router>
        
      </div>
    )
  
}

export default App