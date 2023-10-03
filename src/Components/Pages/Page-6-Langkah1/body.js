import Footer from "../../Organisms/Footer";
import Navbar from "../../Pages/Page-6-Langkah1/Navbar3"
import Surat from "./Surat"

const body7 = () => {
  return (
    <>
    <Navbar/>
      <div className="text-biruprimary  mx-8 mt-4 mb-24">
        <div className="text-2xl font-bold">
        <p>Langkah 1</p>
        <p>Registrasi PPDB Sekolah Kak Seto Selesai</p>
        </div>
        <div className=" grid lsm:grid-cols-2 lsm:gap-5 mb-5">
            <div className=" lsm:border-r lsm:border-r-biruprimary pr-5">
             <div className="mt-10">
             <p className="text-justify text-md font-bold">Siliahkan Mengunduh Product Knowledge dibawah ini untuk mempelajari program pendidikan yang akan kami berikan kepada Putera/ Puteri  Bapak/ Ibu.</p>
            </div>
            <div>
            <button className="bg-BiruSecondary1 rounded-xl px-8 py-4 text-sm text-white font-bold mb-5 mt-5 flex items-center">
                Unduh Product Knowledge Disini 
            </button>
            </div>
            </div>
            <div>
            <div className="mt-10">
            <p className="text-justify text-md font-bold">Serta untuk mengetahui prosedur PPDB secara keseluruhan silahkan unduh dibawah ini</p>
            </div>
            <div>
            <button className="bg-BiruSecondary1 rounded-xl px-8 py-4 text-sm text-white font-bold mb-5 mt-5 flex items-center">
            Undur Prosedur Pendaftaran Disini 
            </button>
            </div>
            </div>
        </div>
        <div className="border-t border-biruprimary m-w-auto "></div>
        <div>
            <div className="mt-10 ">
             <p className="text-justify text-md font-bold">Silahkan unduh atau cetak sebagai bukti pendaftaran dengan menekan tombol bawah ini : </p>
            </div>
            <div className=" grid lsm:grid-cols-4 lsm:gap-5 " >
            <div className="flex justify-center items-center">
            <button className="bg-BiruSecondary1 rounded-xl w-full px-8 py-4 text-sm text-white font-bold  mt-5">
            Cetak Halaman Ini !!! 
            </button>
            </div>
            <div className="flex justify-center items-center">
            <button className="bg-BiruSecondary1 rounded-xl w-full px-8 py-4 text-sm text-white font-bold mt-5">
            Jadikan PDF !!! 
            </button>
            </div>
            </div>
        </div>
        <div className="border-t border-biruprimary m-w-auto my-10"></div>
        <div> 
{/* isi pdf */}
<Surat/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default body7;
