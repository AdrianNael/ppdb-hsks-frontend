import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import RegionSelector from "../../Atoms/RegionSelector";
import Input from "../../Atoms/InputLangkah";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import { Link } from "react-router-dom";


const body10 = () => {

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        
        <div className="text-biruprimary font-bold mx-10 mt-4 mb-10">
        <BreadCrumbs />
        <div className="text-2xl font-bold mb-5">
          <p>Langkah  6</p>
          <p>Formulir Asesmen Sekolah Kak Seto Tambah Data</p>
        </div>
          <h6 className="mt-4 text-lg">Data Pemeriksaan</h6>
          <h6 className=" text-md">Telah mengalami pemeriksaan dari :</h6>
          <div>
            <form>
              <div>
                <label className="block mt-2 mb-1">1. Nama Dokter</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">2. Nama Psikiater/Psikolog</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">3. Nama Terapis 1</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">4. Nama Terapis 2</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">5. Nama Terapis 3</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">6. Diagnosis</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">7. Kendala Yang Dihadapi Anak</label>
                <label className="block mt-2 mb-1">Deskripsi keluhan yang dihadapi anak saat ini (gambaran perilaku, waktu kemunculan, intensitas, dan siatuasi munculnya perilaku).</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <h6 className="mt-4 text-lg">8. Kegiatan Sehari-hari</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-5 text-sm">
                    <label className="flex items-center">
                      <h3 className="mr-5">Memakai Baju :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>
                    <label className="flex items-center">
                      <h3 className="mr-5">Membuka Baju :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Memakai Toilet :</h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Minum Dari Gelas :</h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Sikat Gigi :</h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Memakai Sepatu : </h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Memakai Kaos Kaki :  </h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Cuci Tangan :  </h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>  
                  <label className="flex items-center">
                    <h3 className="mr-2">Memakai Kaos Kaki :  </h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                  <label className="flex items-center">
                    <h3 className="mr-2">Buka Tutup Resleting :</h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                    />
                  </label>
                </div>
                <h6 className="mt-4 text-lg">9. Data Tambahan Orangtua/Wali</h6>
                <h6 className="mt-2 text-md">Data Ayah :</h6>

          </form>
          <Link to="/langkah6">
            <Button
              label="Simpan"
              text="white"
              className="bg-[#27b6c1] w-full mt-8"
              onClick={handleButtonClick}
            />
          </Link>
        </div>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
    </>
  );
};

export default body10;
