import React, { Component } from 'react';

class List extends Component {
    
    myDataChild=(data)=>
    {
        // return <option>{data}</option>
        // return <option>{data+10}</option>
        return <option>{data*10}</option>
    }

    render() {
        // const country = ["Bangladesh","India","China","USA"];

        const country = [1,2,3,4,5,6,7,8,9];

        // const dataItems = country.map((mydata)=>{
        //     // return <li>{mydata}</li>
        //     return <option>{mydata}</option>
        // })

        const dataItems = country.map(this.myDataChild)

        return (
            <div>
                {/* <ol>
                    {dataItems}
                </ol> */}
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;