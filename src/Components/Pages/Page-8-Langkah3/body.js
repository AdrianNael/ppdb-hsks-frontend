import React from 'react';

const FirstDiv = () => {
  // Definisikan pola loop untuk div pertama di sini
  const pattern = {
    background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, black 10px, black 20px)',
    height: '200px' // Sesuaikan tinggi div
  };

  return (
    <div style={pattern}>
      {/* Konten div pertama */}
    </div>
  );
};

const SecondDiv = () => {
  return (
    <div style={{ flex: '0 0 50%', background: '#3498db' }}>
      {/* Konten div kedua */}
    </div>
  );
};

const ThirdDiv = () => {
  // Definisikan pola loop untuk div ketiga di sini
  const pattern = {
    background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, black 10px, black 20px)',
    height: '200px' // Sesuaikan tinggi div
  };

  return (
    <div style={{ flex: '1', ...pattern }}>
      {/* Konten div ketiga */}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
    </div>
  );
}
