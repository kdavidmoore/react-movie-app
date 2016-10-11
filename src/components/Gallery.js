import React, { PropTypes } from 'react'
import Poster from './Poster'

const Gallery = ({ posters, onPosterClick }) => (
  <div className="gallery">
    {posters.map(poster =>
      <Poster key={poster.id} data={poster} />
    )}
  </div>
)

Gallery.propTypes = {
  posters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPosterClick: PropTypes.func.isRequired
}

export default Gallery