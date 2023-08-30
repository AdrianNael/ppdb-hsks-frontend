// src/components/pages/Kontak.js
import React from 'react';
import Card from '../Atoms/Card';
import Icon from '../Atoms/Icon';

const Kontak = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Kontak Kami</h2>
        <div className="flex items-center">
          <Icon name="fa-phone" />
          <p className="mr-4">Telepon: 123-456-789</p>
        </div>
        <div className="flex items-center">
          <Icon name="fa-envelope" />
          <p>Email: info@example.com</p>
        </div>
        <div className="flex items-center">
          <Icon name="fa-map-marker-alt" />
          <p>Alamat: Jalan Contoh No. 123, Kota</p>
        </div>
      </Card>
    </div>
  );
};

export default Kontak;
