import React, { useState, useEffect } from "react";
import Axios from "axios";

function ButtonJenjang ({ selectedId,props }) {

  const [id, setId] = useState(selectedId);
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  // Fungsi untuk mengambil data dari API
  const fetchDataFromAPI = () => {
    setIsLoading(true);
    Axios.get("URL_API_ANDA") // Ganti dengan URL API yang sesuai
      .then((res) => {
        setApiData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setIsLoading(false);
      });
  };

  const handleJenjangClick = () => {
    fetchDataFromAPI();
  };

  useEffect(() => {
    // Saat selectedId berubah, perbarui state id
    setId(selectedId);
  }, [selectedId]);

  return (
    <>
      <div className="grid grid-cols-2 gap-8 xl:flex text-white">
        <button
          id="TK"
          onClick={handleJenjangClick}
          disabled={isLoading}
          className={`rounded px-4 py-2 text-lg font-medium bg-TK border-2 hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-2xl md:w-40 md:h-20`}
          data-te-triple-inti
          data-te-triple-color="light"
        >
          TK
        </button>
        <button
          id="SD"
          onClick={handleJenjangClick}
          disabled={isLoading}
          className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SD hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
          data-te-triple-inti
          data-te-triple-color="light"
        >
          SD
        </button>
        <button
          id="SMP"
          onClick={handleJenjangClick}
          disabled={isLoading}
          className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMP hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
          data-te-triple-inti
          data-te-triple-color="light"
        >
          SMP
        </button>
        <button
          id="SMA"
          onClick={handleJenjangClick}
          disabled={isLoading}
          className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMA hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
          data-te-triple-inti
          data-te-triple-color="light"
        >
          SMA
        </button>
      </div>
    </>
  );
};

export default ButtonJenjang;
