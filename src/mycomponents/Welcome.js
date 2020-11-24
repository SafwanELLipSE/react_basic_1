import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Welcome extends Component
{
    constructor(){
        super()
        // this.state={
        //     name:"Rubab",
        //     age:"23"
        // }
        var obj={
            name:"Rubab",
            age:"23",
            //ARRAY
            class: ["CSE","BBA","BLA"],
            //object
            subject:{
                math:"MAT101",
                 //ARRAY
                english:["ENG101","ENG102","ENG103"]
            }
        } 
        this.state=obj
    }
    doThisFromClass(a)
    {
        alert(a)
    }
    render()
    {
        return <div>
                    <h1>Hello, this my first components (class components){this.props.name}</h1>
                    <button className="btn btn-primary m-5" onClick={this.doThisFromClass.bind(this,"I am a noobstar")}>Click me class</button>
                    <h1>Name: {this.state.name} and Age: {this.state.name}</h1>
                    <h1>Class: {this.state.class[0]}</h1>
                    <h1>Subject: {this.state.subject.math}</h1>
                    <h1>Subject: {this.state.subject.english[1]}</h1>
                </div>     
        
    }
}

export default Welcome;