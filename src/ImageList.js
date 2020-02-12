import React, { Component } from "react";

export default class ImageList extends Component {
    render() {
        const strangeCreatures = this.props.images;
        
       return strangeCreatures.map(creature => 
        <li>
            <img src={creature.url} alt='fill in with data later' height='300' width='300' />
        </li> 
       )}}