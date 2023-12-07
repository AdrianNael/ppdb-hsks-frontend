import React, { useEffect } from "react";
import Header2 from "../../Organisms/Header2";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";
import { Link } from "react-router-dom";
import Footer from "../../Organisms/Footer";
import { MdNavigateNext } from "react-icons/md";
import Input from "../../Atoms/InputCaptcha";
import Input2 from "../../Atoms/InputText";
import Input3 from "../../Atoms/InputNum";
import Input4 from "../../Atoms/InputDate";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";
import "../../../Styles/index.css";
import Modal from "../Page-3-form/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Field, Form, useFormik } from "formik";
import { useMutation } from "react-query";
import { axiosBaseUrl } from "../../lib/axios";
import { useDataRegister } from "../../../features/useDataRegister";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { object, string, boolean, number, date, InferType } from "yup";
import isEqual from "lodash/isEqual";

function Body() {
  const { isLoading: isLoadingGuardian, data: dataGuardian } =
    useDataRegister();
  const onChange = () => {};

  //   const RegisterSchema = Yup.object().shape({
  //     email: Yup.string()
  //       .email("Invalid email")
  //       .required("Field tidak boleh kosong"),
  //     hubungan: Yup.string().required("Field tidak boleh kosong!"),
  //     namaorangtua: Yup.string().required("Field tidak boleh kosong!"),
  //     handphone: Yup.number().required("Field tidak boleh kosong!"),
  //     whatsapp: Yup.number().required("Field tidak boleh kosong!"),
  //     tanggal_lahir: Yup.date()
  //       .typeError("Input harus berupa tanggal")
  //       .required("Field tidak boleh kosong!"),
  //     abk: Yup.boolean().oneOf([true], 'Centang jika "Ya"'),
  //     pemeriksaan_psikolog: Yup.boolean().oneOf([true], 'Centang jika "Ya"'),
  //     jenis_kelamin: Yup.string().required("Field tidak boleh kosong!"),
  //   });

  // validationSchema: Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email")
  //     .required("Field tidak boleh kosong"),
  //   hubungan: Yup.string().required("Field tidak boleh kosong!"),
  //   namaorangtua: Yup.string().required("Field tidak boleh kosong!"),
  //   handphone: Yup.number().required("Field tidak boleh kosong!"),
  //   whatsapp: Yup.number().required("Field tidak boleh kosong!"),
  //   tanggal_lahir: Yup.date()
  //     .typeError("Input harus berupa tanggal")
  //     .required("Field tidak boleh kosong!"),
  //   abk: Yup.boolean().oneOf([true], 'Centang jika "Ya"'),
  //   pemeriksaan_psikolog: Yup.boolean().oneOf([true], 'Centang jika "Ya"'),
  //   jenis_kelamin: Yup.string().required("Field tidak boleh kosong!"),
  // }),

  const RegisterSchema = object({
    email: string().email().required("Email perlu diisi!"),
    hubungan: string().required("Field ini perlu diisi!"),
    namaorangtua: string().required("Field ini perlu diisi!"),
    handphone: string().required("No.HP perlu diisi!"),
    whatsapp: string().required("No.Whatsapp perlu diisi!"),
    tanggal_lahir: date().required("Tanggal Lahir perlu diisi!"),
    abk: boolean().oneOf([true], 'Centang jika "Ya"').required(),
    pemeriksaan_psikolog: boolean()
      .oneOf([true], 'Centang jika "Ya"')
      .required(),
    jenis_kelamin: string().required("Field ini perlu diisi!"),
  });

  const dataRegister = useFormik({
    initialValues: {
      email: "",
      hubungan: "",
      namaorangtua: "",
      handphone: "",
      whatsapp: "",
      namasiswa: "",
      tanggal_lahir: null,
      abk: false,
      pemeriksaan_psikolog: false,
      jenis_kelamin: "",
      jenjang: "SMA",
      id_unit_bisnis: 1,
      id_tahun_ajaran: 104,
      id_tingkat: 3,
      id_kelompok_siswa: 27,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
      try {
        if (
          dataRegister.dirty ||
          Object.values(values).some((value) => value !== "")
        ) {
          const registerResponse = await axiosBaseUrl.post("/users/register", {
            orang_tua: {
              email: values.email,
              hubungan: values.hubungan,
              nama: values.namaorangtua,
              handphone: values.handphone,
              whatsapp: values.whatsapp,
            },
            calon_siswa: {
              nama: values.namasiswa,
              tanggal_lahir: values.tanggal_lahir,
              abk: values.abk,
              pemeriksaan_psikolog: values.pemeriksaan_psikolog,
              jenis_kelamin: values.jenis_kelamin,
              jenjang: values.jenjang,
              id_unit_bisnis: values.id_unit_bisnis,
              id_tahun_ajaran: values.id_tahun_ajaran,
              id_tingkat: values.id_tingkat,
              id_kelompok_siswa: values.id_kelompok_siswa,
            },
          });
          console.log("Response API :", registerResponse);
        } else {
          console.error("Form is not valid");
        }
      } catch (e) {
        console.log("Respons API Gagal", e);
      }
    },
  });
  const handleFormInput = (event) => {
    const { name, type, checked, value } = event.target;
    dataRegister.setFieldValue(name, type === "checkbox" ? checked : value);
  };
  let history = useHistory();

  function handleClick() {
    if (
      dataRegister.isValid &&
      !isEqual(dataRegister.values, dataRegister.initialValues)
    ) {
      history.push("/survei");
    } else {
      console.error("Form is not valid");
    }
  }
  return (
    <>
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="">
          <Header2 />
          <div className="bg-biruprimary px-5 items-center">
            <div className="mx-10">
              <div className="text-white font-bold text-3xl mb-1 pt-10">
                Registrasi PPDB Sekolah Kak Seto
              </div>
              <div className="text-Emas text-sm underline pt-1">
                Sudah Registrasi ? Klik Masuk Proses PPDB
              </div>
            </div>
            <form onSubmit={dataRegister.handleSubmit} className="mx-10">
              <div className="relative lg:w-1/2">
                <label
                  className="block text-xl text-white font-bold mb-2 pt-7"
                  htmlFor="username"
                >
                  Email
                </label>
                <Input2
                  name="email"
                  onChange={handleFormInput}
                  value={dataRegister.values.email}
                />
                {dataRegister.touched.email && dataRegister.errors.email && (
                  <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                    {dataRegister.errors.email}
                  </div>
                )}
                <Modal />
              </div>

              <div className=" gap-6 max-w-full">
                <div className="">
                  <div
                    style={{ color: "#27B6C1" }}
                    className="text-white text-xl font-bold pt-7"
                  >
                    Data Orang tua / Wali
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      Hubungan Keluarga
                    </label>
                    <select
                      id="countries"
                      name="hubungan"
                      className={`bg-transparent border border-white w-full p-2.5 rounded-lg ${
                        dataRegister.values.hubungan
                          ? "text-white font-semibold"
                          : "text-gray-400"
                      }`}
                      onChange={handleFormInput}
                      required
                    >
                      {isLoadingGuardian && (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                      <option disabled selected>
                        Pilih
                      </option>
                      {!isLoadingGuardian && dataGuardian.data
                        ? dataGuardian.data.map((guardian) => {
                            return (
                              <option
                                key={guardian.replid}
                                className="text-black"
                                value={guardian.penanggung_jawab}
                              >
                                {guardian.penanggung_jawab}
                              </option>
                            );
                          })
                        : null}
                    </select>
                    {dataRegister.touched.hubungan &&
                      dataRegister.errors.hubungan && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.hubungan}
                        </div>
                      )}
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      Nama yang sesuai KTP
                    </label>
                    <Input2
                      name="namaorangtua"
                      onChange={handleFormInput}
                      value={dataRegister.values.namaorangtua}
                    />
                    {dataRegister.touched.namaorangtua &&
                      dataRegister.errors.namaorangtua && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.namaorangtua}
                        </div>
                      )}
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      No. Handphone
                    </label>
                    <Input3
                      name="handphone"
                      onChange={handleFormInput}
                      value={dataRegister.values.handphone}
                    />
                    {dataRegister.touched.handphone &&
                      dataRegister.errors.handphone && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.handphone}
                        </div>
                      )}
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      No. Whatsapp
                    </label>
                    <Input3
                      name="whatsapp"
                      onChange={handleFormInput}
                      value={dataRegister.values.whatsapp}
                    />
                    {dataRegister.touched.whatsapp &&
                      dataRegister.errors.whatsapp && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.whatsapp}
                        </div>
                      )}
                  </div>
                </div>

                <div>
                  <div
                    style={{ color: "#27B6C1" }}
                    className="text-white text-xl font-bold pt-7"
                  >
                    Data Peserta Didik
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      Nama Peserta Didik (sesuai yang tercantum di NIK)
                    </label>
                    <Input2
                      name="namasiswa"
                      onChange={handleFormInput}
                      value={dataRegister.values.namasiswa}
                    />
                    {dataRegister.touched.namasiswa &&
                      dataRegister.errors.namasiswa && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.namasiswa}
                        </div>
                      )}
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      Jenis Kelamin
                    </label>
                    <select
                      id="gender"
                      name="jenis_kelamin"
                      className={`bg-transparent border border-white w-full p-2.5 rounded-lg ${
                        dataRegister.values.jenis_kelamin
                          ? "text-white font-semibold"
                          : "text-gray-400"
                      }`}
                      onChange={handleFormInput}
                    >
                      <option value="" disabled selected>
                        Pilih...
                      </option>
                      <option
                        className="text-black"
                        name={dataRegister.values.jenis_kelamin}
                        value="l"
                      >
                        Laki-Laki
                      </option>
                      <option className="text-black" value="p">
                        Perempuan
                      </option>
                    </select>
                    {dataRegister.touched.jenis_kelamin &&
                      dataRegister.errors.jenis_kelamin && (
                        <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                          {dataRegister.errors.jenis_kelamin}
                        </div>
                      )}
                  </div>

                  <div className="relative">
                    <label
                      className="block text-xl text-white font-bold mb-2 pt-7"
                      htmlFor="username"
                    >
                      Tanggal Lahir
                    </label>
                    <Input4
                      name="tanggal_lahir"
                      value={dataRegister.values.tanggal_lahir}
                      onChange={handleFormInput}
                    />
                  </div>
                  {dataRegister.touched.tanggal_lahir &&
                    dataRegister.errors.tanggal_lahir && (
                      <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                        {dataRegister.errors.tanggal_lahir}
                      </div>
                    )}
                </div>

                <div className="relative">
                  <label
                    className="block text-xl text-white font-bold mb-2 pt-7"
                    htmlFor="username"
                  >
                    Apakah calon peserta didik terindikasi "Anak Berkebutuhan
                    Khusus"?
                  </label>
                  <div className="border-b-2">
                    <div className="flex items-center mb-1">
                      <input
                        type="checkbox"
                        name="abk"
                        checked={dataRegister.values.abk}
                        onChange={handleFormInput}
                      ></input>
                      <span className="text-TK ml-2 font-semibold">
                        Ceklis jika "IYA"
                      </span>
                    </div>
                  </div>
                  {dataRegister.touched.abk && dataRegister.errors.abk && (
                    <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                      {dataRegister.errors.abk}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label
                    className="block text-xl text-white font-bold mb-2 pt-7"
                    htmlFor="username"
                  >
                    Apakah calon peserta didik pernah melakukan pemeriksaan
                    psikologis dari psikolog atau psikiater?
                  </label>
                  <div className="border-b-2">
                    <div className="flex items-center mb-1">
                      <input
                        type="checkbox"
                        name="pemeriksaan_psikolog"
                        checked={dataRegister.values.pemeriksaan_psikolog}
                        onChange={handleFormInput}
                      ></input>
                      <span className="text-TK ml-2 font-semibold">
                        Ceklis jika "IYA"
                      </span>
                    </div>
                  </div>
                  {dataRegister.touched.pemeriksaan_psikolog &&
                    dataRegister.errors.pemeriksaan_psikolog && (
                      <div className="text-red-500 bg-white p-4 mt-1 rounded-lg w-48">
                        {dataRegister.errors.pemeriksaan_psikolog}
                      </div>
                    )}
                </div>
              </div>

              <div
                style={{ color: "#27B6C1" }}
                className="pt-6 font-bold text-xl mb-1"
              >
                Isi CAPTCHA Sebelum Ke Fase Selanjutnya
              </div>

              <ReCAPTCHA
                sitekey="6LdAh2woAAAAAAmHY6SNwxUxv7u9rgnZ9ewJO_54"
                onChange={onChange}
              />

              <br />
              <hr />
              <br />
              <div className="flex justify-center pb-7">
                <button
                  type="SUBMIT"
                  value="SUBMIT"
                  className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center"
                  onClick={handleClick}
                >
                  DAFTAR SEKARANG
                </button>
              </div>
            </form>
          </div>
          <CustomerServiceButton />
          <Footer />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
    </>
  );
}

export default Body;