import {ADD_REMINDER, DELETE_REMINDER} from "../constants"

const reminder= (action) => {
  let {text, dueDate } = action;
  return {
    // text: action.text,
    id: Math.random(),
    text,
    dueDate
  }
}
const removeById = (state = [], id) => {
  const reminder = state.filter(reminder => reminder.id !== id);
  return reminder;
}

const reminders = (state = [], action) =>{
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders=[...state, reminder(action)]
      return reminders;

    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
