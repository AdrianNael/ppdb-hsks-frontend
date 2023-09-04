import React from "react";
import Header2 from "../../Organisms/Header2";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";

function Body() {
  const fontStyles = {
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div>
      <Header2 />
      <div className="bg-biruprimary px-[2rem] items-center" style={fontStyles}>
        <div className="text-white font-bold text-2xl mb-1">Registrasi PPDB Sekolah Kak Seto</div>
        <div className="text-Emas text-sm underline pt-1">Belum Registrasi ? Klik Masuk Proses PPDB</div>
        
        <div className="relative">
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
        
        <div style={{ color: "#27B6C1" }} className="text-white text-xl font-bold pt-7">Data Orang tua / Wali</div>
        
        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Hubungan Keluarga</label>
          <select
            id="countries"
            className=" bg-transparent border border-white w-full bg-transparent w-full p-2.5 rounded-lg text-gray-400"
          >
            <option selected>Pilih...</option>
            <option value="">Ayah</option>
            <option value="">Ibu</option>
            <option value="">Wali</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Nama yang sesuai KTP</label>
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

        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">No. Handphone</label>
          <input
            className="border-none bg-transparent w-full p-2.5 rounded-lg"
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

        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">No. Whatsapp</label>
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

        <div style={{ color: "#27B6C1" }} className="text-white text-xl font-bold pt-7">Data Peserta Didik</div>
        


        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Nama Peserta Didik (sesuai yang tercantum di NIK)</label>
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
        
        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Jenis Kelamin</label>
          <select
            id="countries"
            className=" bg-transparent border border-white w-full bg-transparent w-full p-2.5 rounded-lg text-gray-400"
          >
            <option selected>Pilih...</option>
            <option value="US">Laki-Laki</option>
            <option value="CA">Perempuan</option>
          </select>
        </div>


        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Jurusan</label>
          <select
            id="countries"
            className=" bg-transparent border border-white w-full bg-transparent w-full p-2.5 rounded-lg text-gray-400"
          >
            <option selected>Pilih...</option>
            <option value="US">IPA</option>
            <option value="CA">IPS</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Tanggal Lahir</label>
          <input
            className="border-none bg-transparent w-full"
            style={{
              color: "white",
              outline: "none",
              borderBottom: "2px solid white",
              paddingBottom: "5px",
            }}
            type="text"
            placeholder="DD-MM-YYYY"
          />
        </div>

        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Apakah calon peserta didik terindikasi "Anak Berkebutuhan Khusus"?</label>
          
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


        <div className="relative">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Apakah calon peserta didik pernah melakukan pemeriksaan psikologis dari psikolog atau psikiater?</label>
          
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
          <button className="bg-white font-bold font-xl py-3 px-8 rounded-2xl">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
