import React from 'react';


export class Register extends React.Component{
	constructor() {
		super();
	
		// Define the initial state:
		this.state = {
		  hasBeenClicked: false
		};
	  }
	
	  handleClick = () => {
		this.setState({hasBeenClicked:true})
	  };
	render(){
		return(
			<>
			<form>
				<div style={{display:"flex",color:"red"}}><label>Name:</label><input type="text"/></div>
				<div>Email:<input type="email"/></div>
				<div>Password<input type="password"/></div>
				<div><input type="submit" value="Submit"/></div>


			</form>
			<div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
	  </>
			)
	}	

}

export default Register;




