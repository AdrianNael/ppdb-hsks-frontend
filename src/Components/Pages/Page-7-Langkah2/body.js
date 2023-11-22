import Footer from "../../Organisms/Footer";
import Navbar from "../Page-6-Langkah1/Navbar3";
import Button from "../../Atoms/Button";

const body7 = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="text-biruprimary font-bold px-8 pt-4 pb-10">
          <h2>Langkah 2</h2>
          <h2>Pembayaran Formulir dan Uang Pangkal Lihat Data</h2>
          <div className="grid grid-cols-2 mt-5 font-semibold">
            <p className="mb-2">No Pendaftaran : </p>
            <span className="font-light">TBD</span>
            <p className="mb-2">Nama CPD : </p>
            <span className="font-light">TBD</span>
            <p className="mb-2">Biaya Formulir : </p>
            <span className="font-light">Belum Bayar</span>
            <p className="mb-2">Biaya Asesment : </p>
            <span className="font-light">Belum Bayar</span>
          </div>
          <div className="mt-5">
            <p className="text-justify">
              Silahkan melakukan wawancara terlebih dahulu dengan bagian Panitia
              Penerimaan Peserta Didik Baru (PPDB), Sebelum meneruskan ke tahap
              Selanjutnya
            </p>
          </div>
          <Button
            label="Submit"
            text="white"
            className="bg-[#27b6c1] w-full mt-8"
          />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
    </>
  );
};

export default body7;
