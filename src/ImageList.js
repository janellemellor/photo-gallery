import React, { Component } from "react";

export default class ImageList extends Component {
    render() {
        return (
       <ul>
           <li>{this.props.data}
           </li>
       </ul> 
        );
    }
}