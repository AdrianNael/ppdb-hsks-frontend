import React from 'react';

function Input() {
  return (
    <div className='lg:w-1/2'>
        <input
        className="border-none bg-transparent w-full"
        style={{
            color: "white",
            outline: "none",
            borderBottom: "2px solid white",
            paddingBottom: "5px",
            
        }}
        type="text"
        placeholder="Masukan 3 Karakter Diatas"
        />
    </div>
  );
};

export default Input;
