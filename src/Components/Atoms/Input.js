import React from 'react';

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 border rounded"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
