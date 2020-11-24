import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Condition extends Component{
    constructor()
    {
        super()
        this.state={
            login:true
        }
    }
    render()
    {
        // if(this.state.login==true)
        // {
        //     return (<button className="btn btn-info">LogOut Button</button>)
        // }
        // else
        // {
        //     return (<button className="btn btn-success">LogIn Now</button>)
        // }

        return(
            this.state.login?(<button className="btn btn-info mb-2">LogOut Button</button>):(<button className="btn btn-success mb-2">LogIn Now</button>)
        )
    }
}
export default Condition;