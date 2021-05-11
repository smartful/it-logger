import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const handleChange = e => {
    searchLogs(text.current.value);
  }

  return (
    <nav style={{ marginBottom: '30px'}} className="blue" >
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs ..."
              ref={text}
              onChange={handleChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func,
};

export default connect(null, { searchLogs })(SearchBar);