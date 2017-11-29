import {SIGNED_IN} from '../constants';
import {SET_GOALS, SET_COMPLETEDGOALS} from '../constants';

export function logUser(email){
  const action = {
    type:SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals){
  const action = {
    type:SET_GOALS,
    goals  // same as goals: goals
  }
  return action;
}

export function setCompletedGoals(completeGoals){
  const action = {
    type:SET_COMPLETEDGOALS,
    completeGoals  // same as completeGoals: completeGoals
  }
  return action;
}
