import React, { Component } from "react";

class Student extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        
        return (
            <>
            <h1>Student Informations</h1>
            <h3>First Name:{ this.props.fnm } </h3>
            <h3>Last Name : { this.props.name }</h3>
            </>
        )
    }
}

export default Student