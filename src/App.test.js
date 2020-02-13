import React from 'react';
import images from './data.js'
import App from './App.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import renderer from 'react-test-renderer';

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Header.js correctly', () => {
  const tree = renderer
  .create(<Header />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders ImageList.js correctly', () => {
  const tree = renderer
  .create(<ImageList images={images} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders ImageItem.js correctly', () => {
  const tree = renderer
  .create(<ImageItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});