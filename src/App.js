import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state ={
    // variable qui va contenir les donnees de la BD
    venyles:[]
  }
  componentDidMount(){
    // connection a l'api
    axios.get('https://api.discogs.com/users/ausamerika/collection/folders/0/releases')
            .then(response => {
              // mettre les donnees de la BD dans la variable venyles
                this.setState({venyles : response.data.releases})
                console.log(response.data);
            });
  }
  render() {
    // const venyles = this.state.venyles.map(venyle => {
    //     return 
    // });
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
