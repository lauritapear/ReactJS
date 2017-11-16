import React, { Component } from 'react';
import './App.css'

class Profile extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //
  //   }
  // }
  render(){
    let artist = {name:'', followers:{total: ''}};
    artist = this.props.artist !== null ? this.props.artist : artist;
    // if(this.props.artist !== null) {
    //   artist= this.props.artist;
    // }
    return(
      <div>
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
        {/* <div>Minutes</div>
        <div>Seconds</div> */}
      </div>
    )
  }
}


export default Profile;
