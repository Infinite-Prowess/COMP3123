import React, { Component } from "react"

const INITIAL_VALUE = {
    username: "",
    password: ""
}

export default class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...INITIAL_VALUE}
        this.cities = ["-SELECT CITY-", "Toronto", "Manila", "Mumbai", "Kabul", "Istanbul", "Tunis", "Baku", "Rome"]
    }

    onSubmitLogin = (event) => {
        event.preventDefault()
        console.log("Login Clicked")
        console.log(this.state)
        //console.log(event.target)
    }

    clearForm = (event) => {
        event.preventDefault()
        this.setState({...INITIAL_VALUE})
    }

    onValueChanged = (event) => {
        //console.log(event.target.value)

        this.setState({[event.target.name]: event.target.value})
    }

    render = () => {
        return (
            <>
                <h1>Login Class FORM Examples</h1>
                <form>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={event => this.onValueChanged(event)} />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={event => this.onValueChanged(event)} />
                    <select onChange={this.onValueChanged} name="city">
                        {
                            this.cities.map(city => (
                                <option key={ city } value={ city }>{ city }</option>
                            ))
                        }
                    </select>
                    <input 
                        type="submit"
                        name="btnSubmit"
                        value="Login"
                        onClick={this.onSubmitLogin} />
                    <input 
                        type="reset"
                        value="Reset"
                        onClick={this.clearForm} />
                </form>
            </>
        )
    }
}