import React, { PropTypes } from 'react'

const Poster = ({ onClick, onMouseEnter, onMouseLeave, hidden, data }) => (
  <div className="add-margin col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <a
      onClick={onClick}
      onMouseEnter={() => onMouseEnter}
      onMouseLeave={() => onMouseLeave}
      style={{
        display: hidden ? 'none' : 'inline-block'
      }}
    >
      <img src={data.imgSrc} alt={data.title} />
    </a>
  </div>
)

Poster.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Poster