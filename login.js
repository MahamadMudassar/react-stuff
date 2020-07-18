import React from 'react';


export class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			uname:"",
			pwd:""

		}
		this.unameChange=this.unameChange.bind(this);
		this.pwdChange=this.pwdChange.bind(this);
	}
	unameChange=(e)=>{
		this.setState({uname :e.target.value});
		console.log("Username",this.state.uname)
	}
pwdChange=(e)=>{
		this.setState({pwd :e.target.value})
	}
	render(){

		return(  <form>
					<div>Email:<input type="text" name="uname" value={this.state.uname} onChange={this.unameChange.bind(this)}/></div>
					<div>Password<input type="password" name="pwd" value={this.state.pwd} onChange={this.pwdChange.bind(this)}/></div>
					<div><input type="submit" value="Login"/></div>
				</form>
				)
	}	

}

export default Login;