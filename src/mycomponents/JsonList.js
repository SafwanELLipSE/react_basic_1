import React, { Component } from 'react';

class JsonList extends Component {
    render() {
        const myList=[
            {
                city:"Dhaka",
                zip:"6000"
            },
            {
                city:"Rangpur",
                zip:"4000"
            },
            {
                city:"Chittogang",
                zip:"2000"
            }
        ]
        const dataItemsCity = myList.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        })
        const dataItemsZip = myList.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        })
        return (
            <div>
                <select>
                    {dataItemsCity}
                </select>
                <select>
                    {dataItemsZip}
                </select>
            </div>
        );
    }
}

export default JsonList;