import React from 'react';

function Hello(props)
{
    function DoThis(a)
    {
        alert(a)
    }
    return(
        <div> 
            <h1>Hello, this my first components (funcational components) Name:{props.name} and Age:{props.age}</h1>
            <button onClick={DoThis.bind(this,"my parameter pass")}>Click me</button>
        </div>
    );
}

export default Hello