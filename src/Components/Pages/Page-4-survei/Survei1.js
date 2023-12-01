import React from "react";
import { useFormik } from "formik";
import { useDataSurveiVoting } from "../../../features/useDataSurveiVoting";
import axios from 'axios';

function Survei1() {
  const { data: dataSurveiVoting } = useDataSurveiVoting();

  const formik = useFormik({
    initialValues: {
      experience: "",
    },
    onSubmit: async (values) => {
      try {
        // Kirim data ke API menggunakan Axios
        const votingResponse = await axios.post('http://206.189.82.46:80/api/v1/hsks/surveys', values);

        console.log('Respon API:', votingResponse.data);
      } catch (error) {
        console.error('Gagal mengirim formulir ke API:', error);
      }
    },
  });

  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="mx-10">
        <h4 className="font-bold text-3xl mt-10 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-3xl"> Sekolah Kak Seto</h4>
        <h6 className="font-bold text-lg mt-5 ">
          Kami mohon kesediaan Bapak/Ibu untuk mengisi survei berikut,
        </h6>
      </div>
      <form onSubmit={formik.handleSubmit} className="mx-10 mt-10 text-sm">
        <h2 className="text-xl font-semibold mb-5">
          Bagaimana Pengalaman Bapak/Ibu dalam pengisian registrasi Online
          Sekolah Kak Seto?
        </h2>
        <div className="space-y-5 text-lg">
          {dataSurveiVoting.map((option, index) => (
            <div className="flex items-center" key={index}>
              <input
                type="radio"
                id={option.toLowerCase()}
                value={option}
                checked={formik.values.experience === option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="experience"
                className="mr-2"
              />
              <label htmlFor={option.toLowerCase()}>{option}</label>
            </div>
          ))}
        </div>
        <p className="mt-4">Anda memilih: {formik.values.experience}</p>
        <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
          Kirim
        </button>
      </form>
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei1;
