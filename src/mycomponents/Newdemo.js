import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Newdemo extends Component {
    myFun(){
        var container = document.getElementById("myID")
        var element=<h1>I am rain from reactDOm</h1>
        var callback = function(){
            alert("Hi, I am callback.")
        }
        // ReactDOM.render(element,container,callback);
        ReactDOM.hydrate(element,container,callback);
    }
    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">I am Safwan</h1>
            </div>
        );
    }
}

export default Newdemo;