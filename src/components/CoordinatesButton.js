import React, { Component } from "react";

export default class CoordinatesButton extends Component {

    // handleClick = (event) => {
    //     let array = [event.clientX, event.clientY] 
    //   }

    render() {
        return (
            <div>
                <button onClick={(event) => {
                    array = [event.clientX, event.clientY]
                    
                }}>

                </button>
            </div>
        )
    }

}