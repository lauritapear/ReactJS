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
    let artist = {name:'', followers:{total: ''}, images: [{url:''}], genres: []};
    artist = this.props.artist !== null ? this.props.artist : artist;
    // if(this.props.artist !== null) {
    //   artist= this.props.artist;
    // }
    return(
      <div className='profile'>
        <img
          alt= 'profile'
          className='profile-image'
          src = {artist.images[0].url}
        />

        <div className='profile-info'>
          <div className='profile-name'>{artist.name}</div>
          <div className='profile-followers'>{artist.followers.total} followers</div>
          <div className='profile-genres'>
            {
              artist.genres.map((genre,k)=>{
                genre= genre != artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
                return(
                    <span key={k}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}


export default Profile;
