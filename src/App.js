import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';


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
          <select onChange={handleChange} >
            <option value='' defaultValue>All</option>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>Unilego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='chameleon'>Chameleon</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>
          </select>
          <ImageList images={filteredImages} />
         
        </div>
  )}}  