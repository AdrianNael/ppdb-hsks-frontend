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
import { Formik, useFormik } from "formik";
import { useMutation } from "react-query";
import { axiosBaseUrl } from "../../lib/axios";
import { useDataRegister } from "../../../features/useDataRegister";

function Body() {
  const { isLoading: isLoadingGuardian, data: dataGuardian } =
    useDataRegister();
  const onChange = () => {};

  const dataRegister = useFormik({
    initialValues: {
      email: "",
      hubungan: "",
      namaorangtua: "",
      handphone: null,
      whatsapp: null,
      namasiswa: "",
      tanggal_lahir: null,
      abk: "",
      pemeriksaan_psikolog: "",
      jenis_kelamin: "",
      jenjang: "",
      id_unit_bisnis: "",
      id_tahun_ajaran: "",
      id_tingkat: "",
      id_kelompok_siswa: "",
    },
    onSubmit: (values) => {
      // mutate();
      // const {
      //   email,
      //   hubungan,
      //   namaorangtua,
      //   handphone,
      //   whatsapp,
      //   namasiswa,
      //   tanggal_lahir,
      //   abk,
      //   pemeriksaan_psikolog,
      //   jenis_kelamin,
      //   jenjang,
      //   id_unit_bisnis,
      //   id_tahun_ajaran,
      //   id_tingkat,
      //   id_kelompok_siswa,
      // } = Formik.values;
      try {
        const registerResponse = axiosBaseUrl.post("/users/register", values);
        console.log("Respon API",registerResponse.data);
        
      } catch (error) {
        console.error(error)
      }
      // mutate({
      //   email,
      //   hubungan,
      //   namaorangtua,
      //   handphone,
      //   whatsapp,
      //   namasiswa,
      //   tanggal_lahir,
      //   abk,
      //   pemeriksaan_psikolog,
      //   jenis_kelamin,
      //   jenjang,
      //   id_unit_bisnis,
      //   id_tahun_ajaran,
      //   id_tingkat,
      //   id_kelompok_siswa,
      // });
      // Formik.setFieldValue("email", "");
      // Formik.setFieldValue("hubungan", "");
      // Formik.setFieldValue("namaorangtua", "");
      // Formik.setFieldValue("handphone", null);
      // Formik.setFieldValue("whatsapp", null);
      // Formik.setFieldValue("namasiswa", "");
      // Formik.setFieldValue("tanggal_lahir", null);
      // Formik.setFieldValue("abk", "");
      // Formik.setFieldValue("pemeriksaan_psikolog", "");
      // Formik.setFieldValue("jenis_kelamin", "");
      // Formik.setFieldValue("jenjang", "");
      // Formik.setFieldValue("id_unit_bisnis", "");
      // Formik.setFieldValue("id_tahun_ajaran", "");
      // Formik.setFieldValue("id_tingkat", "");
      // Formik.setFieldValue("id_kelompok_siswa", "");
    },
  });

  // const { mutate } = useMutation({
  //   mutationFn: async (body) => {
  //     // let postData = {
  //     //   email: Formik.values.email,
  //     //   hubungan: Formik.values.hubungan,
  //     //   namaorangtua: Formik.values.namaorangtua,
  //     //   handphone: Formik.values.handphone,
  //     //   whatsapp: Formik.values.whatsapp,
  //     //   namasiswa: Formik.values.namasiswa,
  //     //   tanggal_lahir: Formik.values.tanggal_lahir,
  //     //   abk: Formik.values.abk,
  //     //   pemeriksaan_psikolog: Formik.values.pemeriksaan_psikolog,
  //     //   jenis_kelamin: Formik.values.jenis_kelamin,
  //     //   jenjang: Formik.values.jenjang,
  //     //   id_unit_bisnis: Formik.values.id_unit_bisnis,
  //     //   id_tahun_ajaran: Formik.values.tanggal_lahir,
  //     //   id_tingkat: Formik.values.id_tingkat,
  //     //   id_kelompok_siswa: Formik.values.id_kelompok_siswa,
  //     // };
  //     // console.log(postData);
  //  const registerResponse = await axiosBaseUrl.post("/users/register", values);
  //     // axios.post('http://206.189.82.46:80/api/v1/hsks/users/register', postData)
  //     // .then(response => {
  //     //   console.log('data yang diterima:', response.data)
  //     // });
  //     // .catch(error => {
  //     //   console.error('Error', error)
  //     // })
  //     return registerResponse;
  //   },
  // });

  const handleFormInput = (event) => {
    const {name, type, checked} = event.target
    dataRegister.setFieldValue(event.target.name, event.target.value);
    if (type === 'checkbox') {
      console.log(`Checkbox ${name} is checked: ${checked}`);
    }
  };

  return (
    <>
      <Header2 />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="">
          <div className="bg-biruprimary px-8 md:px-28 items-center">
            <div className="text-white font-bold text-2xl mb-1 pt-4">
              Registrasi PPDB Sekolah Kak Seto
            </div>
            <div className="text-Emas text-sm underline pt-1">
              Sudah Registrasi ? Klik Masuk Proses PPDB
            </div>

            <form onSubmit={dataRegister.onSubmit}>
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
                <Modal />
              </div>

              <div className="-mx-8 gap-6 max-w-full">
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
                      {/* {isLoadingGuardian && (
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
                    {!isLoadingGuardian &&
                      dataGuardian.data &&
                      dataGuardian.data.map((guardian) => (
                        <div
                          key={guardian.replid}
                          className="button-category flex  justify-center gap-4 mb-3 mt-5"
                        >
                          <option
                            className="text-black"
                            value={guardian.penanggung_jawab}
                          >
                            {guardian.penanggung_jawab}
                          </option>
                        </div>
                      ))} */}
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
                    {/* <Input2
                      name="abk"
                      value={dataRegister.values.abk}
                      onChange={handleFormInput}
                    /> */}
                  </div>
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
                    {/* <Input2
                      name="abk"
                      value={dataRegister.values.abk}
                      onChange={handleFormInput}
                    /> */}
                  </div>
                  {/* <Input2
                    name="pemeriksaan_psikolog"
                    value={dataRegister.values.pemeriksaan_psikolog}
                    onChange={handleFormInput}
                  /> */}
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
                <input
                  type="submit"
                  value="SELANJUTNYA"
                  className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center"
                />
              </div>

              {/* <div className="flex justify-center pb-7">
              <Link to="/survei">
                <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center">
                  SELANJUTNYA <MdNavigateNext className="ml-2" size={20} />
                </button>
              </Link>
            </div> */}
            </form>
          </div>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <CustomerServiceButton />
      <Footer />
    </>
  );
}

export default Body;
