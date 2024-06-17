import style from "../Styling/contact.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.wrapper}>
        <span style={{fontSize:"1.8rem"}}>CONTACT</span>
        <h3>
          Thank you for your valuable time and patience; it's greatly
          appreciated.
        </h3>
        <h2>
          If your values align with my mission and skills, and you'd like to
          join this journey, please feel free to reach out. Let's make a
          difference together.
        </h2>
        <div className={style.logos}>
          <FaGithub></FaGithub>
          <FaLinkedin></FaLinkedin>
          <FaXTwitter></FaXTwitter>
          <AiFillInstagram></AiFillInstagram>
        </div>
        <p>
          or drop a mail at{" "}
          <a href="mailto:connect.royrahul@gmail.com">
            connect.royrahul@gmail.com{" "}
            <HiOutlineArrowUpRight style={{ fontSize: "70%" }} />
          </a>
        </p>
        <p className={style.footerr}>
          website Design and develop by{" "}
          <a href="https://www.linkedin.com/in/rahul-roy-1306/">
            Rahul Roy <HiOutlineArrowUpRight style={{ fontSize: "70%" }} />
          </a>
        </p>
      </div>
    </div>
  );
}
