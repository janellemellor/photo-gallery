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
      <ImageList images={images} />
      <ImageItem image={images} />
    </div>

  );
}
}

export default App;
