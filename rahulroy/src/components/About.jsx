import style from "../Styling/about.module.css";
import pic from "../components/mypic.png";
import Tilty from "react-tilty";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { IoDocumentAttach } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.aboutwraper}>
        <Tilty style={{ transformStyle: "preserve-3d" }}>
          <div className={style.profilebox}>
            <img className={style.rahulpic} src={pic}></img>
            <div style={{ transform: "translateZ(50px)" }}>
              <span style={{ fontSize: "3rem" }}>Rahul Roy</span>
            </div>
            <div>
              <span className={style.fullstack}>Fullstack Developer</span>
            </div>
          </div>
        </Tilty>
        <div className={style.descrip}>
          <div>
            <span className={style.fdev}>Fullstack Web developer</span>
          </div>
          <div>
            <span className={style.mission}>
              The Developer is on a mission 🚀
            </span>
          </div>

          <div style={{ position: "relative", top: "10%" }}>
            <span className={style.maindes}>
              Hello, I'm Rahul Roy, a passionate{" "}
              <span style={{ color: "orangered", fontWeight: "500" }}>
                Full Stack Developer
              </span>{" "}
              dedicated to crafting scalable and intuitive web applications. My
              drive is fueled by a love for solving intricate challenges with
              sophisticated solutions. As a self-motivated and inquisitive
              programmer, I thrive on untangling complex, real-world problems.
              When I'm not navigating the digital realm, you'll find me immersed
              in the captivating world of books—devouring pages with fervor or
              losing myself in the thrill of a good story. To me, reading is not
              just a hobby; it's a wellspring of joy and inspiration.
            </span>
          </div>
          <div className={style.conatcticons}>
            <a href="https://github.com/rahulroyrdx001">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rahul-roy-1306/">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/RroyTech">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/rahulroy___13/">
              <AiFillInstagram />
            </a>
            <a href="mailto:connect.royrahul@gmail.com">
              <IoMdMail />
            </a>
            <a href="https://drive.google.com/file/d/12wd1Dt_dEGYW49K65_TnGuBMjkkUkkYR/view?usp=sharing">
              <IoDocumentAttach />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
