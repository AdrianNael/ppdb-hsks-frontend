import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

function Survei3() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [selectedData, setSelectedData] = useState([]);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://168.63.239.37:80/api/v1/hsks/surveys"
        );
        const data = response.data.data;

        // Extracting unique 'reff_kronologies' values
        const uniqueReffKronologies = Array.from(
          new Set(data.media.map((item) => item.reff_kronologies))
        );

        setOptions(uniqueReffKronologies);
        setApiData(data);

        // Initialize checkbox states
        const initialState = data.media.reduce((state, item) => {
          state[item.reff_kronologies_sub] = false;
          return state;
        }, {});
        setCheckboxStates(initialState);

        // Set selected data based on the initial 'reff_kronologies'
        const initialSelectedData = data.media.filter(
          (item) => item.reff_kronologies === uniqueReffKronologies[0]
        );
        setSelectedData(initialSelectedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRadioButtonChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Set selected data based on the selected 'reff_kronologies'
    const selectedData = apiData.media.filter(
      (item) => item.reff_kronologies === selectedValue
    );
    setSelectedData(selectedData);

    // Reset checkbox states when a different radio option is selected
    setCheckboxStates((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((checkbox) => (newState[checkbox] = false));
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
    <div className="bg-biruprimary text-white ">
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
                value={option}
                checked={selectedOption === option}
                onChange={handleRadioButtonChange}
              />
              {option}
              {selectedOption === option && (
                <div className="space-y-5 text-lg ml-5">
                  {selectedData.map((data, dataIndex) => (
                    <label key={dataIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={checkboxStates[data.reff_kronologies_sub]}
                        onChange={() =>
                          handleCheckboxChange(data.reff_kronologies_sub)
                        }
                        className="mr-2"
                      />
                      {data.reff_kronologies_sub}
                    </label>
                  ))}
                </div>
              )}
            </label>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
      <div className="flex items-center justify-center mt-4">
        <Link to="/datacalonsiswa">
          <button className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center">
            SELANJUTNYA <MdNavigateNext className="ml-2" size={20} />
          </button>
        </Link>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>{" "}
    </div>
  );
}

export default Survei3;
