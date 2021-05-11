import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteLog, setCurrent } from '../../actions/logActions';


const LogItem = ({ log, deleteLog, setCurrent }) => {
  const handleDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log deleted'});
  }

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br/>
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span>{' '}
          last updated by{' '}
          <span className="black-text">{log.tech}</span>{' '}
          on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object,
  deleteLog: PropTypes.func,
  setCurrent: PropTypes.func,
};


export default connect(null, { deleteLog, setCurrent })(LogItem);