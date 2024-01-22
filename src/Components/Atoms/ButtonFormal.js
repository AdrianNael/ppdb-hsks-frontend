import React, { useState } from "react";
import { useDataFormal } from "../../features/useDataFormal";
import { useDataSekolah } from "../../features/useDataSekolah";

const ButtonFormal = ({ label }) => {
  const { isLoading: isLoadingFormal, data: dataFormal } = useDataFormal();
  const { fetchDataSekolah, isLoading: isLoadingSekolah, data: dataSekolah } = useDataSekolah();
  const [selectedJenisPendidikan, setSelectedJenisPendidikan] = useState("");

  const handleButtonClick = (jenisPendidikan) => {
    setSelectedJenisPendidikan(jenisPendidikan);
    fetchDataSekolah(jenisPendidikan);
  };

  return (
    <>
      {isLoadingFormal && (
        <div role="status">
          {/* ... (indikator loading) */}
        </div>
      )}

      {!isLoadingFormal &&
        dataFormal.data &&
        dataFormal.data.map((formal) => (
          <div key={formal.jenis_pendidikan} className="button-category flex justify-center gap-4 mb-3 mt-5">
            <button
              onClick={() => handleButtonClick(formal.jenis_pendidikan)}
              className={`px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm ${
                formal.jenis_pendidikan === selectedJenisPendidikan ? "formal-style" : ""
              }`}
            >
              {label} {formal.jenis_pendidikan}
            </button>
          </div>
        ))}

      {isLoadingSekolah && (
        <div role="status">
          {/* ... (indikator loading untuk data sekolah) */}
        </div>
      )}

      {!isLoadingSekolah && dataSekolah && (
        <div>
          {/* Tampilkan data sekolah sesuai jenis_pendidikan */}
          {dataSekolah.map((sekolah) => (
            <div key={sekolah.id}>
              {/* Tampilkan informasi sekolah */}
              <p>{sekolah.nama_sekolah}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ButtonFormal;
