import Main from './components/MainComponent';
import './App.css';
import React from 'react';
import { Component } from 'react';
import { ReactDOM } from 'react-dom/client';



class App extends Component{
render() {
  return (
    <div className="App">
     <Main/>
    </div>
  );
}
}
export default App;
