// src/components/PPDBForm.js
import React, { useState } from 'react';
import Input from './Atoms/Input';
import Button from './Atoms/Button';

const PPDBForm = () => {
  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Formulir:', { nama, tanggalLahir, alamat, nomorTelepon });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Formulir Pendaftaran PPDB</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nama Lengkap"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <Input
          label="Tanggal Lahir"
          type="date"
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
        />
        <Input
          label="Alamat"
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <Input
          label="Nomor Telepon"
          type="tel"
          value={nomorTelepon}
          onChange={(e) => setNomorTelepon(e.target.value)}
        />
        <Button label="Daftar" />
      </form>
    </div>
  );
};

export default PPDBForm;
