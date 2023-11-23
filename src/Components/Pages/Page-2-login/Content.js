import React from "react";
import Input from "../../Atoms/InputCaptcha";
import Input3 from "../../Atoms/InputToken.js";
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";
import Email from "../Page-2-login/InputEmail.js";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="bg-biruprimary px-[2rem] items-center">
      <form>
        <Email />
        <div className="text-white text-xl font-bold pt-7">Token</div>
        <Input3 />
        <div
          style={{ color: "#27B6C1" }}
          className="pt-6 font-bold text-xl mb-1"
        >
          Isi CAPTCHA Sebelum Ke Fase Selanjutnya
        </div>
        <img src={Captcha} alt="logo" className="h-30 mb-2 mt-8" />
        <div>
          <Input />
        </div>
        <br />
        <hr /> 
        <br />
        <div className="flex items-center justify-center mt-4">
        <Link to="/langkah1">
          <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center">
            Masuk <MdNavigateNext className="ml-2" size={20} />
          </button>
        </Link>
      </div>
      </form>
    </div>
  );
}
