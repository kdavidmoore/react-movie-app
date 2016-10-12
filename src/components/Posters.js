import React, { PropTypes } from 'react'
import Poster from './Poster'

const Posters = ({ posters, onPosterClick }) => (
  <div>
    {posters.map(poster =>
      <Poster
        key={poster.id}
        {...poster}
        onClick={() => onPosterClick(poster.id)}
      />
    )}
  </div>
)

Posters.propTypes = {
  posters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired).isRequired,
  onPosterClick: PropTypes.func.isRequired
}

export default Posters