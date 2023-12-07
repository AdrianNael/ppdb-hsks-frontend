import React, { useState } from "react";
import { Link,useLocation  } from "react-router-dom";

function Navbar3() {
  const location = useLocation();


  const linkStyle = {
    color: '#204397', 
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    color: '#27B6C1', // Warna teks saat tautan aktif
  };

  return (
    <nav
      className="flex flex-wrap py-3 text-white "
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap w-full">
        <li>
        <Link
            to="/Langkah1"
            style={location.pathname === "/Langkah1" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium"
          >
            <svg
              className="w-3 h-3 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Langkah 1
          </Link>
        </li>
        <li>
          <Link
            to="/Langkah2"
            style={location.pathname === "/Langkah2" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium text-biruprimary"
          >
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Langkah 2
          </Link>
        </li>
        <li>
          <Link
            to="/Langkah3"
            style={location.pathname === "/Langkah3" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium text-biruprimary hover:text-BiruSecondary1"
          >
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Langkah 3
          </Link>
        </li>
        <li>
          <Link
            to="/Langkah4"
            style={location.pathname === "/Langkah4" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium text-biruprimary hover:text-BiruSecondary1"
          >
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Langkah 4
          </Link>
        </li>
        <li>
          <Link
            to="/Langkah5"
            style={location.pathname === "/Langkah5" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium text-biruprimary hover:text-BiruSecondary1"
          >
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Langkah 5
          </Link>
        </li>
        <li>
          <Link
            to="/Langkah6"
            style={location.pathname === "/Langkah6" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            className="inline-flex flex-nowrap items-center text-sm font-medium text-biruprimary hover:text-BiruSecondary1"
          >
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Langkah 6
          </Link>
        </li>
      </ol>
    </nav>
  );
}
export default Navbar3;
