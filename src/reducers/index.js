import { combineReducers } from 'redux'
import moviesByFilter from './moviesByFilter'
import movieSearchFilter from './movieSearchFilter'
import visibilityFilter from './visibilityFilter'

const movieApp = combineReducers({
  moviesByFilter,
  movieSearchFilter,
  visibilityFilter
})

export default movieApp