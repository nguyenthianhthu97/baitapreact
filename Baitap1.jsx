import React, { Component } from "react";

export default class baitap1 extends Component {
 constructor(){
    super();
    this.state={
      text1:'Hôm nay trời mưa',
    }
 }
 
 changeText=()=>{
    this.setState({
        text1:'Ngày mai trời nắng',
    });
 }

  render() {
    return (
    <div>
      <p>{this.state.text1}</p>
      <button onClick={this.changeText}>Click</button>
    </div>
    );
  }
}
