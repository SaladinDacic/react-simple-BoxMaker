import React, { Component } from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuid } from 'uuid';

class BoxList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }
        this.boxList = this.boxList.bind(this);
        this.addNewBox = this.addNewBox.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    boxList(){
        return this.state.boxes.map(box=>{
            return <div className="BoxList-box">
                    <Box key={box.key} width={box.width} height={box.height} backgroundColor={box.backgroundColor}/>
                    <button id={box.key} onClick={this.handleRemove}>Remove Box</button>
                </div>
        })
    }
    addNewBox(evt){
        console.log(evt)
        let {width, height, backgroundColor} = evt;
        width = +width;
        height = +height;
        let key = uuid()
        if(backgroundColor == ""){
            console.log("lala")
        }
        this.setState(st=>{
            return{boxes: [...st.boxes, {width, height, backgroundColor, key}]}
        })
    }
    handleRemove(evt){
        this.setState(st=>{
            return{boxes: [...st.boxes].filter(box=>{return box.key !== evt.target.id})}
        })
    }
    render(){
        return(
            <div className="BoxList-body">
                <div >
                    <NewBoxForm addNewBox={this.addNewBox}/>
                </div>
                <div >
                    {this.boxList()}
                </div>
            </div>
        )
    }
}

export default BoxList;