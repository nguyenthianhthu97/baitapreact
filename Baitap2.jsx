import React, { Component } from 'react'

export default class Baitap2 extends Component {
 constructor(){
    super();
    this.state={
        displayBio: false,
    };
 };
 
 modal=()=>{
    this.setState({displayBio: !this.state.displayBio});
 };

 render() {
    return (
      <div>
        {this.state.displayBio ? (
          <div>
            <p>Ngày mai trời nắng</p>
            <button onClick={this.modal}>Open</button>
          </div>
        ):(
            <button onClick={this.modal}>Close</button>
        )}
        
      </div>
    )
  }
}
