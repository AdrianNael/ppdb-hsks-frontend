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
          <p>Langkah  5</p>
          <p>Formulir Data Orangtua Sekolah Kak Seto Tambah Data</p>
        </div>
          <h6 className="mt-4 text-lg">Mohon diisi pada kolom yang tersedia:</h6>
          <div>
            <form>
              <div>
                <label className="block mt-2 mb-1">1. Apa alasan Bapak/Ibu memilih atau memindahkan anak Anda ke Sekolah Kak Seto?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">2. Bagaimana Bapak/Ibu menggambarkan perilaku/karakteristik anak Anda pada saat di rumah atau saat melakukan kegiatan sehari-hari?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">3. Apa hambatan/permasalahan yang pernah dialami oleh anak (baik secara sosial maupun akademik)?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
              <label className="block mt-2 mb-1">4. Bagaimana hubungan anak anda dengan keluarga?</label>
                <label className="block mt-2 mb-1">Ceritakan sebuah pengalaman dimana anak Anda berinteraksi dengan saudaranya!</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
                <label className="block mt-2 mb-1">Bagaimana hubungan anak anda dengan saudara-saudaranya?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
              <label className="block mt-2 mb-1">5. Bagaimana pola asuh yang Anda terapkan?</label>
                <label className="block mt-2 mb-1">Ceritakan sebuah pengalaman dimana anak Anda dihadapkan pada sebuah aturan yang mengikat!</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
                <label className="block mt-2 mb-1">Apa yang saat itu Anda lakukan?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
                <label className="block mt-2 mb-1">Bagaimana respon dari anak Anda?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">6. Bagaimana harapan Bapak/Ibu inginkan dari peran seorang tutor?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
                <label className="block mt-2 mb-1">7. Bagaimana harapan Bapak/Ibu terhadap anak selama menempuh pendidikan di Sekolah Kak Seto?</label>
                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              <div>
              <h6 className="mt-4 text-lg">Psikologis Anak</h6>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">8. Apakah anak Anda pernah mengikuti pemeriksaan psikologis?</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">9. Apakah anak Anda pernah mengalami masalah psikologis? (Contoh: kecemasan, spektrum autisme, dll)</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">10. Apakah anak Anda (pernah) mempunyai masalah terkait atensi/kemampuan konsentrasi/tidak bisa duduk tenang?</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">11. Apakah anak Anda memiliki masalah dalam perkembangan? (Contoh: masalah tumbuh kembang anak)</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">12. Apakah anak Anda pernah/memiliki masalah kesehatan fisik?</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">13. Apakah anak Anda memiliki keterbatasan fisik? (Contoh: penglihatan, pendengaran, dll)</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">14. Apakah anak Anda menggunakan alat bantu indra? (Contoh: kacamata, alat bantu dengar, dll)</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
              <div className="mt-4 mb-1">
                <label className="flex items-center">
                  <h3 className="mr-2">15. Jika anak Anda dalam masa pengobatan, mohon isi kolom berikut ini:</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                  />
                </label>
              </div>
            </div>
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
