import React, { Component } from 'react';
import "./Box.css";

class Box extends React.Component{
    static defaultProps={
        width: 0,
        height: 0,
        backgroundColor: "black"
    }
    render(){
        return(
            <p className="Box" style={{"width":this.props.width, "height":this.props.height, "backgroundColor":this.props.backgroundColor, "margin":0}}></p>
        )
    }
}

export default Box;