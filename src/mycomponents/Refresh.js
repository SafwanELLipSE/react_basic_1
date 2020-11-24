import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Refresh extends Component
{
    constructor()
    {
        super()
        this.refreshNow = this.refreshNow.bind(this)
    }

    refreshNow(){
        this.forceUpdate();
    }

    render()
    {
        return(
            <div>
                <button onClick={this.refreshNow} className="btn btn-secondary mb-3">Refresh Button</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}

export default Refresh;