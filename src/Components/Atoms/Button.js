import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, color, text, className }) {
  return (
    <button
      className={`bg-${color} text-${text} p-2 w-[5.25rem] rounded-md border-2 ${className}`} // Menggunakan kelas warna Tailwind CSS
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

Button.defaultProps = {// Warna default jika tidak diatur
  text: "default", // Warna default jika tidak diatur
};

export default Button;