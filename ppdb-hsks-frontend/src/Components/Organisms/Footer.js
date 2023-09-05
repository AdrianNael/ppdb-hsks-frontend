import React from "react";
import facebook from "../../Assets/Images/page-1/facebook.svg";
import instagram from "../../Assets/Images/page-1/instagram.svg";
import youtube from "../../Assets/Images/page-1/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="bg-BiruSecondary2 pb-10 pt-8 xl:pb-20 xl:pt-16">
        <div className="xl:flex xl:flex-nowrap xl:text-center xl:text-lg">
          <div className="ml-8 pb-4 text-white font-bold w-full xl:w-1/2 xl:ml-20">
            <h4>Tentang Kami</h4>
            <p className="text-slate-500 text-base font-bold">
              <a href="https://hiji.link/SekolahKakSeto">Sekolah Kak Seto</a>
            </p>
          </div>
          <div className="mx-8 xl:w-1/2 xl:text-center xl:text-lg">
            <h4 className="text-white font-semibold">Temukan Kami Disini</h4>
            {/* Icon */}
            <a href="https://www.facebook.com/homeschoolingkakseto?locale=id_ID">
              <img src={facebook} alt="facebook" className="inline mr-4" />
            </a>
            <a href="https://www.instagram.com/hskakseto.depok/">
              <img src={instagram} alt="instagram" className="inline" />
            </a>
            <a href="https://www.youtube.com/@HomeschoolingKakSetoDepok">
              <img src={youtube} alt="youtube" className="ml-4 inline" />
            </a>
          </div>
        </div>

        {/* garis line */}
        <div className="border-t-2 border-white my-4 mx-8"></div>
        <div className="copyright px-16">
          <p className="text-slate-500 font-bold text-center xl:text-base">
            Copyright ©️ 2023. Sekolah Kak Seto. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
