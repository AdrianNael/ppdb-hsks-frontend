import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

function Survei3() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);
  const [checkbox6Checked, setCheckbox6Checked] = useState(false);
  const [checkbox7Checked, setCheckbox7Checked] = useState(false);
  const [checkbox8Checked, setCheckbox8Checked] = useState(false);
  const [checkbox9Checked, setCheckbox9Checked] = useState(false);
  const [checkbox10Checked, setCheckbox10Checked] = useState(false);
  const [checkbox11Checked, setCheckbox11Checked] = useState(false);
  const [checkbox12Checked, setCheckbox12Checked] = useState(false);
  const [checkbox13Checked, setCheckbox13Checked] = useState(false);
  const [checkbox14Checked, setCheckbox14Checked] = useState(false);
  const [checkbox15Checked, setCheckbox15Checked] = useState(false);
  const [checkbox16Checked, setCheckbox16Checked] = useState(false);
  const [checkbox17Checked, setCheckbox17Checked] = useState(false);
  const [checkbox18Checked, setCheckbox18Checked] = useState(false);
  const [checkbox19Checked, setCheckbox19Checked] = useState(false);
  const [checkbox20Checked, setCheckbox20Checked] = useState(false);
  const [checkbox21Checked, setCheckbox21Checked] = useState(false);
  const [checkbox22Checked, setCheckbox22Checked] = useState(false);
  const [checkbox23Checked, setCheckbox23Checked] = useState(false);
  const [checkbox24Checked, setCheckbox24Checked] = useState(false);
  const [checkbox25Checked, setCheckbox25Checked] = useState(false);
  const [checkbox26Checked, setCheckbox26Checked] = useState(false);
  const [checkbox27Checked, setCheckbox27Checked] = useState(false);
  const [checkbox28Checked, setCheckbox28Checked] = useState(false);
  const [checkbox29Checked, setCheckbox29Checked] = useState(false);
  const [checkbox30Checked, setCheckbox30Checked] = useState(false);
  const [checkbox31Checked, setCheckbox31Checked] = useState(false);
  const [checkbox32Checked, setCheckbox32Checked] = useState(false);
  const [checkbox33Checked, setCheckbox33Checked] = useState(false);
  const [checkbox34Checked, setCheckbox34Checked] = useState(false);
  const [checkbox35Checked, setCheckbox35Checked] = useState(false);

  const handleRadioButtonChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Reset checkbox states when a different radio option is selected
    setCheckbox1Checked(false);
    setCheckbox2Checked(false);
    setCheckbox3Checked(false);
    setCheckbox4Checked(false);

    // // If Option 1 or Option 2 is selected, set corresponding checkboxes to true
    // if (selectedValue === "option1" || selectedValue === "option2") {
    //   setCheckbox1Checked(true);
    //   setCheckbox2Checked(true);
    //   setCheckbox3Checked(true);
    // }

    // // If Option 2 is selected, set the additional checkbox for Option 2 to true
    // if (selectedValue === "option2") {
    //   setCheckbox4Checked(true);
    // }
  };

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
  };
  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
  };
  const handleCheckbox3Change = () => {
    setCheckbox3Checked(!checkbox3Checked);
  };
  const handleCheckbox4Change = () => {
    setCheckbox4Checked(!checkbox4Checked);
  };
  const handleCheckbox5Change = () => {
    setCheckbox5Checked(!checkbox5Checked);
  };
  const handleCheckbox6Change = () => {
    setCheckbox6Checked(!checkbox6Checked);
  };
  const handleCheckbox7Change = () => {
    setCheckbox7Checked(!checkbox7Checked);
  };
  const handleCheckbox8Change = () => {
    setCheckbox8Checked(!checkbox8Checked);
  };
  const handleCheckbox9Change = () => {
    setCheckbox9Checked(!checkbox9Checked);
  };
  const handleCheckbox10Change = () => {
    setCheckbox10Checked(!checkbox10Checked);
  };
  const handleCheckbox11Change = () => {
    setCheckbox11Checked(!checkbox11Checked);
  };
  const handleCheckbox12Change = () => {
    setCheckbox12Checked(!checkbox12Checked);
  };
  const handleCheckbox13Change = () => {
    setCheckbox13Checked(!checkbox13Checked);
  };
  const handleCheckbox14Change = () => {
    setCheckbox14Checked(!checkbox14Checked);
  };
  const handleCheckbox15Change = () => {
    setCheckbox15Checked(!checkbox15Checked);
  };
  const handleCheckbox16Change = () => {
    setCheckbox16Checked(!checkbox16Checked);
  };
  const handleCheckbox17Change = () => {
    setCheckbox17Checked(!checkbox17Checked);
  };
  const handleCheckbox18Change = () => {
    setCheckbox18Checked(!checkbox18Checked);
  };
  const handleCheckbox19Change = () => {
    setCheckbox19Checked(!checkbox19Checked);
  };
  const handleCheckbox20Change = () => {
    setCheckbox20Checked(!checkbox20Checked);
  };
  const handleCheckbox21Change = () => {
    setCheckbox21Checked(!checkbox21Checked);
  };
  const handleCheckbox22Change = () => {
    setCheckbox22Checked(!checkbox22Checked);
  };
  const handleCheckbox23Change = () => {
    setCheckbox23Checked(!checkbox23Checked);
  };
  const handleCheckbox24Change = () => {
    setCheckbox24Checked(!checkbox24Checked);
  };
  const handleCheckbox25Change = () => {
    setCheckbox25Checked(!checkbox25Checked);
  };
  const handleCheckbox26Change = () => {
    setCheckbox26Checked(!checkbox26Checked);
  };
  const handleCheckbox27Change = () => {
    setCheckbox27Checked(!checkbox27Checked);
  };
  const handleCheckbox28Change = () => {
    setCheckbox28Checked(!checkbox28Checked);
  };
  const handleCheckbox29Change = () => {
    setCheckbox29Checked(!checkbox29Checked);
  };
  const handleCheckbox30Change = () => {
    setCheckbox30Checked(!checkbox30Checked);
  };
  const handleCheckbox31Change = () => {
    setCheckbox31Checked(!checkbox31Checked);
  };
  const handleCheckbox32Change = () => {
    setCheckbox32Checked(!checkbox32Checked);
  };
  const handleCheckbox33Change = () => {
    setCheckbox33Checked(!checkbox33Checked);
  };
  const handleCheckbox34Change = () => {
    setCheckbox34Checked(!checkbox34Checked);
  };
  const handleCheckbox35Change = () => {
    setCheckbox35Checked(!checkbox35Checked);
  };

  return (
    <div className="bg-biruprimary text-white">
      <div className="max-w-md mx-auto text-sm">
        <h2 className="text-xl font-semibold mb-5">Informasi Sekolah Kak Seto diperoleh dari?</h2>
        <div className="space-y-5 text-lg">
          <label className="flex items-center">
            <input className="mr-2" type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleRadioButtonChange} />
            EVENT
          </label>
          {selectedOption === "option1" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox1Checked} onChange={handleCheckbox1Change} className="mr-2" />
                Booth Kami
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox2Checked} onChange={handleCheckbox2Change} className="mr-2" />
                Edu Fair
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox3Checked} onChange={handleCheckbox3Change} className="mr-2" />
                In House
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox4Checked} onChange={handleCheckbox4Change} className="mr-2" />
                Parenting Kak Seto
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox5Checked} onChange={handleCheckbox5Change} className="mr-2" />
                Seminar
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox6Checked} onChange={handleCheckbox6Change} className="mr-2" />
                Sharing Session
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox7Checked} onChange={handleCheckbox7Change} className="mr-2" />
                Sparkling
              </label>
            </div>
          )}
          <label className="flex items-center">
            <input className="mr-2" type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleRadioButtonChange} />
            MEDIA CETAK
          </label>
          {selectedOption === "option2" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox8Checked} onChange={handleCheckbox8Change} className="mr-2" />
                Koran
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox9Checked} onChange={handleCheckbox9Change} className="mr-2" />
                Majalah
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox10Checked} onChange={handleCheckbox10Change} className="mr-2" />
                Tabloid
              </label>
            </div>
          )}
          <label className="flex items-center">
            <input type="radio" value="option3" checked={selectedOption === "option3"} onChange={handleRadioButtonChange} className="mr-2" />
            MEDIA ELEKTRONIK
          </label>
          {selectedOption === "option3" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox11Checked} onChange={handleCheckbox11Change} className="mr-2" />
                Handphone
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox12Checked} onChange={handleCheckbox12Change} className="mr-2" />
                Radio
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox13Checked} onChange={handleCheckbox13Change} className="mr-2" />
                Television
              </label>
            </div>
          )}
          <label className="flex items-center">
            <input type="radio" value="option4" checked={selectedOption === "option4"} onChange={handleRadioButtonChange} className="mr-2" />
            MEDIA OFFLINE
          </label>
          {selectedOption === "option4" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox14Checked} onChange={handleCheckbox14Change} className="mr-2" />
                Brosur
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox15Checked} onChange={handleCheckbox15Change} className="mr-2" />
                Flyer
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox16Checked} onChange={handleCheckbox16Change} className="mr-2" />
                Kantor
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox17Checked} onChange={handleCheckbox17Change} className="mr-2" />
                Kerabat yang bersekolah di kami
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox18Checked} onChange={handleCheckbox18Change} className="mr-2" />
                Kerabat yang tidak bersekolah di kami
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox19Checked} onChange={handleCheckbox19Change} className="mr-2" />
                Poster
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox20Checked} onChange={handleCheckbox20Change} className="mr-2" />
                Psikolog Kami
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox21Checked} onChange={handleCheckbox21Change} className="mr-2" />
                Sekolah bakat
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox22Checked} onChange={handleCheckbox22Change} className="mr-2" />
                Sekolah sebelumnya
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox23Checked} onChange={handleCheckbox23Change} className="mr-2" />
                Spanduk
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox23Checked} onChange={handleCheckbox23Change} className="mr-2" />
                Staff kami
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox24Checked} onChange={handleCheckbox24Change} className="mr-2" />
                TK atau Pre-School
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox25Checked} onChange={handleCheckbox25Change} className="mr-2" />
                Tutor Kami
              </label>
            </div>
          )}
          <label className="flex items-center">
            <input type="radio" value="option5" checked={selectedOption === "option5"} onChange={handleRadioButtonChange} className="mr-2" />
            MEDIA ONLINE
          </label>
          {selectedOption === "option5" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox26Checked} onChange={handleCheckbox26Change} className="mr-2" />
                Email Marketing
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox27Checked} onChange={handleCheckbox27Change} className="mr-2" />
                Pencarian Google
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox28Checked} onChange={handleCheckbox28Change} className="mr-2" />
                Website Berita
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox29Checked} onChange={handleCheckbox29Change} className="mr-2" />
                Iklan
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox30Checked} onChange={handleCheckbox30Change} className="mr-2" />
                Website Parenting
              </label>
            </div>
          )}
          <label className="flex items-center">
            <input type="radio" value="option6" checked={selectedOption === "option6"} onChange={handleRadioButtonChange} className="mr-2" />
            MEDIA SOSIAL
          </label>
          {selectedOption === "option6" && (
            <div className="space-y-5 text-lg ml-5">
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox31Checked} onChange={handleCheckbox31Change} className="mr-2" />
                Facebook
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox32Checked} onChange={handleCheckbox32Change} className="mr-2" />
                Whatsapp
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox33Checked} onChange={handleCheckbox33Change} className="mr-2" />
                Youtube
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox34Checked} onChange={handleCheckbox34Change} className="mr-2" />
                Instagram
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={checkbox35Checked} onChange={handleCheckbox35Change} className="mr-2" />
                Twitter
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
      <div className="border-t-2 border-white max-w-md mx-auto"></div>
      <div className="flex items-center justify-center mt-4">
        <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center">
          SELANJUTNYA <MdNavigateNext className="ml-2" size={20} />
        </button>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei3;
