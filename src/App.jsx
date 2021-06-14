import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <Posts />
    </div>
  );
}

export default App;
