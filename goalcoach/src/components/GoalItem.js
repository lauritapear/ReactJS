import React, { Component } from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component{
  completeGoal(){
    //add goal to completed goal GoalList
    // remove goal from goal list
    const {email} = this.props.user;
    const {title, serverKey} = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email,title});
  }

  render(){
    const {email, title} = this.props.goal;
    return(
      <div style = {{margin: '5px'}}>
        <strong>{title} </strong>
        <span> Submitted by <em>{email}</em></span>
        <button className="btn btn-sm btn-primary"
          type='button'
          style = {{marginLeft: '5px'}}
          onClick = {() => this.completeGoal()}
          >
            Complete
          </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {user} = state;
  return{
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
