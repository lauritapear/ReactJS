import React, { Component } from 'react';
import Profile from './Profile'
import './App.css'
import {Form, FormControl, FormGroup, Button, InputGroup, Glyphicon} from 'react-bootstrap'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }

  search(){
    const BASE_URL= 'https://api.spotify.com/v1/search?'
    //const FETCH_URL: BASE_URL +'q='+ this.state.query
      //                + '&type=artist&limit=1'
   const FETCH_URL= `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    var accessToken = 'BQCJikD_G7SXGfW2k0bmhj5fg43A2pDgIgBFP2FOgb__7Xs6T7hExxQddRBOFhgIeIfkIWTEsOmnxs4N0oLL_55K6dDsq9b9qaxL4FSJS6pXgmNJQ4QoZqz7ETlvQ-CyNff1GRkKGG2lMPWGd3V_slBlS2jAjQRRkvrLQVNbo1am00E'
    var myHeaders = new Headers();

    var myOptions = {
      method: 'GET',
      headers:  {
        'Authorization': 'Bearer ' + accessToken
     },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions )
      .then(response => response.json())
      .then(json => {
        const artist= json.artists.items[0];
        this.setState({artist});
      })
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type= "text"
              placeholder='Seach Artist'
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress ={event => {
                if(event.key === 'Enter'){
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={()=>this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile
          artist = {this.state.artist}
        />
        <div className="Gallery">
          Gallery
        </div>
      </div>

    )
  }
}

export default App;
