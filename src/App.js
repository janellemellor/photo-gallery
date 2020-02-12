import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <ul>
      <ImageList images={images} />
      </ul>
      <ImageItem />
    </div>

  );
}
}

export default App;
