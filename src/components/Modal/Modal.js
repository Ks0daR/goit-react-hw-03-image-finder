import React, { Component } from 'react';

export default class Modal extends Component {
    componentDidMount (){
        window.addEventListener('keydown', )
    }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>
    );
  }
}
