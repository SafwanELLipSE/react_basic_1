import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Textarea extends Component {
    constructor()
    {
        super()
        this.state={
            desc:"Please insert some text.",
            userInput:""
        }
    }
    onChangeHandler=(event)=>{
        var myText = event.target.value;
        this.setState({userInput:myText})
    }
    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler} placeholder={this.state.desc}></textarea>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Textarea;