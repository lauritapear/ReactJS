import React, { Component } from 'react';
import Profile from './Profile'
import Gallery from './Gallery'
import './App.css'
import {Form, FormControl, FormGroup, Button, InputGroup, Glyphicon} from 'react-bootstrap'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){
    const BASE_URL= 'https://api.spotify.com/v1/search?'
    //const FETCH_URL: BASE_URL +'q='+ this.state.query
      //                + '&type=artist&limit=1'
   let FETCH_URL= `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
   const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    var accessToken = 'BQBRVVW9_h27vrw70uyzNSaMHGm8eZlDUth01mjk6c1_wHimup10hbmEisBpuaDN_ff77SclmK1LWLDXPOIL5sN3liTdeJ3K1RCwiGScqL-36v1THIbH7lpY7Kg9gltm8B7YeTmgAmO6EW24pBio8vkZUb4PAkw3dGwidm_SgH9oGrI'
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

        FETCH_URL= `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
        fetch(FETCH_URL, myOptions )
        .then(response => response.json())
        .then(json => {
          const tracks = json.tracks;
          this.setState({tracks});
        })
      });
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
        {
          this.state.artist !== null
          ?
            <div>
              <Profile
                artist = {this.state.artist}
              />
              <Gallery
                tracks = {this.state.tracks}
              />
            </div>
          : <div></div>
        }

      </div>

    )
  }
}

export default App;
