const movieSearchFilter = (state = 'nowplaying', action) => {
  switch(action.type) {
    case 'APPLY_FILTER':
      return action.filterType
    default:
      return state
  }
}

export default movieSearchFilter