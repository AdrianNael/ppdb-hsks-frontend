import Footer from "../../Organisms/Footer";

const body7 = () => {
  return (
    <>
      <div className="text-biruprimary font-bold mx-8 mt-4 mb-24">
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
            <p className="text-justify">Silahkan melakukan wawancara terlebih dahulu dengan bagian Panitia Penerimaan Peserta Didik Baru (PPDB), Sebelum meneruskan ke tahap Selanjutnya</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default body7;
