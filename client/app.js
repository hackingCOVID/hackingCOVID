import React from 'react'
import AppNavbar from './AppNavbar'
import Map from './Map'
import Home from './Home'
import VaccineInfo from './VaccineInfo'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
      <div>
      <AppNavbar/>
      <Router className='mainComponent'>
        <Route exact path="/" component={Home}/>
        <Route path="/map" component={Map} />
        <Route path="/vaccineinfo" component={VaccineInfo} />
      </Router>
      </div>
      
    );
  }
  
  export default App;
  