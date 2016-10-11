import React, { PropTypes } from 'react'

const Filter = ({ onResetClick, filterOptions, applyFilter }) => (
  <div className="row typeahead">
    <div className="col-sm-12 text-center">
      <div className="th-wrapper">
        <button className="button" onClick={() => onResetClick}>
          Reset
        </button>
        <Typeahead
          options={filterOptions}
          maxVisible={3}
          onOptionSelected={() => applyFilter}
        />
      </div>
    </div>
  </div>
)

Filter.propTypes = {
  onResetClick: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  applyFilter: PropTypes.func.isRequired
}

export default Filter