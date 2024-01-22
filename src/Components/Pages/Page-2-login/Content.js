import React from "react";
import Input from "../../Atoms/InputCaptcha";
import Input3 from "../../Atoms/InputToken.js";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";
import Email from "../Page-2-login/InputEmail.js";
import { object, string } from "yup";
import { useFormik } from "formik";
import { axiosBaseUrl } from "../../lib/axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import isEqual from "lodash/isEqual";
import { MdNavigateNext } from "react-icons/md";

export default function Content() {
  const loginSchema = object({
    email: string().email().required("Email perlu diisi!"),
    password: string().required("Isi token sesuai yang sudah diberikan"),
  });

  const dataLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
      try {
        if (
          dataLogin.dirty ||
          Object.values(values).some((value) => value !== "")
        ) {
          const loginResponse = await axiosBaseUrl.post("/users/login", {
            email: values.email,
            password: values.password,
          });
          console.log("Response API :", loginResponse);
        } else {
          console.error("Form is not valid");
        }
      } catch (error) {
        alert("Respon API Gagal", error);
      }
    },
  });

  const handleFormInput = (event) => {
    const { name, type, checked, value } = event.target;
    dataLogin.setFieldValue(name, type === "checkbox" ? checked : value);
  };
  let history = useHistory();

  function handleClick() {
    if (
      dataLogin.isValid &&
      !isEqual(dataLogin.values, dataLogin.initialValues)
    ) {
      history.push("/langkah1");
    } else {
      console.error("Form is not valid");
    }
  }
  return (
    <div className="bg-biruprimary px-[2rem] items-center">
      <form>
        <Email
          name="email"
          value={dataLogin.values.email}
          onChange={handleFormInput}
          type="email"
        />
        <div className="text-white text-xl font-bold pt-7">Token</div>
        <Input3
          placeholder="Masukkan token sesuai yang diterima ketika registrasi akun"
          value={dataLogin.values.password}
          onChange={handleFormInput}
          type="password"
          name="password"
        />
        <div
          style={{ color: "#27B6C1" }}
          className="pt-6 font-bold text-xl mb-1"
        >
          Isi CAPTCHA Sebelum Ke Fase Selanjutnya
        </div>
        <img src={Captcha} alt="logo" className="h-30 mb-2 mt-8" />
        <Input />
        <div className="flex items-center justify-center bg-biruprimary mt-0">
          <button
            className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center"
            type="submit"
            value="submit"
            onClick={handleClick}
          >
            Masuk <MdNavigateNext className="ml-2" size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
