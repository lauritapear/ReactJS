import React, { Component } from 'react';
import {setCompletedGoals} from '../actions';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';


class CompleteGoalList extends Component{
  componentDidMount(){
    completeGoalRef.on('value', snap =>{
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        completeGoals.push({email, title});
      })
      this.props.setCompletedGoals(completeGoals);
    })
  }

  clearCompleted(){
    completeGoalRef.set([]);
  }

  render(){
    // const {email, title} = this.props.goal;
    return(
      <div style = {{margin: '5px'}}>
        {
          this.props.completeGoals.map((completeGoal,index) => {
            const {title,email} = completeGoal;
            return(
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className= 'btn btn-primary'
          onClick = {() => this.clearCompleted()}
          >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {completeGoals} = state;
  return{
    completeGoals
  }
}

export default connect (mapStateToProps, {setCompletedGoals})(CompleteGoalList);
// export default connect (mapStateToProps, null)(CompleteGoalList);
