import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    // connection a l'api
    axios.get('https://api.discogs.com/users/ausamerika/collection/folders/0/releases')
            .then(response => {
                console.log(response);
            });
  }
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
