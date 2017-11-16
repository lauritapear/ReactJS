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
    var accessToken = 'BQDQ2ubOxKQnOc2GJWrC6AXiHsW-R0pPJLtj7G8WFmhUghgosDrm98RElxm4zI2GNlZVJom1donbsS0BzgbiyvhldPv2P1brAStGWsgb2kDUELohaw4BWEd9fIc6nIjhBrW3oKCd3USBKZEgIBC8slBCdyJX7_YzSJfD7Tl_5-LiQuY'
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
