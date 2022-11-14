import React, { Component } from "react"

export default class Student extends React.Component {
    constructor(props) {
        super(props)
        this.x = 1
        //this.incrementEventHandler.bind(this)
        this.state = {
            y: 1,
            fnm: "Omar"
        }
    }

    incrementEventHandler = () => {
        //alert("Increment")
        this.x++
        console.log("Increment X: " + this.x)
        this.setState({ y: this.state.y + 1 })
    }

    eventHandler = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <>
                <h2>Student Forms</h2>
                X: { this.x } <br/>
                Y: { this.state.y } <br/>
                State : { JSON.stringify(this.state) }
                <button onClick={this.incrementEventHandler}>Add</button>
                <button name="btnEvent" onClick={(e) => this.eventHandler(e)}>Show Event</button>
                <button name="btnHello" onClick={(e) => console.log("Hello")}>Show Event</button>
            </>
        )
    }
}