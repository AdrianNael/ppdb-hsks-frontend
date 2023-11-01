import React, { useState, useEffect } from "react";

const ButtonJenjang = ({ selectedId, setJenjang }) => {
  const [id, setId] = useState(selectedId);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFromAPI = () => {
    setIsLoading(true);
    get(variabel unitsekolah)

    // Gantilah URL di bawah dengan URL API yang sesuai
    fetch(`https://example.com/api/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setId(data.id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
        setIsLoading(false);
      });
  };

  const handleJenjangClick = () => {
    fetchDataFromAPI();
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

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
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SD hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SD
      </button>
      <button
        id="SMP"
        onClick={handleJenjangClick}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMP hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SMP
      </button>
      <button
        id="SMA"
        onClick={handleJenjangClick}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMA hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SMA
      </button>
      {isLoading ? <p>Sedang memuat...</p> : <p>ID dari API: {id}</p>}
      </div>
    </>
  );
};

export default ButtonJenjang;
