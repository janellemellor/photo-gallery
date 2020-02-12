import React, { Component } from "react";
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
    const images = this.props.images;
        
    return images.map(image => <ul>
        {ImageItem}
    </ul>
    )}}