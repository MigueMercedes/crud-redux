import { HIDE_ALERT, SHOW_ALERT } from "../types"


// each reducer has its own state
const initialState = {
  alert: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_ALERT:
      return  {
        ...state,
        alert: action.payload
      }
      
    case HIDE_ALERT:
      return {
        ...state,
        alert: null
      }

    default: 
      return state
  }
}