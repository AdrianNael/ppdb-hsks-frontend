import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import RegionSelector from "../../Atoms/RegionSelector";
import Input from "../../Atoms/InputLangkah";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useState } from "react";

function Body() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const errorMessages = [];

    if (!dataParent.values.alasan) {
      errorMessages.push("Kolom Alasan belum diisi.");
    }

    if (!dataParent.values.gambarananak) {
      errorMessages.push("Kolom Gambaran Anak belum diisi.");
    }

    if (!dataParent.hambatananak) {
      errorMessages.push("Kolom Hambatan Anak belum diisi.");
    }

    if (!dataParent.pengalamananak) {
      errorMessages.push("Kolom Pengalaman Anak belum diisi.");
    }

    if (!dataParent.hubungansaudara) {
      errorMessages.push("Kolom Hubungan Saudara belum diisi.");
    }

    if (!dataParent.peraturananak) {
      errorMessages.push("Kolom Peraturan Anak belum diisi.");
    }

    if (!dataParent.peranortu) {
      errorMessages.push("Kolom Peran Ortu belum diisi.");
    }

    if (!dataParent.responanak) {
      errorMessages.push("Kolom Respon Anak belum diisi.");
    }

    if (!dataParent.harapanortu_tutor) {
      errorMessages.push("Kolom Harapan Ortu terhadap Tutor belum diisi.");
    }

    if (!dataParent.harapanortu_pendidikan) {
      errorMessages.push("Kolom Harapan Ortu terhadap Pendidikan belum diisi.");
    }
    if (errorMessages.length > 0) {
      const errorMessage = errorMessages.join("\n");
      alert(`Kolom-kolom berikut perlu diisi:\n\n${errorMessage}`);
      return;
    }
  };

  const parentSchema = object({
    alasan: string().required("Kolom ini perlu diisi!"),
    gambarananak: string().required("Kolom ini perlu diisi!"),
    hambatananak: string().required("Kolom ini perlu diisi!"),
    pengalamananak: string().required("Kolom ini perlu diisi!"),
    hubungansaudara: string().required("Kolom ini perlu diisi!"),
    peraturananak: string().required("Kolom ini perlu diisi!"),
    peranortu: string().required("Kolom ini perlu diisi!"),
    responanak: string().required("Kolom ini perlu diisi!"),
    harapanortu_tutor: string().required("Kolom ini perlu diisi!"),
    harapanortu_pendidikan: string().required("Kolom ini perlu diisi!"),
    psikologianak1: string().required("Kolom ini perlu diisi!"),
    psikologianak2: string().required("Kolom ini perlu diisi!"),
    psikologianak3: string().required("Kolom ini perlu diisi!"),
    psikologianak4: string().required("Kolom ini perlu diisi!"),
    psikologianak5: string().required("Kolom ini perlu diisi!"),
    psikologianak6: string().required("Kolom ini perlu diisi!"),
    psikologianak7: string().required("Kolom ini perlu diisi!"),
    psikologianak8: string().required("Kolom ini perlu diisi!"),
  });

  const dataParent = useFormik({
    initialValues: {
      alasan: "",
      gambarananak: "",
      hambatananak: "",
      pengalamananak: "",
      hubungansaudara: "",
      peraturananak: "",
      peranortu: "",
      responanak: "",
      harapanortu_tutor: "",
      harapanortu_pendidikan: "",
      psikologianak1: false,
      psikologianak2: false,
      psikologianak3: false,
      psikologianak4: false,
      psikologianak5: false,
      psikologianak6: false,
      psikologianak7: false,
      psikologianak8: false,
    },
    validationSchema: parentSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>

        <div className="text-biruprimary font-bold mx-10 mt-4 mb-10">
          <BreadCrumbs />
          <div className="text-2xl font-bold mb-5">
            <p>Langkah 5</p>
            <p>Formulir Data Orangtua Sekolah Kak Seto Tambah Data</p>
          </div>
          <h6 className="mt-4 text-lg">
            Mohon diisi pada kolom yang tersedia:
          </h6>
          <div>
            <form onSubmit={dataParent.handleSubmit}>
              <div>
                <label className="block mt-2 mb-1">
                  1. Apa alasan Bapak/Ibu memilih atau memindahkan anak Anda ke
                  Sekolah Kak Seto?
                </label>
                <textarea
                  name="alasan"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.alasan}
                />
                {dataParent.touched.alasan && dataParent.errors.alasan && (
                  <div className="text-red-600">{dataParent.errors.alasan}</div>
                )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  2. Bagaimana Bapak/Ibu menggambarkan perilaku/karakteristik
                  anak Anda pada saat di rumah atau saat melakukan kegiatan
                  sehari-hari?
                </label>
                <textarea
                  name="gambarananak"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.gambarananak}
                />
                {dataParent.touched.gambarananak &&
                  dataParent.errors.gambarananak && (
                    <div className="text-red-600">
                      {dataParent.errors.gambarananak}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  3. Apa hambatan/permasalahan yang pernah dialami oleh anak
                  (baik secara sosial maupun akademik)?
                </label>
                <textarea
                  name="hambatananak"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.hambatananak}
                />
                {dataParent.touched.hambatananak &&
                  dataParent.errors.hambatananak && (
                    <div className="text-red-600">
                      {dataParent.errors.hambatananak}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  4. Bagaimana hubungan anak anda dengan keluarga?
                </label>
                <label className="block mt-2 mb-1">
                  Ceritakan sebuah pengalaman dimana anak Anda berinteraksi
                  dengan saudaranya!
                </label>
                <textarea
                  name="hubungansaudara"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.hubungansaudara}
                />
                {dataParent.touched.hubungansaudara &&
                  dataParent.errors.hubungansaudara && (
                    <div className="text-red-600">
                      {dataParent.errors.hubungansaudara}
                    </div>
                  )}
                <label className="block mt-2 mb-1">
                  Bagaimana hubungan anak anda dengan saudara-saudaranya?
                </label>
                <textarea
                  name="peraturananak"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.peraturananak}
                />
                {dataParent.touched.peraturananak &&
                  dataParent.errors.peraturananak && (
                    <div className="text-red-600">
                      {dataParent.errors.peraturananak}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  5. Bagaimana pola asuh yang Anda terapkan?
                </label>
                <label className="block mt-2 mb-1">
                  Ceritakan sebuah pengalaman dimana anak Anda dihadapkan pada
                  sebuah aturan yang mengikat!
                </label>
                <textarea
                  name="peranortu"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.peranortu}
                />
                {dataParent.touched.peranortu &&
                  dataParent.errors.peranortu && (
                    <div className="text-red-600">
                      {dataParent.errors.peranortu}
                    </div>
                  )}
                <label className="block mt-2 mb-1">
                  Apa yang saat itu Anda lakukan?
                </label>
                <textarea
                  name="responanak"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.responanak}
                />
                {dataParent.touched.responanak &&
                  dataParent.errors.responanak && (
                    <div className="text-red-600">
                      {dataParent.errors.responanak}
                    </div>
                  )}
                <label className="block mt-2 mb-1">
                  Bagaimana respon dari anak Anda?
                </label>
                <textarea
                  name="harapanortu_tutor"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.harapanortu_tutor}
                />
                {dataParent.touched.harapanortu_tutor &&
                  dataParent.errors.harapanortu_tutor && (
                    <div className="text-red-600">
                      {dataParent.errors.harapanortu_tutor}
                    </div>
                  )}
              </div>
              {/* Continue with the rest of your form */}
              <div>
                <label className="block mt-2 mb-1">
                  6. Bagaimana harapan Bapak/Ibu inginkan dari peran seorang
                  tutor?
                </label>
                <textarea
                  name="harapanortu_pendidikan"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.harapanortu_pendidikan}
                />
                {dataParent.touched.harapanortu_pendidikan &&
                  dataParent.errors.harapanortu_pendidikan && (
                    <div className="text-red-600">
                      {dataParent.errors.harapanortu_pendidikan}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  7. Bagaimana harapan Bapak/Ibu terhadap anak selama menempuh
                  pendidikan di Sekolah Kak Seto?
                </label>
                <textarea
                  name="harapanortu_pendidikan"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataParent.handleChange}
                  onBlur={dataParent.handleBlur}
                  value={dataParent.values.harapanortu_pendidikan}
                />
                {dataParent.touched.harapanortu_pendidikan &&
                  dataParent.errors.harapanortu_pendidikan && (
                    <div className="text-red-600">
                      {dataParent.errors.harapanortu_pendidikan}
                    </div>
                  )}
              </div>
              {/* Repeat similar code blocks for other form fields */}
              <div>
                <h6 className="mt-4 text-lg">Psikologis Anak</h6>
                <div className="mt-4 mb-1">
                  <label className="flex items-center">
                    <h3 className="mr-2">
                      8. Apakah anak Anda pernah mengikuti pemeriksaan
                      psikologis?
                    </h3>
                    <input
                      type="checkbox"
                      className="border-2 border-black"
                      name="psikologianak1"
                      onChange={dataParent.handleChange}
                      onBlur={dataParent.handleBlur}
                      checked={dataParent.values.psikologianak1}
                    />
                  </label>
                </div>
                {/* Repeat similar code blocks for other checkboxes */}
              </div>
              {/* Continue with the rest of your form */}
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  9. Apakah anak Anda pernah mengalami masalah psikologis?
                  (Contoh: kecemasan, spektrum autisme, dll)
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="masalahPsikologis"
                    checked={dataParent.masalahPsikologis}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  10. Apakah anak Anda (pernah) mempunyai masalah terkait
                  atensi/kemampuan konsentrasi/tidak bisa duduk tenang?
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="masalahKonsentrasi"
                    checked={dataParent.masalahKonsentrasi}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  11. Apakah anak Anda memiliki masalah dalam perkembangan?
                  (Contoh: masalah tumbuh kembang anak)
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="masalahPerkembangan"
                    checked={dataParent.masalahPerkembangan}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  12. Apakah anak Anda pernah/memiliki masalah kesehatan fisik?
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="masalahKesehatanFisik"
                    checked={dataParent.masalahKesehatanFisik}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  13. Apakah anak Anda memiliki keterbatasan fisik? (Contoh:
                  penglihatan, pendengaran, dll)
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="keterbatasanFisik"
                    checked={dataParent.keterbatasanFisik}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  14. Apakah anak Anda menggunakan alat bantu indra? (Contoh:
                  kacamata, alat bantu dengar, dll)
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="alatBantuIndra"
                    checked={dataParent.alatBantuIndra}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  15. Jika anak Anda dalam masa pengobatan, mohon isi kolom
                  berikut ini:
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="masaPengobatan"
                    checked={dataParent.masaPengobatan}
                    onChange={dataParent.handleChange}
                  />
                  Ya
                </label>
              </div>

              <div>
                <button
                  type="button" // Change the button type to "button"
                  className="bg-[#27b6c1] text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={handleButtonClick}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
