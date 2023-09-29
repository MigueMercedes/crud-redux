import { SHOW_ALERT, HIDE_ALERT } from "../types"


//show alert
export function showAlertAction(alert) {
  return (dispatch) => {
    dispatch( (createAlert(alert) ))
  }
}

const createAlert = alert => ({
  type: SHOW_ALERT,
  payload: alert
})

export function hideAlertAction() {
  return (dispatch) => {
    dispatch( deleteAlert())
  }
}

const deleteAlert = () => ({
  type: HIDE_ALERT,
})