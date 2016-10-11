import { connect } from 'react-redux'
import Posters from '../components/Posters'

const getVisiblePosters = (posters, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posters
    case 'SHOW_FILTERED':
      return posters.filter(poster => !poster.hidden)
    default:
      return posters
  }
}

const mapStateToProps = (state) => {
  return {
    posters: getVisiblePosters(state.posters, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPosterClick: (id) => {
      dispatch(showModal(id))
    }
  }
}

const VisiblePosters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posters)

export default VisiblePosters