import axios from 'axios'
const DEFAULT = 'user/DEFAULT'

export default (state = {}, action) => {
  switch (action.type) {
    case DEFAULT:
      return {
        ...state
      }
    default:
      return state
  }
}

export const getDefault = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/data')
    const data = response.data
    dispatch({
      type: DEFAULT,
      data: data
    })
  }
}