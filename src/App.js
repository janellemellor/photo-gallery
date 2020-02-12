import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';


class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <ImageList images={images} />
      
    </div>

  );
}
}

export default App;
