import React from "react";
import Header2 from "../../Organisms/Header2";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";

function Body() {

  return (
    <div>
      <Header2 />
      <div className="bg-biruprimary px-[2rem] items-center">
        <div className="text-white font-bold text-2xl mb-1">MASUK PROSES PPBD SEKOLAH KAK SETO</div>
        <div className="text-Emas text-sm pt-1">Belum Registrasi ? Klik Disini</div>
        <div style={{ position: "relative" }}>
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Email</label>
          <input
            className="border-none bg-transparent w-full"
            style={{
              color: "white",
              outline: "none",
              borderBottom: "2px solid white",
              paddingBottom: "5px",
            }}
            type="text"
            placeholder="Masukkan 2 - 100 Karakter"
          />
        </div>
        <div className="text-white text-xl font-bold pt-7">Token</div>
        <input
          className="border-none bg-transparent w-full"
          style={{
            color: "white",
            outline: "none",
            borderBottom: "2px solid white",
            paddingBottom: "5px",
          }}
          type="text"
          placeholder="Masukkan 8 Karakter"
        />
        <div style={{ color: "#27B6C1" }} className="pt-6 font-bold text-xl mb-1">Isi CAPTCHA Sebelum Ke Fase Selanjutnya</div>
        <img src={Captcha} alt="logo" className="h-30 mb-2 mt-8" />
        <div>
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
        <br />
        <hr />
        <br />
        <div className="flex justify-center pb-7">
          <button
            className="bg-white text-bg-biruprimary font-xl py-3 px-8 rounded-2xl w-full"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
