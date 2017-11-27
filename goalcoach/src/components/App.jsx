import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class App extends Component{
  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div>
        <button className='btn btn-danger'
          type='button'
          onClick={()=> this.signOut()}
          >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
  }
}
// export default App;
export default connect(mapStateToProps, null)(App);
// export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
