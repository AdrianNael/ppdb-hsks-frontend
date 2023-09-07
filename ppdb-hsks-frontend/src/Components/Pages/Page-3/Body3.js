import React, { useEffect } from "react";
import Header2 from "../../Organisms/Header2";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";
import { Link } from 'react-router-dom';
import Footer from "../../Organisms/Footer";
import { MdNavigateNext } from "react-icons/md";
import Input from "../../Atoms/InputCaptcha";
import Input2 from "../../Atoms/InputText";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";
import "../../../Styles/index.css";
import Modal from "../Page-3/Modal"

function Body() {


  return (
    <div>
      <Header2 />
      <div className="bg-biruprimary px-[2rem] items-center">
        <div className="text-white font-bold text-2xl mb-1">Registrasi PPDB Sekolah Kak Seto</div>
        <div className="text-Emas text-sm underline pt-1">Sudah Registrasi ? Klik Masuk Proses PPDB</div>

        <div className="relative lg:w-1/2">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Email</label>
          <Input2 />
          <Modal />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-cols-max gap-6 max-w-full">
          <div className="">
            
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
              <Input2 />
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">No. Handphone</label>
              <Input2 />
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">No. Whatsapp</label>
              <Input2 />
            </div>
          </div>

          <div>
            <div style={{ color: "#27B6C1" }} className="text-white text-xl font-bold pt-7">Data Peserta Didik</div>
            


            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Nama Peserta Didik (sesuai yang tercantum di NIK)</label>
              <Input2 />
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
                className=" bg-transparent border border-white w-full bg-transparent  p-2.5 rounded-lg text-gray-400"
              >
                <option selected>Pilih...</option>
                <option value="US">IPA</option>
                <option value="CA">IPS</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Tanggal Lahir</label>
              <Input2 />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Apakah calon peserta didik terindikasi "Anak Berkebutuhan Khusus"?</label>
            
            <Input2 />
          </div>


          <div className="relative">
            <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Apakah calon peserta didik pernah melakukan pemeriksaan psikologis dari psikolog atau psikiater?</label>
            
            <Input2 />
          </div>
        </div>
        
        
        
        <div style={{ color: "#27B6C1" }} className="pt-6 font-bold text-xl mb-1">Isi CAPTCHA Sebelum Ke Fase Selanjutnya</div>
        
        <img src={Captcha} alt="logo" className="h-30 mb-2 mt-8" />
        
        <Input />
        
        <br />
        <hr />
        <br />
        
        <div className="flex justify-center pb-7">
        <Link to="/survei">
        <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center">
          SELANJUTNYA <MdNavigateNext className="ml-2" size={20} />
        </button>
          </Link>
        </div>
      </div>
      <CustomerServiceButton />
      <Footer/>
    </div>
  );
}

export default Body;
