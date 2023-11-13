import React, {  useState } from "react";
import {axiosBaseUrl} from "../lib/axios";
import { useDataSekolah } from "../../features/useDataSekolah";

import hsksdepok from "../../Assets/Images/page-1/Sekolahdepo.svg";
import akreditasA from "../../Assets/Images/page-1/akreditasi.svg";

const CardBiru = () => {
  const { isLoading, data : dataSekolah} = useDataSekolah ();

  const [selected, setSelected] = useState(false);

  const handleTerpilih = async () => {
    // Lakukan aksi yang ingin Anda lakukan saat tombol "Pilih" diklik.
    // Misalnya, mengirim data ke API.
    try {
      const response = await axiosBaseUrl.post("https://example.com/api/choose", { data: "data yang ingin dikirim" });

      // Tambahkan logika lain sesuai dengan respons dari API jika diperlukan.
      console.log(response.data);

      // Set state atau lakukan aksi lain sesuai kebutuhan.
      
      setSelected(true);
    } catch (error) {
      // Tangani kesalahan jika permintaan gagal.
      console.error(error);
    }
  };
  return (
    <>
      {isLoading && (
        <div role="status">
        <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
      )}

      {!isLoading &&
        dataSekolah.data &&
        dataSekolah.data.map((sekolah) => (
          <div key={sekolah.id} className="block rounded-lg bg-biruprimary text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20p x_-2px_rgba(0,0,0,0.04)] hover:-translate-y-10 hover:scale-105 hover:transition hover:duration-300 hover:ease-linear">
          <div className="relative">
            <img className="rounded-t-lg" src={hsksdepok} alt={sekolah.nama} width="100%" />
            <div className="font-black text-stroke-blue">
              <h6 className="absolute font-bold text-xs w-3/4 text-white bottom-2 left-2 xl:text-xl">
                {sekolah.nama}
              </h6>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2">
              <h5 className="mb-2 text-sm font-medium leading-tight xl:text-base">Sekolah Formal</h5>
              <img src={akreditasA} alt="akreditasi" className="relative left-10" width="50%" />
            </div>
            <div className="font-bold text-sm mb-4 text-stroke xl:text-base">
              {sekolah.departments.map((department) => (
              <span key={department.id} className={`text-${department.department} mr-1`}>
              {department.department}
              </span>
               ))}
            </div>
            <p className="text-[11px] font-light xl:text-base">{sekolah.city}, {sekolah.country}</p>
            <h5 className="text-sm font-medium leading-tight mt-4 mb-1 text-[10px] xl:text-base">Program Tersedia :</h5>
            <div className="text-xs font-light ml-6 xl:text-base">
              <ul style={{ listStyleType: "disc" }}>
                {sekolah.programs.map((program, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: program }} />
                ))}
              </ul>
            </div>
          </div>
          <div className="fix-button flex items-end justify-center">
            <button
              type="button"
              className={`rounded px-7 py-2 text-xs font-medium border-2 border-white text-white mb-4 ${
                selected ? "bg-green-400" : "hover:bg-green-400"
              }`}
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={handleTerpilih}
            >
              {selected ? "Terpilih" : "Pilih"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default CardBiru;
