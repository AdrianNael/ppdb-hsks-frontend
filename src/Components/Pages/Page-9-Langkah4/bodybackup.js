import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import RegionSelector from "../../Atoms/RegionSelector";
import Input from "../../Atoms/InputLangkah";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import { Link } from "react-router-dom";


const body9 = () => {

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
          <p>Langkah 3</p>
          <p>Formulir Peserta Didik Sekolah Kak Seto Tambah Data</p>
        </div>
          <h6 className="mt-4">Data Peserta Didik</h6>
          <div>
            <form>
              <label className="block mt-2 mb-1">NIK :</label>
              <input
                className="border-2 rounded-md border-black w-full p-2 font-normal"
                placeholder="Masukin Sesuai KTP"
              ></input>
              <label className="block mt-4 mb-1">Nama :</label>
              <input
                className="border-2 rounded-md border-black w-full p-2 font-normal"
                placeholder="Masukan Ketik"
              ></input>
              <label className="block mt-4 mb-1">Nama Panggilan :</label>
              <input
                className="border-2 rounded-md border-black w-full p-2 font-normal"
                placeholder="Panggilan Sehari-hari"
              ></input>
              <div>
                <label className="block mt-4 mb-1">Jenis Kelamin :</label>
                <select className=" border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white" value="laki">
                    Laki - Laki
                  </option>
                  <option
                    className="bg-biruprimary text-white"
                    value="perempuan"
                  >
                    Perempuan
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">Tempat Lahir :</label>
                <input
                  className="border-2 rounded-md border-black w-full p-2 font-normal"
                  placeholder="Nama Kota"
                ></input>
                <label className="block mt-4 mb-1">Tanggal Lahir :</label>
                <input
                  className="border-2 rounded-md border-black w-full p-2 font-normal"
                  type="Date"
                  placeholder="16 karakter"
                ></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Agama :</label>
                <select className=" border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white" value="islam">
                    Islam
                  </option>
                  <option className="bg-biruprimary text-white" value="kristen">
                    Kristen
                  </option>
                  <option className="bg-biruprimary text-white" value="katolik">
                    Katolik
                  </option>
                  <option className="bg-biruprimary text-white" value="buddha">
                    Buddha
                  </option>
                  <option className="bg-biruprimary text-white" value="hindu">
                    Hindu
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">Kewarganegaraan :</label>
                <select className=" border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white" value="wni">
                    WNI
                  </option>
                  <option className="bg-biruprimary text-white" value="asing">
                    Asing
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">Anak Ke :</label>
                <input
                  placeholder="0"
                  className="w-1/3 border-2 rounded-md border-black px-2 font-normal"
                ></input>
                <span className="mx-4">Dari</span>
                <input
                  placeholder="0"
                  className="w-1/3 border-2 rounded-md border-black px-2 font-normal"
                ></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Status Anak :</label>
                <select className="border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white">
                    Anak Kandung
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Asuh
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Tiri
                  </option>
                </select>
              </div>
              <div>
              <label className="block mt-4 mb-1">Bahasa Sehari - hari :</label>
                <input
                  className="border-2 rounded-md border-black w-full p-2 font-normal"
                  placeholder="Bahasa yang digunakan sehari-hari"
                ></input>
              </div>
              <div>
                <RegionSelector />
              </div>
              <div>
                <label className="block mt-4 mb-1">Provinsi :</label>
                <select className="border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white">
                    Anak Kandung
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Asuh
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Tiri
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">Kota :</label>
                <select className="border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white">
                    Anak Kandung
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Asuh
                  </option>
                  <option className="bg-biruprimary text-white">
                    Anak Tiri
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">Kecamatan :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Alamat :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Kode Pos :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Tempat Tinggal :</label>
                <select className="border-2 rounded-md border-black w-full">
                  <option className="bg-biruprimary text-white">Asrama</option>
                  <option className="bg-biruprimary text-white">
                    Bersama Ayah
                  </option>
                  <option className="bg-biruprimary text-white">
                    Bersama Ibu
                  </option>
                  <option className="bg-biruprimary text-white">
                    Bersama Kedua Orangtua
                  </option>
                  <option className="bg-biruprimary text-white">
                    Bersama Wali
                  </option>
                  <option className="bg-biruprimary text-white">Kost</option>
                  <option className="bg-biruprimary text-white">Lainnya</option>
                  <option className="bg-biruprimary text-white">
                    Panti Asuhan
                  </option>
                  <option className="bg-biruprimary text-white">
                    Pesantren
                  </option>
                </select>
              </div>
              <div>
                <label className="block mt-4 mb-1">No. Telepon :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">No. Handphone :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">No. Whatsapp :</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <label className="block mt-4 mb-1">Email:</label>
                <input className="border-2 rounded-md border-black w-full p-2 font-normal"></input>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-4 mb-1">
                  Riwayat Kesehatan
                </h1>
                <div>
                  <label className="block mt-4 mb-1">Gol. Darah :</label>
                  <select className="border-2 rounded-md border-black w-full">
                    <option className="bg-biruprimary text-white">A</option>
                    <option className="bg-biruprimary text-white">AB</option>
                    <option className="bg-biruprimary text-white">B</option>
                    <option className="bg-biruprimary text-white">O</option>
                  </select>
                </div>
                <div>
                  <Input label="Tinggi :" />
                </div>
                <div>
                  <Input label="Berat :" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-4 mb-1">Riwayat Sekolah</h1>
                <div>
                  <label className="block mt-4 mb-1">Asal Jenjang :</label>
                  <select className="border-2 rounded-md border-black w-full">
                    <option className="bg-biruprimary text-white">
                      Tidak Sekolah
                    </option>
                    <option className="bg-biruprimary text-white">Paud</option>
                    <option className="bg-biruprimary text-white">TK</option>
                    <option className="bg-biruprimary text-white">SD</option>
                  </select>
                </div>
                <div>
                  <Input label="Tinggi :" />
                </div>
                <div>
                  <label className="block mt-4 mb-1">Asal Tingkat :</label>
                  <select className="border-2 rounded-md border-black w-full">
                    <option className="bg-biruprimary text-white">1</option>
                    <option className="bg-biruprimary text-white">2</option>
                    <option className="bg-biruprimary text-white">3</option>
                    <option className="bg-biruprimary text-white">4</option>
                    <option className="bg-biruprimary text-white">5</option>
                  </select>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-4 mb-1">
                  Jenjang Terakhir
                </h1>
                <div>
                  <label className="block mt-4 mb-1">
                    Jenjang sebelumnya :
                  </label>
                  <select className="border-2 rounded-md border-black w-full">
                    <option className="bg-biruprimary text-white">
                      Tidak Sekolah
                    </option>
                    <option className="bg-biruprimary text-white">Paud</option>
                    <option className="bg-biruprimary text-white">TK</option>
                    <option className="bg-biruprimary text-white">SD</option>
                  </select>
                </div>
                <div>
                  <Input label="Hanya nama sekolah :" />
                </div>
              </div>
              <div>
                <h3 className="mt-4 mb-1">
                  Penerima KPS (Kartu Perlindungan Sosial)
                </h3>
                <input
                  type="checkbox"
                  className="border-2 border-black"
                ></input>
                <Input label="Nomor KPS" />
              </div>
              <div className="mt-4 mb-1">
                <h3>Layak PIP (Program Indonesia Pintar)</h3>
                <input
                  type="checkbox"
                  className="border-2 border-black"
                ></input>
              </div>
              <div className="mt-4 mb-1">
                <h3>Layak KIP (Kartu Indonesia Pintar)</h3>
                <input
                  type="checkbox"
                  className="border-2 border-black"
                ></input>
                <Input label="Nomor KIP" />
              </div>
              <div className="grid grid-cols-2 mt-4 mb-1">
                <div>
                  <h3>Almarhum Ayah</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  ></input>
                </div>
                <div>
                  <h3>Almarhum Ibu</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  ></input>
                </div>
              </div>
              <div>
                <h3 className="mt-5">Apakah peserta didik memiliki wali ?</h3>
                <input
                  type="checkbox"
                  className="border-2 border-black"
                ></input>
              </div>
            </form>
          </div>
          <Link to="/langkah5">
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
  );
};

export default body9;
