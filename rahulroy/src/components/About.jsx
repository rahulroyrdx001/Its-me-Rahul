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
              <span style={{ fontSize: "1rem" }}>Fullstack Developer</span>
            </div>
          </div>
        </Tilty>
        <div className={style.descrip}>
          <div>
            <span
              style={{
                fontSize: "300%",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Fullstack Web developer
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: "200%",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Developer is on a mission
            </span>
          </div>
          <div className={style.light}></div>
          <div style={{ position: "relative", top: "10%" }}>
            <span
              style={{
                fontSize: "100%",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              possimus aliquid eos dignissimos consequuntur hic molestias, esse
              accusamus doloribus corrupti nisi deserunt inventore cum
              repudiandae, iure, ut enim ratione atque ad? Libero quos vero, in
              sed nam eos itaque inventore cum, iure dignissimos, nostrum
              dolorum accusamus consectetur magni est necessitatibus.
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
            <a href="connect.royrahul@gmail.com">
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
