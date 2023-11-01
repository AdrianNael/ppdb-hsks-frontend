import React, { useEffect, useState } from "react";
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

  const [Tingkatandiklik, setTingkatandiklik] = useState(false);

  const [TingakatanAktif, setTingkatanAktif] = useState(null);

  const [AngkaMulai, setAngkaMulai] = useState(0);

  const [jumlahButton, setJumlahButton] = useState(1);

  const handleTingkatan = (grade) => {
    setTingkatan(grade);
  };

  const handletahunpelajaran = (year) => {
    settahunpelajaran(year);
  };

  const toggleHiddenElement = () => {
    setHiddenElementVisible(!hiddenElementVisible);
  };

  const handleButtonTahunPelajaran = () => {
    // Lakukan sesuatu ketika tombol di klik, misalnya, ubah filter
    const radioButtonTahunPelajaran1 = document.getElementById("radiobtn1");
    const radioButtonTahunPelajaran2 = document.getElementById("radiobtn2");
    const buttonTahunPelajaran1 = document.getElementById("tahunpelajaran1");
    const buttonTahunPelajaran2 = document.getElementById("tahunpelajaran2");
    if (radioButtonTahunPelajaran1.checked) {
      if (buttonTahunPelajaran2.classList.contains("bg-emerald-500")) {
        buttonTahunPelajaran2.classList.remove("bg-emerald-500");
      }
      const hasGreenBackground1 =
        buttonTahunPelajaran1.classList.contains("bg-emerald-500");
      if (hasGreenBackground1) {
        buttonTahunPelajaran1.classList.remove("bg-emerald-500");
      } else {
        buttonTahunPelajaran1.classList.add("bg-emerald-500");
      }
    } else if (radioButtonTahunPelajaran2.checked) {
      if (buttonTahunPelajaran1.classList.contains("bg-emerald-500")) {
        buttonTahunPelajaran1.classList.remove("bg-emerald-500");
      }
      const hasGreenBackground2 =
        buttonTahunPelajaran2.classList.contains("bg-emerald-500");
      if (hasGreenBackground2) {
        buttonTahunPelajaran2.classList.remove("bg-emerald-500");
      } else {
        buttonTahunPelajaran2.classList.add("bg-emerald-500");
      }
    }
  };
  // const handleButtonTingkatan = () => {
  //   if (setTingkatandiklik(true)) {
  //     const button0 = document.getElementById("0");
  //     button0.classList.remove("bg-white");
  //   }
  // };

  const handleButtonTingkatan = (buttonId) => {
    setTingkatanAktif(buttonId);
  };

  useEffect(() => {
    if (jenjang === "TK") {
      setJumlahButton(1);
      setAngkaMulai(0);
    } else if (jenjang === "SD") {
      setJumlahButton(6);
      setAngkaMulai(1);
    } else if (jenjang === "SMP") {
      setJumlahButton(3);
      setAngkaMulai(7);
    } else if (jenjang === "SMA") {
      setJumlahButton(3);
      setAngkaMulai(10);
    } else {
      setJumlahButton(0);
      setAngkaMulai(0);
    }
  }, [jenjang]);

  // const handleButtonTahunPelajaran = (e) => {
  //   const divElement = e.currentTarget.querySelector("div");
  //   const targetRadioId = e.currentTarget.getAttribute("data-radio");

  //   if (e.target.checked) {
  //     // Hapus latar belakang "emerald" dari semua elemen radio dengan ID yang sama
  //     const allRadios = document.querySelectorAll(
  //       `input[type="radio"][id="${targetRadioId}"]`
  //     );
  //     allRadios.forEach((radio) => {
  //       radio.previousElementSibling.classList.remove("bg-emerald-500");
  //     });

  //     // Tambahkan latar belakang "emerald" pada elemen radio yang di-check
  //     e.currentTarget.classList.add("bg-emerald-500");
  //     divElement.classList.add("bg-emerald-500");
  //   } else {
  //     // Hapus latar belakang "emerald" saat elemen radio di-uncheck
  //     divElement.classList.remove("bg-emerald-500");
  //   }
  //   const radios = document.querySelectorAll('input[type="radio"]');
  //   const checkedRadio = Array.from(radios).find((radio) => radio.checked);
  //   if (!checkedRadio) {
  //     const firstRadio = radios[0];
  //     firstRadio.checked = true;
  //     handleButtonTahunPelajaran({ target: firstRadio }); // Jalankan fungsi handleButtonTahunPelajaran untuk elemen radio pertama
  //   }
  // };
  return (
    <div className="font-sans">
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
          <div className="grid grid-cols-2 gap-8 xl:flex text-white">
            <ButtonJenjang setJenjang={setJenjang} />
          </div>
        </div>
        <div className="bg-biruprimary  pb-6 mx-auto -mb-1">
          <h4 className="text-white font-semibold mb-5 mx-8 mt-5 md:text-[2rem] md:leading-[3.5rem]">
            Tahun Pelajaran :
          </h4>
          <div className="flex justify-center items-center w-full text-lg md:text-2xl">
            <div className="flex flex-wrap items-center justify-center mx-8 gap-4">
              <div className="flex items-center justify-center">
                <label
                  className="text-lg mx-4 cursor-pointer px-4 py-6 border-2 border-[#14372E] rounded-2xl bg-white font-semibold transition duration-200"
                  data-radio="radiobtn1"
                >
                  <div
                    className="border-2 border-[#14372E] w-6 h-6 rounded-full ml-auto"
                    id="tahunpelajaran1"
                  ></div>
                  <input
                    type="radio"
                    name="check button"
                    id="radiobtn1"
                    checked={tahunpelajaran === "TahunPelajaran2024-2025"}
                    onChange={() =>
                      handletahunpelajaran("Tahun Pelajaran 2024/2025")
                    }
                    onClick={handleButtonTahunPelajaran}
                    className="hidden"
                  />{" "}
                  Tahun Pelajaran 2024/2025
                </label>
              </div>
              <div className="flex items-center justify-center">
                <label
                  className="text-lg mx-4 cursor-pointer px-4 py-6 border-2 border-[#14372E] rounded-2xl bg-white font-semibold transition duration-200"
                  data-radio="radiobtn2"
                >
                  <div
                    className="border-2 border-[#14372E] w-6 h-6 rounded-full ml-auto z-50"
                    id="tahunpelajaran2"
                  ></div>
                  <input
                    type="radio"
                    id="radiobtn2"
                    value="TahunPelajaran2023-2024"
                    checked={tahunpelajaran === "TahunPelajaran2023-2024"}
                    onChange={() =>
                      handletahunpelajaran("Tahun Pelajaran 2023/2024")
                    }
                    onClick={handleButtonTahunPelajaran}
                    className="hidden"
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
            <div className="grid mx-3 mb-3 grid-cols-5">
              {Array.from({ length: jumlahButton }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleTingkatan();
                    handleButtonTingkatan((index + AngkaMulai).toString());
                  }}
                  className={`w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in
                          ${
                            TingakatanAktif === (index + AngkaMulai).toString()
                              ? "bg-green-400 text-white"
                              : "bg-white"
                          }
                        `}
                >
                  {index + AngkaMulai}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-5 grid-flow-col mx-3 mb-3">
              <button
                id="0"
                onClick={() => {
                  handleTingkatan("0");
                  handleButtonTingkatan("0");
                }}
                className={`w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in ${
                  TingakatanAktif === "0"
                    ? "bg-green-400 text-white"
                    : "bg-white"
                }`}
              >
                0
              </button>
              <button
                id="1"
                onClick={() => {
                  handleTingkatan("1");
                  handleButtonTingkatan("1");
                }}
                className={`w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in ${
                  TingakatanAktif === "1"
                    ? "bg-green-400 text-white"
                    : "bg-white"
                }`}
              >
                1
              </button>
              <button
                id="2"
                onClick={() => handleTingkatan("2")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                2
              </button>
              <button
                id="3"
                onClick={() => handleTingkatan("3")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                3
              </button>
              <button
                id="4"
                onClick={() => handleTingkatan("4")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                4
              </button>
            </div>
            <div className="grid grid-cold-5 grid-flow-col mx-3 mb-3">
              <button
                id="5"
                onClick={() => handleTingkatan("5")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                5
              </button>
              <button
                id="6"
                onClick={() => handleTingkatan("6")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                6
              </button>
              <button
                id="7"
                onClick={() => handleTingkatan("7")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                7
              </button>
              <button
                id="8"
                onClick={() => handleTingkatan("8")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                8
              </button>
              <button
                id="9"
                onClick={() => handleTingkatan("9")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                9
              </button>
            </div>
            <div className="grid grid-cold-3 grid-flow-col mx-3 mb-3">
              <button
                id="10"
                onClick={() => handleTingkatan("10")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                10
              </button>
              <button
                id="11"
                onClick={() => handleTingkatan("11")}
                className="bg-white w-12 h-12 rounded-[0.3rem] mx-2 mb-2 md:w-16 md:h-16 hover:bg-green-400 hover:text-white hover:-translate-y-2 hover:duration-300 hover:ease-in"
              >
                11
              </button>
              <button
                id="12"
                onClick={() => handleTingkatan("12")}
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
