import React, { Component } from "react";

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        let array = [event.clientX, event.clientY] 
        this.props.onReceiveCoordinates(array)
      }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>

                </button>
            </div>
        )
    }

}