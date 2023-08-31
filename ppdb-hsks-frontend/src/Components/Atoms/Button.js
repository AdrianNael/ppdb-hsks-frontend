import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, color,textcolor }) {
  return (
    <button
    className={`btn bg-${color} text-${textcolor} p-2 rounded-md`} // Menggunakan kelas warna Tailwind CSS
    onClick={onClick}
  >
    {label}
  </button>
);
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string,

  };
  
  Button.defaultProps = {
    color: 'default',
    textcolor:'default',
  };

export default Button;