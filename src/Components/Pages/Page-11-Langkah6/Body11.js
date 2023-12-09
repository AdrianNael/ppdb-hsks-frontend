import * as Yup from "yup";
import Navbar from "../Page-6-Langkah1/Navbar3";
import Footer from "../../Organisms/Footer";
import Button from "../../Atoms/Button";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function Body11() {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    namaDokter: Yup.string().required("Kolom ini perlu diisi!"),
    namaPsikiater: Yup.string().required("Kolom ini perlu diisi!"),
    // Add validation for other fields here
  });

  // Create a dataAssessment instance
  const dataAssessment = useFormik({
    initialValues: {
      namaDokter: "",
      namaPsikiater: "",
      // Initialize other fields here
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Rest of your code */}
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
            ></textarea>
          </div>
          <div>
            <label className="block mt-2 mb-1">4. Nama Terapis 2</label>
            <textarea
              placeholder="Masukkan 2-500 Karakter"
              className="w-full h-16"
            ></textarea>
          </div>
          <div>
            <label className="block mt-2 mb-1">5. Nama Terapis 3</label>
            <textarea
              placeholder="Masukkan 2-500 Karakter"
              className="w-full h-16"
            ></textarea>
          </div>
          <div>
            <label className="block mt-2 mb-1">6. Diagnosis</label>
            <textarea
              placeholder="Masukkan 2-500 Karakter"
              className="w-full h-16"
            ></textarea>
          </div>
          <div>
            <label className="block mt-2 mb-1">
              7. Kendala Yang Dihadapi Anak
            </label>
            <label className="block mt-2 mb-1">
              Deskripsi keluhan yang dihadapi anak saat ini (gambaran perilaku,
              waktu kemunculan, intensitas, dan siatuasi munculnya perilaku).
            </label>
            <textarea
              placeholder="Masukkan 2-500 Karakter"
              className="w-full h-16"
            ></textarea>
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
          <Link to="/langkah6">
            <Button
              type="submit"
              label="Simpan"
              text="white"
              className="bg-[#27b6c1] w-full mt-8"
            />
          </Link>
        </form>
        {/* Rest of your code */}
      </div>
      <Footer />
    </>
  );
}

export default Body11;
