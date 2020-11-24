import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';

class Anotherdome extends Component {
    
    changeImg(){
      var imgID = document.getElementById("imgID");

      ReactDOM.findDOMNode(imgID).src="https://www.gstatic.com/webp/gallery/4.sm.jpg";
    }
    render() {
        return (
            <div>
                <img id="imgID" src="https://www.gstatic.com/webp/gallery/1.sm.jpg" className="mb-2" alt="Image"/> <br/>
                <button onClick={this.changeImg} className="btn btn-secondary">Change Image</button>
            </div>
        );
    }
}

export default Anotherdome;