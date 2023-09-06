import React, { useState } from 'react';
import LogoHSKS from "../../../Assets/Images/page-1/LogoKaseto.svg"
import { MdAdd } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';



function Navbar3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-biruprimary border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a  className="flex items-center">
          <img
            src={LogoHSKS}
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-md font-semibold whitespace-nowrap text-white">
          PPDB HSKS ONLINE
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-biruprimary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium ${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  hp:bg-BiruSecondary2 md:bg-biruprimary md:flex-row md:space-x-8 md:mt-0 md:border-0">

            <li>
              <button
                onClick={toggleDropdown}
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4   text-white rounded md:w-auto md:hover:scale-125 md:hover:bg-transparent md:border-0  md:p-0  "
              >
                Langkah PPDB HSKS Online{' '}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 ${
                    isDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white text-whiterounded      md:hover:bg-transparent  md:hover:scale-125 md:p-0    "
                aria-current="page"
              > <MdAdd className="inline-block mr-2" /> Tambah CPD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  text-white text-whiterounded  md:hover:bg-transparent  md:hover:scale-125 md:p-0 "
                aria-current="page"
              > <AiOutlineUnorderedList className="inline-block mr-2" /> Daftar CPD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  text-white text-whiterounded  md:hover:bg-transparent  md:hover:scale-125 md:p-0 "
                aria-current="page"
              >
                <FiLogOut className="inline-block mr-2" /> Keluar
              </a>
            </li>
            {/* Add more menu items here */}
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white  bg-BiruSecondary2 sm:grid-cols-2 md:px-6 sm:grid">
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 1</div>
                <span className="text-sm text-white ">
                Registrasi PPDB Sekolah Kak Seto Selesai
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 2</div>
                <span className="text-sm text-white ">
                Pembayaran Formulir dan Uang Pangkal Lihat Data                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 3</div>
                <span className="text-sm text-white ">
                Persyaratan                
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 4</div>
                <span className="text-sm text-white ">
                Formulir Reguler                
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 5</div>
                <span className="text-sm text-white ">
                Formulir Orang tua                
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg "
              >
                <div className="font-bold text-xl">Langkah 6</div>
                <span className="text-sm text-white ">
                Formulir Asesmen                
                </span>
              </a>
            </li>
            {/* Add more dropdown items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar3;
