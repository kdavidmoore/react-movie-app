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
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPosterClick: PropTypes.func.isRequired
}

export default Posters