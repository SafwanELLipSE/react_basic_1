import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {

    constructor()
    {
        super()
        this.state={
            // name:""
            username:""
        }
    }

    onChangeHandler=(event)=>{
        // var newName = event.target.value; 
        // this.setState({name:newName})
        var myName = event.target.name;
        var myValue = event.target.value;
        this.setState({[myName]:myValue})
    }
    onSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My First Form</p>
                    <p>{this.state.username}</p>
                    <input className="mb-2" name="username" onChange={this.onChangeHandler} type="text" placeholder="Your name"/> <br/>
                    <input className="btn btn-success" type="submit" value="Submit Now"/>
                </form>
            </div>
        );
    }
}

export default Form;