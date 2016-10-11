import React, { PropTypes } from 'react'

const Poster = ({ onClick, hover, content }) => (
  <div className="add-margin col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <a
      style={hoverStyle}
      onClick={this.open}
      onMouseEnter={this.mouseOver}
      onMouseLeave={this.mouseLeave}>
      <img src={this.props.data.posterPath} alt={this.props.data.movieTitle} />
    </a>
  </div>
)

Poster.propTypes = {
  onClick: PropTypes.func.isRequired,

}

export default Poster