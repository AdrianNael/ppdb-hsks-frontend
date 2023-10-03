import React, { useState,useEffect,setOptions} from "react";
import Header2 from "../../Organisms/Header2";
import { Link } from "react-router-dom";
import Footer from "../../Organisms/Footer";
import { MdNavigateNext } from "react-icons/md";
import Input from "../../Atoms/InputCaptcha";
import Input2 from "../../Atoms/InputText";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";
import "../../../Styles/index.css";
import Modal from "../Page-3/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Body() {
  const onChange = () => {};
  const [formData, setFormData] = useState({
    email: "",
    hubungan_keluarga: "",
    nama_ktp: "",
    no_handphone: "",
    no_whatsapp: "",
    nama_peserta_didik: "",
    jenis_kelamin: "",
    jurusan: "",
    tanggal_lahir: "",
    anak_berkebutuhan_khusus: false,
    pemeriksaan_psikologis: false,
    tanggalLahir: null,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, 
    });
  };
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      tanggalLahir: date, // Simpan tanggal yang dipilih dalam state
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Kirim data formData ke API menggunakan axios atau fetch
      const response = await axios.post("URL_API_ANDA", formData);
      console.log(response.data); // Respon dari server
      // Tampilkan pesan sukses atau arahkan pengguna ke halaman lain jika perlu
    } catch (error) {
      console.error(error); // Tangani kesalahan jika terjadi
    }
  };
  useEffect(() => {
    // Lakukan permintaan ke API untuk mendapatkan daftar opsi
    axios.get("URL_API_ANDA")
      .then((response) => {
        // Simpan data yang diterima dari API dalam state
        setOptions(response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data dari API", error);
      });
  }, []);
  
  return (
    <div>
      <Header2 />
      <div className="bg-biruprimary px-[2rem] items-center">
        <div className="text-white font-bold text-2xl mb-1">Registrasi PPDB Sekolah Kak Seto</div>
        <div className="text-Emas text-sm underline pt-1">Sudah Registrasi ? Klik Masuk Proses PPDB</div>

        <div className="relative lg:w-1/2">
          <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
            Email
          </label>
          <Input2 name="email" value={formData.email} onChange={handleInputChange}/>
          <Modal />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-cols-max gap-6 max-w-full">
          <div className="">
            <div style={{ color: "#27B6C1" }} className="text-white text-xl font-bold pt-7">
              Data Orang tua / Wali
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                Hubungan Keluarga
              </label>
              <select id="hubunganKeluarga" name="hubunganKeluarga" value={formData.hubunganKeluarga} onChange={handleInputChange} className=" bg-transparent border border-white w-full bg-transparent w-full p-2.5 rounded-lg text-gray-400">
              {options.map((option) => (
               <option key={option.id} value={option.value}>
               {option.label}
                </option>
                // array yang berisi objek-objek yang memiliki properti id, value, dan label. Anda dapat menyesuaikan properti yang sesuai dengan struktur data dari API Anda.//
               ))}
              </select>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                Nama yang sesuai KTP
              </label>
              <Input2 name="nama_ktp"value={formData.nama_ktp} onChange={handleInputChange}/>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                No. Handphone
              </label>
              <Input2 name="no_handphone"value={formData.no_handphone} onChange={handleInputChange}/>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                No. Whatsapp
              </label>
              <Input2 name="no_whatsapp" value={formData.no_whatsapp} onChange={handleInputChange}/>
            </div>
          </div>

          <div>
            <div style={{ color: "#27B6C1" }} className="text-white text-xl font-bold pt-7">
              Data Peserta Didik
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                Nama Peserta Didik (sesuai yang tercantum di NIK)
              </label>
              <Input2 nmae="nama_peserta_didik" value={formData.nama_peserta_didik} onChange={handleInputChange} />
            </div>

            <div className="relative">
             <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="jenisKelamin">
                  Jenis Kelamin
            </label>
              <select
                id="jenisKelamin"
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className="bg-transparent border border-white w-full p-2.5 rounded-lg text-gray-400"
              >
                <option value="">Pilih...</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                Jurusan
              </label>
              <select
                id="jurusan"
                name="jurusan"
                value={formData.jurusan}
                onChange={handleInputChange}
                className="bg-transparent border border-white w-full p-2.5 rounded-lg text-gray-400"
              >
                <option value="">Pilih...</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
                Tanggal Lahir
              </label>
              <Input2 />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
              Apakah calon peserta didik terindikasi "Anak Berkebutuhan Khusus"?
            </label>
           <DatePicker
            id="tanggalLahir"
            name="tanggalLahir"
            selected={formData.tanggalLahir} // Nilai yang dipilih
            onChange={handleDateChange} // Event handler saat tanggal berubah
            dateFormat="dd/MM/yyyy" // Format tampilan tanggal
            className="bg-transparent border border-white w-full p-2.5 rounded-lg text-gray-400"
          />
           </div>
          <div className="relative">
            <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">
              Apakah calon peserta didik pernah melakukan pemeriksaan psikologis dari psikolog atau psikiater?
            </label>

            <Input2 />
          </div>
        </div>

        <div style={{ color: "#27B6C1" }} className="pt-6 font-bold text-xl mb-1">
          Isi CAPTCHA Sebelum Ke Fase Selanjutnya
        </div>

        <ReCAPTCHA sitekey="6LdAh2woAAAAAAmHY6SNwxUxv7u9rgnZ9ewJO_54" onChange={onChange} />

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
      <Footer />
    </div>
  );
}

export default Body;
