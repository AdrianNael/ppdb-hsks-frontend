import React, { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import {axiosBaseUrl} from "../../lib/axios"

function Survei3() {
  const [options, setOptions] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosBaseUrl.get("/surveys");
        const apiData = response.data.data;

        // Extracting unique 'reff_kronologies' values
        const uniqueReffKronologies = Array.from(
          new Set(apiData.media.map((item) => item.reff_kronologies))
        );

        setOptions(uniqueReffKronologies);

        // Extracting checkboxes based on selected 'reff_kronologies'
        const mediaCheckboxes = apiData.media
          .filter((item) => item.reff_kronologies === uniqueReffKronologies[0]) // You can change the index to select a different 'reff_kronologies'
          .map((item) => item.reff_kronologies_sub);

        setCheckboxes(mediaCheckboxes);

        // Initialize checkbox states
        const initialState = mediaCheckboxes.reduce((state, checkbox) => {
          state[checkbox] = false;
          return state;
        }, {});
        setCheckboxStates(initialState);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  const handleRadioButtonChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Reset checkbox states when a different radio option is selected
    setCheckboxStates((prevState) => {
      const newState = { ...prevState };
      checkboxes.forEach((checkbox) => (newState[checkbox] = false));
      return newState;
    });
  };

  const handleCheckboxChange = (checkbox) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  return (
    <div className="bg-biruprimary text-white">
      <div className="mx-10 text-sm">
        <h2 className="text-xl font-semibold mb-5">
          Informasi Sekolah Kak Seto diperoleh dari?
        </h2>
        <div className="space-y-5 text-lg">
          {options.map((option, index) => (
            <label key={index} className="flex items-center">
              <input
                className="mr-2"
                type="radio"
                value={`option${index + 1}`}
                checked={selectedOption === `option${index + 1}`}
                onChange={handleRadioButtonChange}
              />
              {option}
              {selectedOption === `option${index + 1}` && (
                <div className="space-y-5 text-lg ml-5">
                  {checkboxes.map((checkbox, checkboxIndex) => (
                    <label key={checkboxIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={checkboxStates[checkbox]}
                        onChange={() => handleCheckboxChange(checkbox)}
                        className="mr-2"
                      />
                      {checkbox}
                    </label>
                  ))}
                </div>
              )}
            </label>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei3;
