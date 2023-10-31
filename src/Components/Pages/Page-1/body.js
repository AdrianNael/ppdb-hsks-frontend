import React, { useState } from "react";
import ButtonFormal from "../../Atoms/ButtonFormal";
import CardPutih from "../../Atoms/CardPutih";
import CardBiru from "../../Atoms/CardBiru";
import Button from "../../Atoms/Button";
import GelombangBawah from "../../Atoms/GelombangBawah";
import Footer from "../../Organisms/Footer";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";
import Header from "../../Organisms/Header";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonJenjang from "../../Atoms/ButtonJenjang";

const Body = () => {
  const [jenjang, setJenjang] = useState("");
  const [hiddenElementVisible, setHiddenElementVisible] = useState(false);

  const [tahunpelajaran, settahunpelajaran] = useState("");

  const [tingkatan, setTingkatan] = useState("");

  const handleTingkatan = (event) => {
    setTingkatan(event.target.id);
  };

  const handletahunpelajaran = (year) => {
    settahunpelajaran(year);
  };

  const toggleHiddenElement = () => {
    setHiddenElementVisible(!hiddenElementVisible);
  };
  return (
    <div>
      <Header />
      <div className="ml-[3rem]">
        <h4 className="font-bold text-2xl mt-10 mb-1 xl:text-[2.75rem] xl:leading-[3.5rem]">
          Registrasi PPDB
        </h4>
        <h4 className="font-bold text-2xl xl:text-[2.75rem] xl:leading-[3.5rem]">
          {" "}
          Sekolah Kak Seto
        </h4>
        <h6 className="text-Emas text-sm xl:text-2xl">
          <a href="">Sudah Registrasi? Klik Masuk Proses PPDB</a>
        </h6>
      </div>
      <ButtonFormal />
      <div>
        <h4 className="ml-12 font-bold text-lg xl:text-[2.75rem] xl:leading-[3.5rem]">
          Lokasi Sekolah :
        </h4>
        <h6 className="ml-12 font-normal text-sm text-Emas xl:text-2xl">
          <a href="https://www.youtube.com/channel/UCYbs_Oi0pDQVVGdBShiC2jA">
            (Klik untuk penjelasan)
          </a>
        </h6>
      </div>
      <div className="lokasi-card grid grid-cols-2 xl:grid-cols-4 auto-cols-max mx-8 gap-6 max-w-full mt-4">
        <CardPutih />
        <CardBiru />
        <CardBiru />
        <CardPutih />
      </div>
      <div className="h-[9.375rem] z-50 -mb-2 lsm:mb-10 sm:mb-16 md:mb-24 lg:mb-48">
        <GelombangBawah />
      </div>

      <div className="bg-biruprimary pb-5 pt-3 ">
        <h4 className="text-white font-semibold mb-5 mx-8 xl:text-[2rem] xl:leading-[3.5rem]">
          Jenjang Sekolah :
        </h4>
        <div className="flex justify-center">
          <div>
            <ButtonJenjang setJenjang={setJenjang} />
          </div>
        </div>
        <div className="bg-biruprimary  pb-6 mx-auto -mb-1">
          <h4 className="text-white font-semibold mb-5 mx-8 mt-5 md:text-[2rem] md:leading-[3.5rem]">
            Tahun Pelajaran :
          </h4>
          <div className="flex justify-center items-center w-full text-lg md:text-2xl">
            <div className="mx-8 space-y-5">
              <div className="flex items-center justify-center">
                <label className="text-SD mx-4 cursor-pointer px-4 py-6 border-2 border-emerald-600 rounded-2xl bg-white active:bg-emerald-600 active:border-white active:scale-105 active:text-white focus:bg-amber-600">
                  <input
                    type="radio"
                    name="check button"
                    id="radiobtn1"
                    checked={tahunpelajaran === "TahunPelajaran2024-2025"}
                    onChange={() =>
                      handletahunpelajaran("Tahun Pelajaran 2024/2025")
                    }
                    className="hidden"
                  />{" "}
                  Tahun Pelajaran 2024/2025
                </label>
              </div>
              <div className="flex items-center justify-center">
                <label
                  className={`text-white mx-4 cursor-pointer border px-4 py-6 bg-teal-500 ${
                    tahunpelajaran === "TahunPelajaran2023-2024"
                      ? "bg-lime-500"
                      : ""
                  }`}
                  onClick={() =>
                    handletahunpelajaran("TahunPelajaran 2023/2024")
                  }
                >
                  <input
                    type="radio"
                    id="tahunpelajaran2023"
                    value="TahunPelajaran2023-2024"
                    checked={tahunpelajaran === "TahunPelajaran2023-2024"}
                    onChange={() =>
                      handletahunpelajaran("Tahun Pelajaran 2023/2024")
                    }
                    style={{ display: "none" }}
                  />
                  Tahun Pelajaran 2023/2024
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="mx-8 font-semibold text-white mb-5 mt-5 md:text-[2rem] md:leading-[3.5rem]">
            Pilih tingkatan :
          </h4>
          <div className="flex flex-col justify-center items-center text-biruprimary font-semibold md:text-2xl">
            <div className="grid grid-cold-5 grid-flow-col mx-3 mb-3">
              <button
                id="0"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                0
              </button>
              <button
                id="1"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                1
              </button>
              <button
                id="2"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                2
              </button>
              <button
                id="3"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                3
              </button>
              <button
                id="4"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                4
              </button>
            </div>
            <div className="grid grid-cold-5 grid-flow-col mx-3 mb-3">
              <button
                id="5"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                5
              </button>
              <button
                id="6"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                6
              </button>
              <button
                id="7"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                7
              </button>
              <button
                id="8"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                8
              </button>
              <button
                id="9"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                9
              </button>
            </div>
            <div className="grid grid-cold-3 grid-flow-col mx-3 mb-3">
              <button
                id="10"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                10
              </button>
              <button
                id="11"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                11
              </button>
              <button
                id="12"
                onClick={handleTingkatan}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                12
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center"
              onClick={toggleHiddenElement}
            >
              Oke <MdNavigateNext className="ml-2" size={20} />
            </button>
          </div>
          {hiddenElementVisible && (
            <div>
              <div className="border-t-4 border-white my-4 mx-8 mb-5">
                <div className="text-white font-bold text-ml xl:text-[2rem] xl:leading-[3.5rem]">
                  <h4 className="ml-16 ">Lokasi yang dipilih :</h4>
                  <p className="ml-16 mt-3 ">Homeshooling Kak Seto Pusat</p>
                  <div className="flex flex-wrap items-center justify-center mt-5">
                    <div className="md:mx-6">
                      <p className="ml-4text-white text-stroke">
                        Tahun Pelajaran :
                      </p>
                      <input
                        className="border-2 my-2 border-cyan-500 rounded-md text-biruprimary cursor-default"
                        type="text"
                        value={tahunpelajaran}
                      />
                    </div>
                    <div className="md:mx-6">
                      <p className="ml-4 text-white text-stroke">Jenjang :</p>
                      <input
                        className="border-2 my-2 border-cyan-500 rounded-md text-biruprimary cursor-default"
                        type="text"
                        value={jenjang}
                      />
                    </div>
                    <div className="md:mx-6">
                      <p className="ml-4 text-white text-stroke">Tingkatan :</p>
                      <input
                        className="border-2 my-2 border-cyan-500 rounded-md text-biruprimary cursor-default"
                        type="text"
                        value={tingkatan}
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-8 mt-5">
                  <h4 className="font-bold text-white xl:text-[2rem] xl:leading-[3.5rem] xl:ml-6">
                    Program yang dipilih :
                  </h4>
                  <p className="text-Emas xl:text-xl xl:ml-6">
                    <a href="https://www.youtube.com/channel/UCYbs_Oi0pDQVVGdBShiC2jA">
                      (Klik untuk vidio penjelasan)
                    </a>
                  </p>
                  <div className="kartu mt-5 mx-4 md:flex md:flex-wrap md:gap-2 md:justify-center">
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 1</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 2</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 3</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 4</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 5</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="kartu-row bg-white rounded-xl mb-4 md:w-1/4">
                      <div className="kartu-title flex p-4 justify-between">
                        <h6 className="font-medium font-mono">Program 6</h6>
                        <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="kartu-body px-4 pt-2 pb-4 text-slate-500">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <Link to="/form">
                    <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold my-5 flex items-center">
                      SELANJUTNYA <MdNavigateNext className="ml-2" size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <CustomerServiceButton />
    </div>
  );
};

export default Body;
