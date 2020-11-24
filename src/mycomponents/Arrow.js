import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// function Arrow()
// {
//     return 
//     {
//         <button>My function</button>
//     };
// }
const AlertMe=(a)=>{
    alert(a);
}
const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this,"I am a alert function")} className="btn btn-danger">My function</button> 
    );
}

export default Arrow;