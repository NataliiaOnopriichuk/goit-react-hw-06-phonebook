import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ nameFilter, handleChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
