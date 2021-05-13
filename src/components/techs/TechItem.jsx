import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(id)
    M.toast({ html: `Technician ${firstName} ${lastName} has been deleted` });
  }

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object,
  deleteTech: PropTypes.func,
};

export default connect(null, { deleteTech })(TechItem);