import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for boxed content display
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
