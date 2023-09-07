// CustomerServiceButton.js
import React, { useState } from "react";
import Modal from "react-modal";
import "../../Styles/index.css"; // Ganti dengan path CSS yang sesuai
import IconCS from "../../Assets/Images/page-1/support.svg";
import PPCS from "../../Assets/Images/page-1/ppCs.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import Kaksetopusat from "../../Assets/Images/page-1/kaksetopusat.svg";
import Kaksetodepok from "../../Assets/Images/page-1/Sekolahdepo.svg";
import Kaksetopkb from "../../Assets/Images/page-1/Sekolah Pekanbaru.svg";

function CustomerServiceButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="cs-container">
        <button className="cs-button bg-Hijau" onClick={openModal}>
          <img src={IconCS} alt="" className="inline mr-2 font-poppins" />
          Butuh Bantuan?
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Hubungi Customer Service"
        >
          <div className="modal-content">
            <div className="relative">
              <AiFillCloseCircle
                onClick={closeModal}
                color="red"
                className="absolute top-0 right-0 cursor-pointer md:-top-4 md:w-14 md:h-14"
                size={24}
              />
              <h1 className="font-bold text-biruprimary text-lg font-poppins m-3 md:text-xl">
                Hubungi Customer Service
              </h1>
            </div>

            <div className="card-container md:mx-36 mt-5 gap-2">
              <div className="cardcs -ml-2 bg-biruprimary rounded-lg text-center hover:scale-110 hover:bg-BiruSecondary1 hover:opacity-80 hover:transition-transform hover:duration-300">
                <div
                  className="w-20 h-20 md:w-40 md:h-40 mx-auto bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url(${Kaksetopusat})`,
                  }}
                ></div>
                <p className="text-white font-bold ">
                  Customer Servis Homeschooling{" "}
                </p>
                <p className="text-white font-bold mb-5"> Kak Seto Pusat</p>
                <button
                  className="bg-white text-biruprimary px-4 py-2 mb-4 rounded-lg hover:bg-lime-400"
                  onClick={closeModal}
                >
                  <a href="https://api.whatsapp.com/send/?phone=%2B6282382386827&text&type=phone_number&app_absent=0">
                    Hubungi{" "}
                  </a>
                </button>
              </div>
              <div className="cardcs bg-biruprimary rounded-lg text-center hover:scale-110 hover:bg-BiruSecondary1 hover:opacity-80 hover:transition-transform hover:duration-300">
                <div
                  className="w-20 h-20 md:w-40 md:h-40 mx-auto bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url(${Kaksetodepok})`,
                  }}
                ></div>
                <p className="text-white font-bold ">
                  Customer Servis Homeschooling{" "}
                </p>
                <p className="text-white font-bold mb-5"> Kak Seto Depok</p>
                <button
                  className="bg-white text-biruprimary px-4 py-2 mb-4 rounded-lg hover:bg-lime-400"
                  onClick={closeModal}
                >
                  <a href="https://api.whatsapp.com/send/?phone=%2B6281371122010&text&type=phone_number&app_absent=0">
                    Hubungi{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="card-container md:mx-36 mt-5 gap-2">
              <div className="cardcs -ml-2 bg-biruprimary rounded-lg text-center hover:scale-110 hover:bg-BiruSecondary1 hover:opacity-80 hover:transition-transform hover:duration-300">
                <div
                  className="w-20 h-20 md:w-40 md:h-40 mx-auto bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url(${Kaksetopkb})`,
                  }}
                ></div>
                <p className="text-white font-bold ">
                  Customer Servis Homeschooling{" "}
                </p>
                <p className="text-white font-bold mb-5"> Kak Seto Pekanbaru</p>
                <button
                  className="bg-white text-biruprimary px-4 py-2 mb-4 rounded-lg hover:bg-lime-400"
                  onClick={closeModal}
                >
                  <a href="https://api.whatsapp.com/send/?phone=%2B6282382386827&text&type=phone_number&app_absent=0">
                    Hubungi{" "}
                  </a>
                </button>
              </div>
              <div className="cardcs bg-biruprimary rounded-lg text-center hover:scale-110 hover:bg-BiruSecondary1 hover:opacity-80 hover:transition-transform hover:duration-300">
                <div
                  className="w-20 h-20 md:w-40 md:h-40 mx-auto bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url(${Kaksetodepok})`,
                  }}
                ></div>
                <p className="text-white font-bold ">
                  Customer Servis Homeschooling{" "}
                </p>
                <p className="text-white font-bold mb-5"> Kak Seto Bekasi</p>
                <button
                  className="bg-white text-biruprimary px-4 py-2 mb-4 rounded-lg hover:bg-lime-400"
                  onClick={closeModal}
                >
                  <a href="https://api.whatsapp.com/send/?phone=%2B6281371122010&text&type=phone_number&app_absent=0">
                    Hubungi{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default CustomerServiceButton;
