import React from 'react'
import Input from "../../Atoms/InputCaptcha";
import Input3 from "../../Atoms/InputToken.js"
import Captcha from "../../../Assets/Images/page-2/Captcha.svg";
import Email from "../Page-2/InputEmail"

export default function Content() {
  return (
    <div className="bg-biruprimary px-[2rem] items-center">
        <Email />
        <div className="text-white text-xl font-bold pt-7">Token</div>
        <Input3 />
        <div style={{ color: "#27B6C1" }} className="pt-6 font-bold text-xl mb-1">Isi CAPTCHA Sebelum Ke Fase Selanjutnya</div>
        <img src={Captcha} alt="logo" className="h-30 mb-2 mt-8" />
        <div>
            <Input />
        </div>
        <br />
        <hr />
        <br />
        <div className="flex justify-center pb-7">
            <button
            className="bg-white text-bg-biruprimary font-xl py-3 px-8 rounded-2xl w-full"
            >
            Masuk
            </button>
        </div>
    </div>
  )
}
