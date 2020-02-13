import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Select from './Select.js';


export default class App extends Component {
state = { selected: null };

  render() {
    const handleChange = e => {
      this.setState({ selected: e.target.value })};

    const filteredImages = images.filter(image => {
        if (!this.state.selected) return true;
        return image.keyword === this.state.selected; });
    
    return (
        <div>
          <Header />
          <Select handleChange={handleChange} />
          <ImageList images={filteredImages} />
         
        </div>
  )}}  