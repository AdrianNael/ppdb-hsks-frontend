import React from "react";
import ButtonFormal from "../../Atoms/ButtonFormal";
import CardPutih from "../../Atoms/CardPutih"
import CardBiru from "../../Atoms/CardBiru"
import Button from "../../Atoms/Button";
import GelombangBawah from "../../Atoms/GelombangBawah";
import Footer from "../../Organisms/Footer"
import CustomerServiceButton from "../../Atoms/CustomServiesButton";


const body = () => {
  const handleButtonClick = () => {
    // Logika yang ingin Anda lakukan saat tombol ditekan
    console.log('Tombol ditekan');
  };


  return (
    <div>
      <div className="ml-[3rem]">
        <h4 className="font-bold text-2xl mt-1 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-2xl"> Sekolah Kak Seto</h4>
        <h6 className="text-Emas text-sm">
          Sudah Registrasi? Klik Masuk Proses PPDB
        </h6>
      </div>
        <ButtonFormal />
      <div>
      <h4 class="ml-12 font-bold text-lg">Lokasi Sekolah :</h4>
        <h6 className="ml-12 font-normal text-sm text-Emas">(Klik untuk penjelasan)</h6>
      </div>
      <div class="lokasi-card grid grid-cols-2 auto-cols-max mx-8 gap-6 max-w-full mt-4">
    <CardPutih/>
    <CardBiru/>
    <CardBiru/>
    <CardPutih/>
      </div>
      <div className="h-[9.375rem] -mb-3">
      <GelombangBawah />
      </div>
      <div className="bg-biruprimary pb-4 mx-auto">
        <h4 className="text-white font-semibold mb-2 mx-8">Tahun Pelajaran</h4>
        <div className="flex justify-center w-full">
          <select className="mx-auto border-2 bg-biruprimary text-white">
            <option>Pilih</option>
            <option>Tahun Pelajaran 2023/2024</option>
            <option>Tahun Pelajaran 2022/2023</option>
            <option>Tahun Pelajaran 2021/2022</option>
          </select>
        </div>
      </div>
      <div className="bg-biruprimary pb-5">
        <h4 className="text-white font-semibold mb-1 mx-8">
          Jenjang Sekolah :
        </h4>
        <div className="grid grid-cols-2 gap-6 mr-4 ml-4 text-white">
          <Button
            label="TK"
            onClick={handleButtonClick}
            color="TK"
            className="ml-24 bg-TK"
          />
          <Button label="SD" color="SD" className="bg-SD" />
          <Button label="SMP" color="SMP" className="ml-24 bg-SMP" />
          <Button label="SMA" color="SMA" className="bg-SMA" />
        </div>
        <div className="mt-2">
          <h4 className="mx-8 font-semibold text-white mb-4">
            Pilih tingkatan :
          </h4>
          <div className="flex flex-col justify-center items-center text-biruprimary font-semibold">
            <div className="grid grid-cold-5 grid-flow-col">
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                0
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                1
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                2
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                3
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                4
              </button>
            </div>
            <div className="grid grid-cold-5 grid-flow-col">
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                5
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                6
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                7
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                8
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                9
              </button>
            </div>
            <div className="grid grid-cold-3 grid-flow-col">
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                10
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                11
              </button>
              <button className="bg-white w-9 h-9 rounded-[0.3rem] mx-2 mb-2">
                12
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-white rounded-lg px-4 py-2 text-sm text-biruprimary font-bold ">
              SELANJUTNYA <span className="text-lg">👉</span>
            </button>
          </div>
          <div className="border-t-4 border-white my-4 mx-8"></div>
          <div className="text-white font-bold ">
            <h4 className="ml-16">Lokasi yang dipilih :</h4>
            <p className="ml-16 mt-3">Homeshooling Kak Seto Pusat</p>
            <div className="flex items-center justify-center">
              <span className="ml-12">Jenjang : </span>
              <span className="ml-4">SD</span>
              <span className="ml-10">|</span>
              <span className="ml-12">Tingkatan : </span>
              <span className="ml-4">3</span>
            </div>
          </div>
          <div className="mx-8 mt-4">
            <h4 className="font-semibold text-white">Program yang dipilih :</h4>
            <p className="text-Emas">(Klik untuk vidio penjelasan)</p>
            <div className="card mt-4">
              <div className="card-row bg-white rounded-xl">
                <div className="card-title flex p-4 justify-between">
                  <h6 className="font-medium font-mono">Program 1</h6>
                  <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                </div>
                <div className="card-body px-4 py-2 text-slate-500">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-row bg-white rounded-xl">
                <div className="card-title flex p-4 justify-between">
                  <h6 className="font-medium font-mono">Program 2</h6>
                  <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                </div>
                <div className="card-body px-4 py-2 text-slate-500">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-row bg-white rounded-xl">
                <div className="card-title flex p-4 justify-between">
                  <h6 className="font-medium font-mono">Program 3</h6>
                  <div className=" bg-red-600 w-6 h-6 rounded-full"></div>
                </div>
                <div className="card-body px-4 py-2 text-slate-500">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-position mt-4 flex justify-end">
            <button className="rounded-[0.938rem] bg-white p-2 border-none text-biruprimary font-semibold w-40 mr-8">Selanjutnya 👉</button>
          </div>
        </div>
      </div>
      <Footer/>
      <CustomerServiceButton/>
    </div>
  );
};

export default body;
