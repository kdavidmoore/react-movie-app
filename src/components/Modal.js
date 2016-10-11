import React, { PropTypes } from 'react'

const PosterModal = ({ active, close, data }) => (
  <Modal show={active} onHide={() => close}>
    <Modal.Body>
      <h4>{data.movieTitle}</h4>
      <p>{data.movieDescription}</p>
      <p>
        <b>Genres:</b> {data.genres}
        <br />
        <b>Score:</b> {data.movieScore}/10
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => close}>Close</Button>
    </Modal.Footer>
  </Modal>
)

Modal.propTypes = {
  active: PropTypes.boolean.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default Modal