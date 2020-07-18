import React, { Component } from 'react';
import './App.css';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import Register from './register';
import Login from './login'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
       
          <ul>
        	 <li>
        	 	<Link to='/'>Home</Link>
        	 </li>
        	 <li>
        		<Link to='/register'>Register</Link>
        	 </li>
        	 <li>
        	 	<Link to='/login'>Login</Link>
        	 </li>
          </ul>
            <div>
            	<Route path="/register" component={Register}/>
            	<Route path="/login" component={Login}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
