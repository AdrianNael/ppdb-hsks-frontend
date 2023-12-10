import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import RegionSelector from "../../Atoms/RegionSelector";
import Input from "../../Atoms/InputLangkah";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import React, { useState } from "react";



const body10 = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    // Show the modal
    setIsModalOpen(true);

    // You can perform other save-related actions here if needed
  };

  const handleModalClose = () => {
    // Close the modal
    setIsModalOpen(false);
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
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">Suku Bangsa :</label>
                    <input
                        placeholder="Masukkan 1-100 karakter"
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-14 font-normal">Anak Ke :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-auto border-2 rounded-sm border-black px-2 lg:mr-2"
                    ></input>
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-5 font-normal">Dari :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-auto border-2 rounded-sm border-black px-2"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-14 font-normal">Merupakan Pekawinan Ke :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">Perkawinan Pertama Pada Usia :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 ml-5 font-normal">Tahun</label>
                </div>
                <h6 className="mt-2 text-md">Data Ibu :</h6>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">Suku Bangsa :</label>
                    <input
                        placeholder="Masukkan 1-100 karakter"
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-14 font-normal">Anak Ke :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-auto border-2 rounded-sm border-black px-2 lg:mr-2"
                    ></input>
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-5 font-normal">Dari :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-auto border-2 rounded-sm border-black px-2"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-14 font-normal">Merupakan Pekawinan Ke :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                </div>
                <div class="lg:flex lg:items-center mb-4">
                    <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">Perkawinan Pertama Pada Usia :</label>
                    <input
                        placeholder=""
                        class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                    ></input>
                    <label class="w-full lg:w-auto mb-2 lg:mb-0 ml-5 font-normal">Tahun</label>
                </div>
                <div>
                  <label className="block mt-2 mb-1">10. Riwayat Prenetal dan Kelahiran</label>
                  <label className="flex items-center">
                      <h3 className="mr-5">Adopsi :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>   
                  <label className="block mt-2 mb-1">Tolong berikan faktor-faktor yang anda kira berkontribusi pada perkembangannya sekarang</label>              
                  <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-28"></textarea>
                  <label className="block mt-2 mb-1">Kesehatan ibu selama kehamilan (sakit, kecelakaan, mengkonsumsi obat, dll)</label>              
                  <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-28"></textarea>
                  <label className="flex items-center">
                      <h3 className="mr-5">Apakah proses kelahiran Caesar ? :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>
                    <label className="flex items-center">
                      <h3 className="mr-5">Apakah kaki keluar terlebih dahulu ? :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>
                    <label className="flex items-center">
                      <h3 className="mr-5">Adakah kondisi yang tidak biasa yang mungkin mempengaruhi kehamilan atau saat proses kelahiran terjadi ? :</h3>
                      <input
                        type="checkbox"
                        className="border-2 border-black"
                      />
                    </label>
                    <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-28"></textarea>
                    <div>
                    <label className="block mt-2 mb-1">11. Riwayat Perkembangan</label>
                    <label className="block  mb-1">Pada usia berapa anak anda memenuhi tahap perkembangan di bawah ini ?</label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Mengangkat Kepala : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Berguling : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Duduk Sendiri : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Merangkak : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Merambat disetiap furniture : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Berjalan Sendiri : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Minum dari gelas terbuka : </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div> 
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Makan makanan padat :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Makan dengan sendok :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Mengikat tali sepatu :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Berhasil toilet-training (buang air kecil dan besar di kamar mandi) :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Menggunakan satu kata (contoh: gak, mama) :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Menggabungkan Kata (contohnya : sepatu papa ) :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Menamai objek sederhana : ( contoh : mobil ) :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>  
                    <div className="font-normal mt-3">
                      <label className="flex items-center">
                        <h3 className="mr-5">Bertanya (contoh : mama dimana ?) :  </h3>
                        <input
                          type="textarea"
                          className="border-2 border-black"
                        />
                        <h3 className="ml-5 ">Tahun </h3>
                      </label>
                    </div>
                    <div>
                <label className="block mt-2 mb-1">12. Riwayat Sensoris</label>
                <label className="block  ">Apakah ada hal-hal yang berbeda pada anak Anda dibandingkan dengan anak pada umumnya, dalam hal sensoris, sebagai</label>
                <label className="block ">contoh: kesal jika keadaan berantakan atau kotor? (contohnya: kotoran, lem, finger painting, dll), terus-menerus </label>
                <label className="block "> ingin lompat-lompat/ menjatuhkan/ menabrakkan dirinya, kesal jika mendengarkan suara keras, sulit membedakan</label>
                <label className="block mb-5 "> bentuk, ukuran dari suatu objek, terlalu takut saat bermain dengan alat-alat playground?</label>

                <textarea placeholder="Masukkan 2-500 Karakter" className="w-full h-16"></textarea>
              </div>
              </div>
          </form>
          <button
            type="button"
            className="bg-[#27b6c1] text-white px-4 py-2 mt-4 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleButtonClick}
          >
            Simpan
          </button>
        </div>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <p>Tulisan di dalam modal</p>
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 bg-gray-300 px-3 py-1 rounded-md"
                onClick={handleModalClose}
              >
                Exit
              </button>
              <button
                className="bg-[#27b6c1] text-white px-3 py-1 rounded-md"
                onClick={handleModalClose}
              >
                Kembali ke Langkah 1
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default body10;
