// CustomerServiceButton.js
import React, { useState } from "react";
import Modal from "react-modal";
import "../../Styles/index.css"; // Ganti dengan path CSS yang sesuai
import IconCS from "../../Assets/Images/page-1/support.svg";
import PPCS from "../../Assets/Images/page-1/ppCs.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import Kaksetopusat from "../../Assets/Images/page-1/kaksetopusat.svg";

function CustomerServiceButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="cs-container">
      <button className="cs-button bg-Hijau" onClick={openModal}>
        <img src={IconCS} alt="" className="inline mr-2 text-poppins" />
        Butuh Bantuan?
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Hubungi Customer Service">
        <div className="modal-content text-poppins relative">
          <AiFillCloseCircle onClick={closeModal} color="red" className="absolute top-0 right-0  cursor-pointer" size={24} />
          <h1 className="text-bold text-biruprimary text-lg text-poppins absoulte top-0 right-0 m-3">Hubungi Customer Service</h1>
          <div className="card-container text-poppins">
            <div className="cardcs  bg-biruprimary rounded-lg text-center ">
              <div className="center-image p-5 ">
                <img className="round-image " src={Kaksetopusat} alt="" />
              </div>
              <p className="text-white text-bold ">Customer Servis Homeschooling </p>
              <p className="text-white text-bold mb-5"> Kak Seto Pusat</p>
              <button className="bg-white text-biruprimary px-4 py-2 mb-4" onClick={closeModal}>
                <a href="https://api.whatsapp.com/send/?phone=%2B628119511845&text&type=phone_number&app_absent=0">Hubungi </a>
              </button>
            </div>
            <div className="cardcs bg-biruprimary rounded-lg text-center">
              <div className="center-image p-5">
                <img className="round-image" src={PPCS} alt="" />
              </div>
              <p className="text-white text-bold ">Customer Servis Homeschooling </p>
              <p className="text-white text-bold mb-5"> Kak Seto Depok</p>
              <button className="bg-white text-biruprimary  px-4 py-2  mb-4" onClick={closeModal}>
                <a href="https://api.whatsapp.com/send/?phone=%2B6281234514662&text&type=phone_number&app_absent=0">Hubungi </a>
              </button>
            </div>
          </div>
          <div className="card-container text-poppins">
            <div className="cardcs  bg-biruprimary rounded-lg text-center ">
              <div className="center-image p-5 ">
                <img className="round-image " src={PPCS} alt="" />
              </div>
              <p className="text-white text-bold ">Customer Servis Homeschooling </p>
              <p className="text-white text-bold mb-5"> Kak Seto Pekanbaru</p>
              <button className="bg-white text-biruprimary px-4 py-2 mb-4" onClick={closeModal}>
                <a href="https://api.whatsapp.com/send/?phone=%2B6282382386827&text&type=phone_number&app_absent=0">Hubungi </a>
              </button>
            </div>
            <div className="cardcs bg-biruprimary rounded-lg text-center">
              <div className="center-image p-5">
                <img className="round-image" src={PPCS} alt="" />
              </div>
              <p className="text-white text-bold ">Customer Servis Homeschooling </p>
              <p className="text-white text-bold mb-5"> Kak Seto Bekasi</p>
              <button className="bg-white text-biruprimary  px-4 py-2  mb-4" onClick={closeModal}>
                <a href="https://api.whatsapp.com/send/?phone=%2B6281371122010&text&type=phone_number&app_absent=0">Hubungi </a>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CustomerServiceButton;
