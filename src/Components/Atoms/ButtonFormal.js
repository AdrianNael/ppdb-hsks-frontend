import React, { useState } from "react";
import { useDataFormal } from "../../features/useDataFormal";
import { useDataSekolah } from "../../features/useDataSekolah"; // Replace with the correct path

const ButtonFormal = ({ label }) => {
  const { isLoading: isLoadingFormal, data: dataFormal } = useDataFormal();
  const { isLoading: isLoadingSekolah, data: dataSekolah, fetchDataSekolah } = useDataSekolah();

  const [selectedJenisPendidikan, setSelectedJenisPendidikan] = useState("FORMAL");

  const handleButtonClick = (jenisPendidikan) => {
    // Your existing code to handle button styles
  
    const cardElementNonformal = document.getElementById("filterButtonNonformal");
    const cardElementFormal = document.getElementById("filterButtonFormal");
    const cardElementInformal = document.getElementById("filterButtonInformal");
  
    if (cardElementNonformal && cardElementFormal && cardElementInformal) {
      cardElementNonformal.classList.remove("mark-green");
      cardElementFormal.classList.remove("mark-green");
      cardElementInformal.classList.remove("mark-green");
  
      if (jenisPendidikan === "NONFORMAL") {
        cardElementNonformal.classList.add("mark-green");
      } else if (jenisPendidikan === "FORMAL") {
        cardElementFormal.classList.add("mark-green");
      } else if (jenisPendidikan === "INFORMAL") {
        cardElementInformal.classList.add("mark-green");
      }
    }
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
          <div key={formal.jenis_pendidikan} className="button-category flex  justify-center gap-4 mb-3 mt-5">
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
    </>
  );
};

export default ButtonFormal;
