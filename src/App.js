import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home'
import Admin from './views/Admin'
//import PrivateRoute from "./privateRoute/PrivateRoute"


function App() {
	return (

    <Router>
        {/* <PrivateRoute exact path="/Admin" component ={Admin}/> */}
        <Route exact path="/Admin" component ={Admin}/>
        <Route exact path="/" component ={Home}/>
    </Router>  
		
	);
}

export default App;
