import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { SiPhp, SiJavascript, SiCss3, SiHtml5, SiMysql, SiPostgresql, SiNestjs, SiJquery, SiCodeigniter, SiBootstrap, SiLaravel } from "react-icons/si";
import Profile from "../src/assets/me.jpg"

import Kehadiran from "../src/assets/kehadiran.png"
import Feedback from "../src/assets/feedback.png"
import NarAntigen from "../src/assets/NAR-antigen.png"
import NarPCR from "../src/assets/NAR-tc.png"
import SikdaNG from "../src/assets/sikda-ng.png"
import SikdaG from "../src/assets/SIKDAG.png" 
import ProeduGuru from "../src/assets/landing-guru.png"  
import ProeduMurid from "../src/assets/landing-murid.png"  

import LogoKemkes from "../src/assets/kemkesjpg.jpg" 
import LogoProedu from "../src/assets/proedu.jpg"

ReactGA.initialize("G-R8CMZ455M3");

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const techStack = [
    { icon: SiPhp, name: "PHP", color: "text-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiCss3, name: "CSS", color: "text-blue-600" },
    { icon: SiHtml5, name: "HTML", color: "text-orange-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-700" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
    { icon: SiNestjs, name: "NestJS", color: "text-red-600" },
    { icon: SiJquery, name: "jQuery", color: "text-blue-400" },
    { icon: SiCodeigniter, name: "CodeIgniter", color: "text-red-500" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
    { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
  ];

  const portfolioItems = [
    { id: 1, title: "Kehadiran", image: Kehadiran },
    { id: 2, title: "Partisipasi Sehat", image: Feedback },
    { id: 3, title: "NAR Antgien", image: NarAntigen },
    { id: 4, title: "NAR PCR", image: NarPCR },
    { id: 5, title: "SIKDA NG", image: SikdaNG },
    { id: 6, title: "SIKDA Generik", image: SikdaG },
    { id: 7, title: "Proedu Guru", image: ProeduGuru},
    { id: 8, title: "Proedu Lending", image: ProeduMurid },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors max-w-screen-sm mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-gray-100 dark:bg-gray-800 w-full fixed max-w-screen-sm">
        <ul className="flex gap-4">
          <li><a href="#profile" className="hover:underline">Profile</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#stack" className="hover:underline">Stack</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Profile Section */}
      <section id="profile" className="p-6 pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Foto Profile */}
          <div className="flex justify-center">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-3xl border-4 border-gray-300 dark:border-gray-600"
            />
          </div>
          {/* Deskripsi Profile */}
          <div className="text-center sm:text-left flex flex-col justify-center gap-1">
            <h1 className="text-2xl sm:text-3xl font-bold">Hi👋 <br /> I am Irfan Maulana</h1>
            <p className="text-base sm:text-lg mt-2 ">a <span className="font-semibold underline">Software Engineer</span> for more then 5 years with experience creating websites and API services.</p>
          </div>
        </div>
      </section>

      {/* Experience History Section */}
      <section id="experience" className="p-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="grid grid-cols-1 mt-4">
          <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 rounded shadow-xl">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-none">
                <img
                  src={LogoKemkes}
                  alt="Company"
                  className="rounded-xl w-14"
                />
              </div>
              <div className="sm:text-left flex flex-col justify-center gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-md">Software Engineer</p>
                  <p className="font-semibold text-lg">Kementerian Kesehatan</p>
                  <p className="font-semibold text-sm">Nov 2021 - Present</p>
                  <p className="text-sm md:text-base dark:text-gray-200 mt-3">
                    <ul className="list-disc">
                      <li>
                        improvement of the Corona Virus recording system (National All Record) with CodeIgniter and Yii2
                      </li>
                      <li>
                        integration of the Corona Virus recording system (National All Record) with the Ministry of Home Affairs, Corjat and Pikobar Jabar
                      </li>
                      <li>
                        Website feedback information system for the legalization of health laws with Django
                      </li>
                      <li>
                        system integration with BSRE for digital signatures on assignment letters
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 mt-4 bg-gray-200 dark:bg-gray-700 rounded shadow-xl">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-none">
                <img
                  src={LogoProedu}
                  alt="Company"
                  className="rounded-xl w-14"
                />
              </div>
              <div className="sm:text-left flex flex-col justify-center gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-md">Software Engineer</p>
                  <p className="font-semibold text-lg">PT. Alhasan Prima Edukasi (Proedu)</p>
                  <p className="font-semibold text-sm">Feb 2021 - Nov 2021</p>
                  <p className="text-sm md:text-base dark:text-gray-200 mt-3">
                    <ul className="list-disc">
                      <li>
                        creation of a back office staff system for content management with codeignigter
                      </li>
                      <li>
                        support Backend to creating API services with Lumen/Laravel
                      </li>
                      <li>
                        support Frontend to implement design from UI/UX with vanilla javascript, jquery, html, css, scss, bootstrap
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 mt-4 bg-gray-200 dark:bg-gray-700 rounded shadow-xl">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-none">
                <img
                  src={LogoKemkes}
                  alt="Company"
                  className="rounded-xl w-14"
                />
              </div>
              <div className="sm:text-left flex flex-col justify-center gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-md">Software Engineer</p>
                  <p className="font-semibold text-lg">Kementerian Kesehatan</p>
                  <p className="font-semibold text-sm">Jan 2019 - Feb 2021</p>
                  <p className="text-sm md:text-base dark:text-gray-200 mt-3">
                    <ul className="list-disc">
                      <li>
                        improvement of attendance applications related to employee entry records and assignment letters 
                      </li>
                      <li>
                        improvement of the patient disease recording system in health center with the integration of BPJS Kesehatan related to claims
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="p-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4 grid grid-cols-3 sm:grid-cols-5 gap-4 shadow-lg">
          {techStack.map(({ icon: Icon, name, color }, index) => (
            <div key={index} className="flex flex-col justify-center items-center p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <Icon className={`text-4xl ${color}`} />
              <span className="text-sm mt-2">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-6">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-4">
          {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="p-1 cursor-pointer"
                onClick={() => { setSelectedImage(item.image); setModalOpen(true); }}
              >
                <img src={item.image} alt={item.title} className="rounded-md" />
                <p className="mt-2 text-center">{item.title}</p>
              </div>
            ))}
        </div>
      </section>


      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md max-h-screen overflow-auto transform transition-transform scale-95 hover:scale-100" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Portfolio" className="w-full h-auto rounded-md" />
          </div>
      </div>
      )}
    </div>
  );
}