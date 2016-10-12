const movies = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_MOVIES':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case 'RECEIVE_MOVIES':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.movies,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const moviesByFilter = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_MOVIES:
    case REQUEST_MOVIES:
      return {
        ...state,
        [action.filterType]: movies(state[action.filterType], action)
      }
    default:
      return state
  }
}

export default moviesByFilter