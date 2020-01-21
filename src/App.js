import React, { Component } from 'react';
import './App.css';
import TrendingDeveloperList from './components/TrendingDeveloperList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <TrendingDeveloperList/>
      </div>
    );
  }
}

export default App;
