import React from 'react'
import AppNavbar from './AppNavbar'
import Map from './Map'
import Home from './Home'
import VaccineInfo from './VaccineInfo'
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './redux'
import {Provider} from "react-redux"

function App() {
    return (
      <div>
        <Provider store = {store}>
        <AppNavbar/>
      <Router className='mainComponent'>
        <Route exact path="/home" component={Home}/>
        <Route path="/map" component={Map} />
        <Route path="/vaccine" component={VaccineInfo} />
      </Router>
        </Provider>
   
      </div>
      
    );
  }
  
  export default App;
  