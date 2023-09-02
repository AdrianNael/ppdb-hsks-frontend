import React, { useState } from "react";

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
    setCheckbox12Checked(!checkbox12Checked);
  };

  return (
    <div className="bg-biruprimary font-poppins text-white">
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
            <input type="radio" value="option3" checked={selectedOption === "option3"} onChange={handleRadioButtonChange} />
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
            <input type="radio" value="option4" checked={selectedOption === "option4"} onChange={handleRadioButtonChange} />
            Option 4
          </label>
          <label className="flex items-center">
            <input type="radio" value="option5" checked={selectedOption === "option5"} onChange={handleRadioButtonChange} />
            Option 5
          </label>
          <label className="flex items-center">
            <input type="radio" value="option6" checked={selectedOption === "option6"} onChange={handleRadioButtonChange} />
            Option 6
          </label>
        </div>
      </div>
    </div>
  );
}

export default Survei3;
