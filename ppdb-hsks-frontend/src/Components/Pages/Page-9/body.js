const body9 = () => {

  return (
    <>
      <div className="text-biruprimary font-bold mx-8 mt-4 mb-24">
        <h2 className="mb-3">Langkah 4</h2>
        <h2>Formulir Peserta Didik Sekolah Kak Seto</h2>
        <h2 className="mt-4">Tambah Data</h2>
        <div className="mt-5">
          <form>
            <label className="block mt-4 mb-1">NIK :</label>
            <input
              className="border-2 rounded-md border-black w-full px-2 font-normal"
              placeholder="16 karakter"
            ></input>
            <label className="block mt-4 mb-1">Nama :</label>
            <input
              className="border-2 rounded-md border-black w-full px-2 font-normal"
              placeholder="16 karakter"
            ></input>
            <label className="block mt-4 mb-1">Nama Panggilan :</label>
            <input
              className="border-2 rounded-md border-black w-full px-2 font-normal"
              placeholder="16 karakter"
            ></input>
            <div>
              <label className="block mt-4 mb-1">Jenis Kelamin :</label>
              <select className=" border-2 rounded-md border-black w-full">
                <option className="bg-biruprimary text-white" value="laki">Laki - Laki</option>
                <option className="bg-biruprimary text-white" value="perempuan">Perempuan</option>
              </select>
            </div>
            <label className="block mt-4 mb-1">Tempat Lahir :</label>
            <input
              className="border-2 rounded-md border-black w-full px-2 font-normal"
              placeholder="16 karakter"
            ></input>
            <label className="block mt-4 mb-1">Tanggal Lahir :</label>
            <input
              className="border-2 rounded-md border-black w-full px-2 font-normal"
              type="Date"
              placeholder="16 karakter"
            ></input>
            <div>
              <label className="block mt-4 mb-1">Agama :</label>
              <select className=" border-2 rounded-md border-black w-full">
                <option className="bg-biruprimary text-white" value="islam">Islam</option>
                <option className="bg-biruprimary text-white" value="kristen">Kristen</option>
                <option className="bg-biruprimary text-white" value="katolik">Katolik</option>
                <option className="bg-biruprimary text-white" value="buddha">Buddha</option>
                <option className="bg-biruprimary text-white" value="hindu">Hindu</option>
              </select>
            </div>
            <div>
              <label className="block mt-4 mb-1">Kewarganegaraan :</label>
              <select className=" border-2 rounded-md border-black w-full">
                <option className="bg-biruprimary text-white" value="wni">WNI</option>
                <option className="bg-biruprimary text-white" value="asing">Asing</option>
              </select>
            </div>
            <div>
              <label className="block mt-4 mb-1">Anak Ke :</label>
                <input placeholder="0" className="w-1/3 border-2 rounded-md border-black px-2 font-normal"></input><span className="mx-4">Dari</span><input placeholder="0" className="w-1/3 border-2 rounded-md border-black px-2 font-normal"></input>
            </div>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-justify">
            Silahkan melakukan wawancara terlebih dahulu dengan bagian Panitia
            Penerimaan Peserta Didik Baru (PPDB), Sebelum meneruskan ke tahap
            Selanjutnya
          </p>
        </div>
      </div>
    </>
  );
};

export default body9;
