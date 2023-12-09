import * as Yup from "yup";
import Navbar from "../Page-6-Langkah1/Navbar3";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function Body11() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const errorMessages = [];

    const requiredFields = [
      "namaDokter",
      "namaPsikiater",
      "namaterapis1",
      "namaterapis2",
      "namaterapis3",
      "diagnosis",
      "keluhan",
      "sukubangsaayah",
      "anakkeayah",
      "anakdariayah",
      "kawinayah",
      "umurkawinayah",
      "sukubangsaibu",
      "anakkeibu",
      "anakdariibu",
      "kawinibu",
      "umurkawinibu",
      "faktoradopsi",
      "kesehatanhamil",
      "kondisilahirdesc",
      "angkatkaki",
      "berguling",
      "duduk",
      "merangkak",
      "merambat",
      "berjalan",
      "minumumur",
      "makan",
      "makansendok",
      "talisepatuumur",
      "toilettraining",
      "satukata",
      "gabungkata",
      "menamaiobjek",
      "bertanya",
      "sensoris",
    ];
    requiredFields.forEach((field) => {
      if (!dataAssessment.values[field]) {
        errorMessages.push(`Kolom ${field} belum diisi.`);
      }
    });

    if (errorMessages.length > 0) {
      const errorMessage = errorMessages.join("\n");
      alert(`Kolom-kolom berikut perlu diisi:\n\n${errorMessage}`);
      return;
    }
  };
  const validationSchema = Yup.object().shape({
    namaDokter: Yup.string().required("Kolom ini perlu diisi!"),
    namaPsikiater: Yup.string().required("Kolom ini perlu diisi!"),
    namaterapis1: Yup.string().required("Kolom ini perlu diisi!"),
    namaterapis2: Yup.string().required("Kolom ini perlu diisi!"),
    namaterapis3: Yup.string().required("Kolom ini perlu diisi!"),
    diagnosis: Yup.string().required("Kolom ini perlu diisi!"),
    keluhan: Yup.string().required("Kolom ini perlu diisi!"),
    pakaibaju: Yup.boolean(),
    toilet: Yup.boolean(),
    sikatgigi: Yup.boolean(),
    cucitangan: Yup.boolean(),
    makansendiri: Yup.boolean(),
    resleting: Yup.boolean(),
    minum: Yup.boolean(),
    sepatu: Yup.boolean(),
    kaoskaki: Yup.boolean(),
    talisepatu: Yup.boolean(),
    sukubangsaayah: Yup.string().required("Kolom ini harus diisi!"),
    anakkeayah: Yup.number().integer().required("Kolom ini harus di isi!"),
    anakdariayah: Yup.number().integer().required("Kolom ini harus diisi!"),
    kawinayah: Yup.number().integer().required("Kolom ini harus diisi!"),
    umurkawinayah: Yup.number().integer().required("Kolom ini harus diisi!"),
    sukubangsaibu: Yup.string().required("Kolom ini harus diisi!"),
    anakkeibu: Yup.number().integer().required("Kolom ini harus diisi!"),
    anakdariibu: Yup.number().integer().required("Kolom ini harus diisi!"),
    kawinibu: Yup.number().integer().required("Kolom ini harus diisi!"),
    umurkawinibu: Yup.number().integer().required("Kolom ini harus diisi!"),
    adopsi: Yup.boolean(),
    faktoradopsi: Yup.string().required("Kolom ini harus diisi!"),
    kesehatanhamil: Yup.string().required("Kolom ini harus diisi!"),
    caesar: Yup.boolean(),
    hamilkaki: Yup.boolean(),
    kondisilahir: Yup.boolean(),
    kondisilahirdesc: Yup.string().required("Kolom ini harus diisi!"),
    angkatkaki: Yup.number().integer().required("Kolom ini harus diisi!"),
    berguling: Yup.number().integer().required("Kolom ini harus diisi!"),
    duduk: Yup.number().integer().required("Kolom ini harus diisi!"),
    merangkak: Yup.number().integer().required("Kolom ini harus diisi!"),
    merambat: Yup.number().integer().required("Kolom ini harus diisi!"),
    berjalan: Yup.number().integer().required("Kolom ini harus diisi!"),
    minumumur: Yup.number().integer().required("Kolom ini harus diisi!"),
    makan: Yup.number().integer().required("Kolom ini harus diisi!"),
    makansendok: Yup.number().integer().required("Kolom ini harus diisi!"),
    talisepatuumur: Yup.number().integer().required("Kolom ini harus diisi!"),
    toilettraining: Yup.number().integer().required("Kolom ini harus diisi!"),
    satukata: Yup.number().integer().required("Kolom ini harus diisi!"),
    gabungkata: Yup.number().integer().required("Kolom ini harus diisi!"),
    menamaiobjek: Yup.number().integer().required("Kolom ini harus diisi!"),
    bertanya: Yup.number().integer().required("Kolom ini harus diisi!"),
    sensoris: Yup.string().required("Kolom ini harus diisi!"),
  });

  // Create a dataAssessment instance
  const dataAssessment = useFormik({
    initialValues: {
      namaDokter: "",
      namaPsikiater: "",
      namaterapis1: "",
      namaterapis2: "",
      namaterapis3: "",
      diagnosis: "",
      keluhan: "",
      pakaibaju: false,
      toilet: false,
      sikatgigi: false,
      cucitangan: false,
      makansendiri: false,
      resleting: false,
      minum: false,
      sepatu: false,
      kaoskaki: false,
      talisepatu: false,
      sukubangsaayah: "",
      anakkeayah: 0,
      anakdariayah: 0,
      kawinayah: 0,
      umurkawinayah: 0,
      sukubangsaibu: "",
      anakkeibu: 0,
      anakdariibu: 0,
      kawinibu: 0,
      umurkawinibu: 0,
      adopsi: false,
      faktoradopsi: "",
      kesehatanhamil: "",
      caesar: false,
      hamilkaki: true,
      kondisilahir: false,
      kondisilahirdesc: "",
      angkatkaki: 0,
      berguling: 0,
      duduk: 0,
      merangkak: 0,
      merambat: 0,
      berjalan: 0,
      minumumur: 0,
      makan: 0,
      makansendok: 0,
      talisepatuumur: 0,
      toilettraining: 0,
      satukata: 0,
      gabungkata: 0,
      menamaiobjek: 0,
      bertanya: 0,
      sensoris: "",
    },
    validationSchema,
    onSubmit: (values) => {
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
            <p>Langkah 6</p>
            <p>Formulir Asesmen Sekolah Kak Seto Tambah Data</p>
          </div>
          <h6 className="mt-4 text-lg">Data Pemeriksaan</h6>
          <h6 className=" text-md">Telah mengalami pemeriksaan dari :</h6>
          <div>
            <form onSubmit={dataAssessment.handleSubmit}>
              <div>
                <label className="block mt-2 mb-1">1. Nama Dokter</label>
                <textarea
                  name="namaDokter"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.namaDokter}
                ></textarea>
                {dataAssessment.touched.namaDokter &&
                  dataAssessment.errors.namaDokter && (
                    <div className="text-red-500">
                      {dataAssessment.errors.namaDokter}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  2. Nama Psikiater/Psikolog
                </label>
                <textarea
                  name="namaPsikiater"
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.namaPsikiater}
                ></textarea>
                {dataAssessment.touched.namaPsikiater &&
                  dataAssessment.errors.namaPsikiater && (
                    <div className="text-red-500">
                      {dataAssessment.errors.namaPsikiater}
                    </div>
                  )}
              </div>
              {/* Repeat this pattern for other form fields */}
              <div>
                <label className="block mt-2 mb-1">3. Nama Terapis 1</label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  name="namaterapis1"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.namaterapis1}
                ></textarea>
                {dataAssessment.touched.namaterapis1 &&
                  dataAssessment.errors.namaterapis1 && (
                    <div className="text-red-500">
                      {dataAssessment.errors.namaterapis1}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">4. Nama Terapis 2</label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  name="namaterapis2"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.namaterapis2}
                ></textarea>
                {dataAssessment.touched.namaterapis2 &&
                  dataAssessment.errors.namaterapis2 && (
                    <div className="text-red-500">
                      {dataAssessment.errors.namaterapis2}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">5. Nama Terapis 3</label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  name="namaterapis3"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.namaterapis3}
                ></textarea>
                {dataAssessment.touched.namaterapis3 &&
                  dataAssessment.errors.namaterapis3 && (
                    <div className="text-red-500">
                      {dataAssessment.errors.namaterapis3}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">6. Diagnosis</label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  name="diagnosis"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.diagnosis}
                ></textarea>
                {dataAssessment.touched.diagnosis &&
                  dataAssessment.errors.diagnosis && (
                    <div className="text-red-500">
                      {dataAssessment.errors.diagnosis}
                    </div>
                  )}
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  7. Kendala Yang Dihadapi Anak
                </label>
                <label className="block mt-2 mb-1">
                  Deskripsi keluhan yang dihadapi anak saat ini (gambaran
                  perilaku, waktu kemunculan, intensitas, dan siatuasi munculnya
                  perilaku).
                </label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-16"
                  name="keluhan"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.keluhan}
                ></textarea>
                {dataAssessment.touched.keluhan &&
                  dataAssessment.errors.keluhan && (
                    <div className="text-red-500">
                      {dataAssessment.errors.keluhan}
                    </div>
                  )}
              </div>
              <h6 className="mt-4 text-lg">8. Kegiatan Sehari-hari</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-5 text-sm">
                <label className="flex items-center">
                  <h3 className="mr-5">Memakai Baju :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-5">Membuka Baju :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Memakai Toilet :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Minum Dari Gelas :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Sikat Gigi :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Memakai Sepatu : </h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Memakai Kaos Kaki : </h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Cuci Tangan : </h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Memakai Kaos Kaki : </h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
                <label className="flex items-center">
                  <h3 className="mr-2">Buka Tutup Resleting :</h3>
                  <input type="checkbox" className="border-2 border-black" />
                </label>
              </div>
              <h6 className="mt-4 text-lg">9. Data Tambahan Orangtua/Wali</h6>
              <h6 className="mt-2 text-md">Data Ayah :</h6>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Suku Bangsa :
                </label>
                <input
                  placeholder="Masukkan 1-100 karakter"
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="sukubangsaayah"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.sukubangsaayah}
                ></input>
                {dataAssessment.touched.sukubangsaayah &&
                  dataAssessment.errors.sukubangsaayah && (
                    <div className="ml-1 text-red-500">
                      {dataAssessment.errors.sukubangsaayah}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-14 font-normal">
                  Anak Ke :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-auto border-2 rounded-sm border-black px-2 lg:mr-2"
                  name="anakkeayah"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.anakkeayah}
                ></input>
                {dataAssessment.touched.anakkeayah &&
                  dataAssessment.errors.anakkeayah && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.anakkeayah}
                    </div>
                  )}
                <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Dari :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-auto border-2 rounded-sm border-black px-2"
                  name="anakdariayah"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.anakdariayah}
                ></input>
                {dataAssessment.touched.anakdariayah &&
                  dataAssessment.errors.anakdariayah && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.anakdariayah}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-14 font-normal">
                  Merupakan Pekawinan Ke :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="kawinayah"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.kawinayah}
                ></input>
                {dataAssessment.touched.kawinayah &&
                  dataAssessment.errors.kawinayah && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.kawinayah}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Perkawinan Pertama Pada Usia :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="umurkawinayah"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.umurkawinayah}
                ></input>
                {dataAssessment.touched.umurkawinayah &&
                  dataAssessment.errors.umurkawinayah && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.umurkawinayah}
                    </div>
                  )}
                <label class="w-full lg:w-auto mb-2 lg:mb-0 ml-5 font-normal">
                  Tahun
                </label>
              </div>
              <h6 className="mt-2 text-md">Data Ibu :</h6>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Suku Bangsa :
                </label>
                <input
                  placeholder="Masukkan 1-100 karakter"
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="sukubangsaibu"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.sukubangsaibu}
                ></input>
                {dataAssessment.touched.sukubangsaibu &&
                  dataAssessment.errors.sukubangsaibu && (
                    <div className="ml-1 text-red-500">
                      {dataAssessment.errors.sukubangsaibu}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-14 font-normal">
                  Anak Ke :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-auto border-2 rounded-sm border-black px-2 lg:mr-2"
                  name="anakkeibu"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.anakkeibu}
                ></input>
                {dataAssessment.touched.anakkeibu &&
                  dataAssessment.errors.anakkeibu && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.anakkeibu}
                    </div>
                  )}
                <label class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Dari :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-auto border-2 rounded-sm border-black px-2"
                  name="anakdariibu"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.anakdariibu}
                ></input>
                {dataAssessment.touched.anakdariibu &&
                  dataAssessment.errors.anakdariibu && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.anakdariibu}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-14 font-normal">
                  Merupakan Pekawinan Ke :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="kawinibu"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.kawinibu}
                ></input>
                {dataAssessment.touched.kawinibu &&
                  dataAssessment.errors.kawinibu && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.kawinibu}
                    </div>
                  )}
              </div>
              <div class="lg:flex lg:items-center mb-4">
                <label class="w-full lg:w-1/3 mb-2 lg:mb-0 lg:mr-5 font-normal">
                  Perkawinan Pertama Pada Usia :
                </label>
                <input
                  placeholder=""
                  class="w-full lg:w-1/3 border-2 rounded-sm border-black px-2 font-normal"
                  name="umurkawinibu"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.umurkawinibu}
                ></input>
                {dataAssessment.touched.umurkawinibu &&
                  dataAssessment.errors.umurkawinibu && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.umurkawinibu}
                    </div>
                  )}
                <label class="w-full lg:w-auto mb-2 lg:mb-0 ml-5 font-normal">
                  Tahun
                </label>
              </div>
              <div>
                <label className="block mt-2 mb-1">
                  10. Riwayat Prenetal dan Kelahiran
                </label>
                <label className="flex items-center">
                  <h3 className="mr-5">Adopsi :</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="adopsi"
                    onChange={dataAssessment.handleChange}
                    onBlur={dataAssessment.handleBlur}
                    value={dataAssessment.values.adopsi}
                  />
                  {dataAssessment.touched.adposi &&
                    dataAssessment.errors.adposi && (
                      <div className="mx-1 text-red-500">
                        {dataAssessment.errors.adposi}
                      </div>
                    )}
                </label>
                <label className="block mt-2 mb-1">
                  Tolong berikan faktor-faktor yang anda kira berkontribusi pada
                  perkembangannya sekarang
                </label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-28"
                  name="faktoradopsi"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.faktoradopsi}
                ></textarea>
                {dataAssessment.touched.faktoradopsi &&
                  dataAssessment.errors.faktoradopsi && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.faktoradopsi}
                    </div>
                  )}
                <label className="block mt-2 mb-1">
                  Kesehatan ibu selama kehamilan (sakit, kecelakaan,
                  mengkonsumsi obat, dll)
                </label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-28"
                  name="kesehatanhamil"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.kesehatanhamil}
                ></textarea>
                {dataAssessment.touched.kesehatanhamil &&
                  dataAssessment.errors.kesehatanhamil && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.kesehatanhamil}
                    </div>
                  )}
                <label className="flex items-center">
                  <h3 className="mr-5">Apakah proses kelahiran Caesar ? :</h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="caesar"
                    onChange={dataAssessment.handleChange}
                    onBlur={dataAssessment.handleBlur}
                    value={dataAssessment.values.caesar}
                  />
                  {dataAssessment.touched.caesar &&
                    dataAssessment.errors.caesar && (
                      <div className="mx-1 text-red-500">
                        {dataAssessment.errors.caesar}
                      </div>
                    )}
                </label>
                <label className="flex items-center">
                  <h3 className="mr-5">
                    Apakah kaki keluar terlebih dahulu ? :
                  </h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="hamilkaki"
                    onChange={dataAssessment.handleChange}
                    onBlur={dataAssessment.handleBlur}
                    value={dataAssessment.values.hamilkaki}
                  />
                  {dataAssessment.touched.hamilkaki &&
                    dataAssessment.errors.hamilkaki && (
                      <div className="mx-1 text-red-500">
                        {dataAssessment.errors.hamilkaki}
                      </div>
                    )}
                </label>
                <label className="flex items-center">
                  <h3 className="mr-5">
                    Adakah kondisi yang tidak biasa yang mungkin mempengaruhi
                    kehamilan atau saat proses kelahiran terjadi ? :
                  </h3>
                  <input
                    type="checkbox"
                    className="border-2 border-black"
                    name="kondisilahir"
                    onChange={dataAssessment.handleChange}
                    onBlur={dataAssessment.handleBlur}
                    value={dataAssessment.values.kondisilahir}
                  />
                  {dataAssessment.touched.kondisilahir &&
                    dataAssessment.errors.kondisilahir && (
                      <div className="mx-1 text-red-500">
                        {dataAssessment.errors.kondisilahir}
                      </div>
                    )}
                </label>
                <textarea
                  placeholder="Masukkan 2-500 Karakter"
                  className="w-full h-28"
                  name="kondisilahirdesc"
                  onChange={dataAssessment.handleChange}
                  onBlur={dataAssessment.handleBlur}
                  value={dataAssessment.values.kondisilahirdesc}
                ></textarea>
                {dataAssessment.touched.kondisilahirdesc &&
                  dataAssessment.errors.kondisilahirdesc && (
                    <div className="mx-1 text-red-500">
                      {dataAssessment.errors.kondisilahirdesc}
                    </div>
                  )}
                <div>
                  <label className="block mt-2 mb-1">
                    11. Riwayat Perkembangan
                  </label>
                  <label className="block  mb-1">
                    Pada usia berapa anak anda memenuhi tahap perkembangan di
                    bawah ini ?
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Mengangkat Kaki :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="angkatkaki"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.angkatkaki}
                    />
                    {dataAssessment.touched.angkatkaki &&
                      dataAssessment.errors.angkatkaki && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.angkatkaki}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Berguling :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="berguling"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.berguling}
                    />
                    {dataAssessment.touched.berguling &&
                      dataAssessment.errors.berguling && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.berguling}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Duduk Sendiri :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="duduk"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.duduk}
                    />
                    {dataAssessment.touched.duduk &&
                      dataAssessment.errors.duduk && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.duduk}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Merangkak :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="merangkak"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.merangkak}
                    />
                    {dataAssessment.touched.merangkak &&
                      dataAssessment.errors.merangkak && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.merangkak}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Merambat disetiap furniture :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="merambat"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.merambat}
                    />
                    {dataAssessment.touched.merambat &&
                      dataAssessment.errors.merambat && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.merambat}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Berjalan Sendiri :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="berjalan"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.berjalan}
                    />
                    {dataAssessment.touched.berjalan &&
                      dataAssessment.errors.berjalan && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.berjalan}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Minum dari gelas terbuka :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="minumumur"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.minumumur}
                    />
                    {dataAssessment.touched.minumumur &&
                      dataAssessment.errors.minumumur && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.minumumur}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Makan makanan padat :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="makan"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.makan}
                    />
                    {dataAssessment.touched.makan &&
                      dataAssessment.errors.makan && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.makan}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Makan dengan sendok :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="makansendok"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.makansendok}
                    />
                    {dataAssessment.touched.makansendok &&
                      dataAssessment.errors.makansendok && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.makansendok}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">Mengikat tali sepatu :</h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="talisepatuumur"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.talisepatuumur}
                    />
                    {dataAssessment.touched.talisepatuumur &&
                      dataAssessment.errors.talisepatuumur && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.talisepatuumur}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">
                      Berhasil toilet-training (buang air kecil dan besar di
                      kamar mandi) :{" "}
                    </h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="toilettraining"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.toilettraining}
                    />
                    {dataAssessment.touched.toilettraining &&
                      dataAssessment.errors.toilettraining && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.toilettraining}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">
                      Menggunakan satu kata (contoh: gak, mama) :{" "}
                    </h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="satukata"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.satukata}
                    />
                    {dataAssessment.touched.satukata &&
                      dataAssessment.errors.satukata && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.satukata}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">
                      Menggabungkan Kata (contohnya : sepatu papa ) :{" "}
                    </h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="gabungkata"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.gabungkata}
                    />
                    {dataAssessment.touched.gabungkata &&
                      dataAssessment.errors.gabungkata && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.gabungkata}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">
                      Menamai objek sederhana : ( contoh : mobil ) :{" "}
                    </h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="menamaiobjek"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.menamaiobjek}
                    />
                    {dataAssessment.touched.menamaiobjek &&
                      dataAssessment.errors.menamaiobjek && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.menamaiobjek}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div className="font-normal mt-3">
                  <label className="flex items-center">
                    <h3 className="mr-5">
                      Bertanya (contoh : mama dimana ?) :{" "}
                    </h3>
                    <input
                      type="textarea"
                      className="border-2 border-black"
                      name="bertanya"
                      onChange={dataAssessment.handleChange}
                      onBlur={dataAssessment.handleBlur}
                      value={dataAssessment.values.bertanya}
                    />
                    {dataAssessment.touched.bertanya &&
                      dataAssessment.errors.bertanya && (
                        <div className="mx-1 text-red-500">
                          {dataAssessment.errors.bertanya}
                        </div>
                      )}
                    <h3 className="ml-5 ">Tahun </h3>
                  </label>
                </div>
                <div>
                  <label className="block mt-2 mb-1">
                    12. Riwayat Sensoris
                  </label>
                  <label className="block  ">
                    Apakah ada hal-hal yang berbeda pada anak Anda dibandingkan
                    dengan anak pada umumnya, dalam hal sensoris, sebagai
                  </label>
                  <label className="block ">
                    contoh: kesal jika keadaan berantakan atau kotor?
                    (contohnya: kotoran, lem, finger painting, dll),
                    terus-menerus{" "}
                  </label>
                  <label className="block ">
                    {" "}
                    ingin lompat-lompat/ menjatuhkan/ menabrakkan dirinya, kesal
                    jika mendengarkan suara keras, sulit membedakan
                  </label>
                  <label className="block mb-5 ">
                    {" "}
                    bentuk, ukuran dari suatu objek, terlalu takut saat bermain
                    dengan alat-alat playground?
                  </label>
                  <textarea
                    placeholder="Masukkan 2-500 Karakter"
                    className="w-full h-16"
                    name="sensoris"
                    onChange={dataAssessment.handleChange}
                    onBlur={dataAssessment.handleBlur}
                    value={dataAssessment.values.sensoris}
                  ></textarea>
                  {dataAssessment.touched.sensoris &&
                    dataAssessment.errors.sensoris && (
                      <div className="mx-1 text-red-500">
                        {dataAssessment.errors.sensoris}
                      </div>
                    )}
                </div>
              </div>

              <div>
                {" "}
                <button
                  type="button" // Change the button type to "button"
                  className="bg-[#27b6c1] text-white px-4 py-2 mt-4 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={handleButtonClick}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
    </>
  );
}

export default Body11;
