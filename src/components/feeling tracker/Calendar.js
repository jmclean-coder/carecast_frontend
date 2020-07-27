import React, { Component } from 'react'
export default class Calendar extends Component {

    days = [{
        date:"2020-07-23",
        color: "green"
    },
    {
        date:"2020-07-23",
        color: "red"
    },
    {
        date:"2020-07-23",
        color: "blue"
    },
    {
        date:"2020-07-23",
        color: "yellow"
    },
    {
        date:"2020-07-23",
        color: "purple"
    },
    {
        date:"2020-07-23",
        color: "black"
    },
    {
        date:"2020-07-23",
        color: ""
    },
    {
        date:"2020-07-23",
        color: ""
    },
    ]



    render() {
        return (
            <div id="day-wrapper">
                {this.days.map(day => <div className={`cell ${day.color}`}></div>)}
            </div>
        )
    }
}
