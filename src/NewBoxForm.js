import React, { Component } from 'react';
import "./NewBoxForm.css"

class NewBoxForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            width: 0,
            height: 0,
            backgroundColor: "balck"
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addNewBox(this.state)
        // evt.stopPropagation();
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render(){
        return(
            <div className="Form-body">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="width">Width </label>
                    <input
                        onChange={this.handleChange}
                        name="width"
                        // value="width"
                        id="width"
                        type="number"
                    />
                    <label htmlFor="height">height </label>
                    <input
                        onChange={this.handleChange}
                        name="height"
                        // value="height"
                        id="height"
                        type="number"
                    />
                    <label htmlFor="backgroundColor">Background Color </label>
                    <input
                        onChange={this.handleChange}
                        name="backgroundColor"
                        // value="backgroundColor"
                        id="backgroundColor"
                        type="text"
                    />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;