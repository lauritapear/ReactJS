import {SET_COMPLETEDGOALS} from '../constants';

export default(state = [], action) =>{
  switch (action.type){
    case SET_COMPLETEDGOALS:
      const {completeGoals} =action; //grab goals from action
      return completeGoals;

    default:
      return state;
  }
}
