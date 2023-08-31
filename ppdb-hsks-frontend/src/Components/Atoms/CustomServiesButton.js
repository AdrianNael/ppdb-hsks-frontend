// CustomerServiceButton.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../Styles/index.css'; // Ganti dengan path CSS yang sesuai
import IconCS from '../../Assets/Images/page-1/support.svg'
import PPCS from '../../Assets/Images/page-1/ppCs.svg'

const CustomerServiceButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="cs-container">
      <button className="cs-button bg-Hijau " onClick={openModal}>
      <img src={IconCS} alt="" className="inline mr-2" />
        Butuh Bantuan?
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Hubungi Customer Service"
      >
<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Hubungi Customer Service"
>
  <div className="modal-content">
    <h2>Hubungi Customer Service</h2>
    <p>Silakan ajukan pertanyaan atau sampaikan masalah Anda.</p>
    <div className="card-container p-5">
      <div className="card bg-biruprimary rounded-lg text-center">
        <img className="round-image "src={PPCS} alt="" />
        <p className='text-white text-sm m-3'>
        Customer Servis
        Homeschooling
        Kak Seto Depok
        </p>
        <button className="bg-white text-biruprimary px-2 py-1"onClick={closeModal}>Hubungi</button>
      </div>
      <div className="card">
        <h3>Deskripsi Gambar</h3>
        <p>
          Ini adalah deskripsi untuk gambar yang Anda lihat di atas. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
    </div>
    <button onClick={closeModal}>Tutup</button>
  </div>
</Modal>
      </Modal>
    </div>
  );
};

export default CustomerServiceButton;