import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage, faFilePdf, faFileWord, faFileExcel, faFilePowerpoint, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Pages/Page-6-Langkah1/Navbar3";
import BreadCrumbs from "../Page-6-Langkah1/BreadCrumbsCopy";
import Footer from "../../Organisms/Footer";



function Body8() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    // Reset selected files
    setSelectedFiles([]);
  };

  const handleCreate = () => {
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file, index) => {
        console.log(`File ${index + 1}:`);
        console.log("File Name:", file.name);
        console.log("File Type:", file.type);
        console.log("File Size:", file.size, "bytes");
        console.log("---------------------------");
      });

      // Simpan informasi file di local storage jika diperlukan
      // localStorage.setItem("uploadedFiles", JSON.stringify(selectedFiles));

      // Anda dapat menambahkan logika penyimpanan file secara lokal di sini
    } else {
      console.log("No file selected");
    }
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "image/jpeg":
      case "image/png":
      case "image/gif":
        return faFileImage;
      case "application/pdf":
        return faFilePdf;
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return faFileWord;
      case "application/vnd.ms-excel":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return faFileExcel;
      case "application/vnd.ms-powerpoint":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return faFilePowerpoint;
      default:
        return faFileAlt;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="text-biruprimary font-bold px-4 pt-4 pb-10 mx-auto lg:w-1/2 lg:mx-0">
          <BreadCrumbs />
          <div className="rounded-lg shadow-xl bg-gray-50 lg:flex-row">
            {/* ... (kode yang ada sebelumnya) */}
            <label className="inline-block mb-2 text-gray-500">Upload Images (jpg, png, svg, jpeg)</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <FontAwesomeIcon icon={faFileAlt} size="3x" className="lg:text-3xl" color="#718096" />
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Select photos</p>
                </div>
                <input type="file" className="opacity-0" onChange={handleFileChange} multiple />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row p-2 space-x-0 lg:space-x-4">
              <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl mb-2 lg:mb-0" onClick={handleCancel}>Cancel</button>
              <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl" onClick={handleCreate}>Create</button>
            </div>
      </div>
      {selectedFiles.length > 0 && (
  <div className="mt-4 overflow-x-auto">
    <h2 className="text-lg font-semibold mb-2">Files Information</h2>
    <table className="table-auto w-full block lg:table">
      <thead>
        <tr>
          <th className="px-4 py-2">File</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Size</th>
          <th className="px-4 py-2">Logo</th>
        </tr>
      </thead>
      <tbody>
        {selectedFiles.map((file, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{file.name}</td>
            <td className="border px-4 py-2">{file.type}</td>
            <td className="border px-4 py-2">{file.size} bytes</td>
            <td className="border px-4 py-2">
              <FontAwesomeIcon icon={getFileIcon(file.type)} size="lg" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
              </div>
              <div className="flex-1 pattern shadow-md"></div>
      </div>
    <Footer />

    </>
   
  );
}

export default Body8;
