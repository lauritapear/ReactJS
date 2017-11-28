import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal'

class App extends Component{
  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <div>Goal List</div>
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
