import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Vinyle extends Component{
    state = {
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
        const nbAleatoire = Math.floor(Math.random()*tableVinyles.length);
        this.setState({vinyle : tableVinyles[nbAleatoire].basic_information});
        console.log(this.state.vinyle);
      }
      
    
      
     
    
      render() {
        const artists = [];

        for(let artistName in this.state.vinyle.artists){
          artists.push({
            id:artistName, 
            name : this.state.vinyle.artists[artistName].name
          });
        }
        const artistOutput = artists.map((artist) => {
            return <ListGroup.Item>{artist.name}</ListGroup.Item>
        });

        const genres = [];

        for(let genreName in this.state.vinyle.genres){
          genres.push({
            id:genreName, 
            name : this.state.vinyle.genres[genreName]
          });
        }
        const genreOutput = genres.map((genre) => {
            return <ListGroup.Item>{genre.name}</ListGroup.Item>
        });

        const tbVinyles = this.state.vinyles;
          return(
            <div className="vinyle" style={{maxWidth: '500px', margin: '0 auto'}}>
                <Button variant='outline-info' onClick={() => this.choisirAleatoirementUnVinyle(tbVinyles)}>Choisir un autre vinyle</Button>
                <Card style={{marginTop: '30px'}}>
                    <Card.Body>
                      <Card.Title>{this.state.vinyle.title}</Card.Title>
                      <Card.Subtitle style={{marginBottom: '20px'}}>{this.state.vinyle.year}</Card.Subtitle>
                      <Card.Header>Par:</Card.Header>
                      <ListGroup style={{marginBottom: '40px'}}>{artistOutput}</ListGroup>
                      <Card.Header>Genres:</Card.Header>
                      <ListGroup>{genreOutput}</ListGroup>
                    </Card.Body>
                </Card>
            </div>
          )
              
        }
   

}
export default  Vinyle;