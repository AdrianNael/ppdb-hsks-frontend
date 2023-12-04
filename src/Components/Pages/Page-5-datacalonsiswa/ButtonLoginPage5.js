import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductKnowledge() {
  const [experience, setExperience] = useState("");

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-biruprimary text-white">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10">
        <Link to="/login" className="bg-Hijau rounded-xl px-8 py-4 text-md text-white font-bold mb-5 mt-5 flex items-center" onClick={scrollToTop}>
          Login Dengan Token
        </Link>
        <Link to="/" className="bg-Kuning rounded-xl px-8 py-4 text-md text-white font-bold mb-5 mt-5 flex items-center" onClick={scrollToTop}>
          Klik untuk isi data PPDB baru
        </Link>
      </div>
      <div className="border-t-2 border-biruprimary mt-20"></div>
    </div>
  );
}

export default ProductKnowledge;
