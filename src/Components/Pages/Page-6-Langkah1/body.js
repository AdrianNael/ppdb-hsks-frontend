import Footer from "../../Organisms/Footer";
import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import Surat from "./Surat";
import Button from "../../Atoms/Button";
import BreadCrumbs from "./BreadCrumbsCopy";
import { Link } from "react-router-dom";

const body7 = () => {

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
        <div className="text-biruprimary font-bold px-8 pt-4 pb-10">
        <BreadCrumbs />
        <div className="text-2xl font-bold">
          <p>Langkah 1</p>
          <p>Registrasi PPDB Sekolah Kak Seto Selesai</p>
        </div>
        <div className="  lsm:gap-5 mb-5">
          <div className=" ">
            <div className="mt-10">
              <p className="text-justify text-md font-bold">
                Siliahkan Mengunduh Product Knowledge dibawah ini untuk
                mempelajari program pendidikan yang akan kami berikan kepada
                Putera/ Puteri Bapak/ Ibu.
              </p>
            </div>
            <div>
              <button className="bg-BiruSecondary1 rounded-xl px-8 py-4 text-sm text-white font-bold mb-5 mt-5 flex items-center">
                Unduh Product Knowledge Disini
              </button>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <p className="text-justify text-md font-bold">
                Serta untuk mengetahui prosedur PPDB secara keseluruhan silahkan
                unduh dibawah ini
              </p>
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
            <p className="text-justify text-md font-bold">
              Silahkan unduh atau cetak sebagai bukti pendaftaran dengan menekan
              tombol bawah ini :{" "}
            </p>
          </div>
          <div className=" grid lsm:grid-cols-4 lsm:gap-5 ">
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
        <Surat/>
        <Link to="/langkah2">
            <Button
              label="Selanjutnya"
              text="white"
              className="bg-[#27b6c1] w-full mt-8"
              onClick={handleButtonClick}
            />
          </Link>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
    </>
  );;
};

export default body7;
