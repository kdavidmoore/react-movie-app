export const requestMovies = () => {
  return {
    type: 'REQUEST_MOVIES'
  }
}

export const receiveMovies = (json) => {
  return {
    type: 'RECEIVE_MOVIES',
    movies: json.data.children.map(child => child.results),
    receivedAt: Date.now()
  }
}

export const showModal = (id) => {
  return {
    type: 'SHOW_MODAL',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}