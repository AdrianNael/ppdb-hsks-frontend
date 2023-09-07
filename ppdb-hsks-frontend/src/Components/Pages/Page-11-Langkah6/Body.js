import Footer from "../../Organisms/Footer";
import Navbar from "../../Pages/Page-6-Langkah1/Navbar3"

const body11 = () => {
  return (
    <>
    <Navbar/>
      <div className="text-biruprimary  mx-8 mt-4 mb-24">
        <div className="text-2xl font-bold">
        <p>Langkah 6</p>
        <p>Formulir Asesmen Sekolah Kak Seto Tambah Data</p>
        </div>
        <div className="text-2xl  mt-10">
        <p className="font-semibold">Data Pemeriksaan</p>
        <p className="font-base">Telah mengalami pemeriksaan dari :</p>
        </div>
        <div className="grid lsm:grid-cols-2 lsm:gap-2">
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">1. Nama Dokter</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
        </div>
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">2. Nama Psikiater/Psikolog</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
        </div>
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">3. Nama Terapis 1</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
        </div>
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">4. Nama Terapis 2</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
        </div>
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">5. Nama Terapis 3</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
        </div>
        
        </div>
        <div className="text-2xl mt-5 ">
        <p className="font-semibold mb-5">6. Diagnosis</p>
        <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-36"></textarea>
        </div>
        <div className="border-t border-biruprimary m-w-auto my-10"></div>
      </div>
      <Footer/>
    </>
  );
};

export default body11;
