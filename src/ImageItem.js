import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {
        const image = this.props.image;
    
        return (
        <li>
           <div>
                <h3>{image.title}</h3>
                <img src={image.url} alt={image.description} />
            </div> 
        </li>
        
        );
    }
}