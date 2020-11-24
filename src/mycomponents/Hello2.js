import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Hello2 extends Component
{
    constructor()
    {
        super()

        this.state={
            name:"Rubab"
        }
    }
    changeName(a){
        this.setState({name:a})
    }
    render()
    {
        return <div>
            <h1>Name: {this.state.name}</h1>
            <button onClick={this.changeName.bind(this,"Safwan")} className="btn btn-success mb-2">Change Name</button>
        </div>
    }
}


export default Hello2;