import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state ={
    // variable qui va contenir les donnees de la BD
    vinyles:[],
    // variable qui va contenir les informations du vinyle choisi
    vinyle:[]
  }
  componentDidMount(){
    // connection a l'api
    axios.get('https://api.discogs.com/users/ausamerika/collection/folders/0/releases')
      .then(response => {
            // mettre les donnees de la BD dans la variable vinyles
              const vinylesData = response.data.releases;
              this.setState({vinyles : vinylesData});
              this.choisirAleatoirementUnVinyle(vinylesData);
    });
  }
  // fonction pour choisir aléatoirement un vinyle 
  choisirAleatoirementUnVinyle = (tableVinyles) => {
    console.log(tableVinyles.length);
    const nbAleatoire = Math.floor(Math.random()*tableVinyles.length);
    console.log(nbAleatoire);
    this.setState({vinyle : tableVinyles[nbAleatoire]});
    console.log(this.state.vinyle);

  }
  

  
 

  render() {
    // const vinyles = this.state.vinyles.map(vinyle => {
    //     return 
    // });
    const tbVinyles = this.state.vinyles;
    return (
      <div className="App">
        <button onClick={() => this.choisirAleatoirementUnVinyle(tbVinyles)}>choisir un autre vinyle</button>
      </div>
    );
  }
}

export default App;
