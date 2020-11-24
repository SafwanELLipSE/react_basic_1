import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Signup extends Component {
    constructor(){
        super()
        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            mobile:" "
        }
    }
    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]:inputValue})

        if(inputName==="fname"){
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue))
            {
                this.setState({fname:"First Name is not valid"});
            }
        }
        if(inputName==="lname"){
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue))
            {
                this.setState({lname:"Last Name is not valid"});
            }
        }
        if(inputName==="email"){
            var emailPattern = /\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue))
            {
                this.setState({email:"Email is not valid"});
            }
        }
        if(inputName==="mobile"){
            if(!Number(inputValue))
            {
                this.setState({mobile:"Mobile number is not valid"});
            }
        }
    }
    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email Address: {this.state.email}</p>
                <p>Phone Number: {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} className="mb-2" name="fname" type="text" placeholder="First Name"/> <br/>
                    <input onChange={this.onChangeHandler} className="mb-2" name="lname" type="text" placeholder="Last Name"/> <br/>
                    <input onChange={this.onChangeHandler} className="mb-2" name="email" type="text" placeholder="Email Address"/> <br/>
                    <input onChange={this.onChangeHandler} className="mb-2" name="mobile" type="text" placeholder="Phone Number"/> <br/>
                    <input name="submit" type="submit" value="Save Now"/>
                </form>
            </div>
        );
    }
}

export default Signup;