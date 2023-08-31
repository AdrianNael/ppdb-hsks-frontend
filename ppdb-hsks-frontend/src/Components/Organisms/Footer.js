import React from 'react';
import facebook from '../../Assets/Images/page-1/facebook.svg'
import instagram from '../../Assets/Images/page-1/instagram.svg'
import youtube from '../../Assets/Images/page-1/facebook.svg'

function Footer() {
  return (
    <footer className="bg-BiruSecondary2 pb-10 pt-8">
      <div className="mx-8 text-white font-bold">
        <h4>Tentang Kami</h4>
        <a href="https://hiji.link/SekolahKakSeto"><p className="text-slate-500 text-base font-bold">Sekolah Kak Seto</p></a>
      </div>
      <div className="mx-8 mt-4">
        <h4 className="text-white font-semibold mt-10">Temukan Kami Disini</h4>
        {/* Icon */}
        <a href="#">
          <img src={facebook} alt="facebook" className="inline mr-4" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" className="inline" />
        </a>
        <a href="#">
          <img src={youtube} alt="youtube" className="ml-4 inline" />
        </a>
      </div>

      {/* garis line */}
      <div className="border-t-2 border-white my-4 mx-8"></div>
      <div className="copyright px-16">
        <p className="text-slate-500 font-bold">Copyright ©️ 2023. Sekolah Kak Seto. All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;