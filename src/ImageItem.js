import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {

        return (
        <li>
           <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.img} alt={this.props.description} />
            </div> 
        </li>
        
        );
    }
}