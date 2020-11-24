import React, { Component } from 'react';

class Select extends Component {

    constructor()
    {
        super()
        this.state={
            gender1:"Boy",
            gender2:"Girl",
            gender3:"Lad",
            gender4:"Lass",
            show: " ",
            auto:"Lad"
        }
    }
    onChangeHandler=(event)=>{
        var selectedValue = event.target.value;
        this.setState({show:selectedValue, auto:selectedValue})
    }

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.gender1}</option>
                    <option>{this.state.gender2}</option>
                    <option>{this.state.gender3}</option>
                    <option>{this.state.gender4}</option>
                </select>
            </div>
        );
    }
}

export default Select;