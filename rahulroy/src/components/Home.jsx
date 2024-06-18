import style from "../Styling/home.module.css";
import { Typewriter } from "react-simple-typewriter";
import { HiHome } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { FaDev } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { TbSunFilled } from "react-icons/tb";
import { RiBox3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  // function showSidebar() {
  //   const sidebar = document.querySelector({});
  //   sidebar.home.display = "flex";
  // }
  return (
    <div className={style.home}>
      <div className={style.mynav}>
        <div className={style.rahul}>
          <span style={{ fontSize: "1.3rem" }}>&lt;/&gt;</span>rahul roy
        </div>
        <div className={style.navmenu}>
          <HiHome className={style.navhome} />
          <IoPerson className={style.navabout} />
          <FaDev className={style.navskill} />
          <FaReact className={style.navexp} />
          <MdMail className={style.navcontact} />
        </div>

        <label>
          <input type="checkbox" />
          <TbSunFilled className={style.sun} />
          <HiMiniMoon className={style.moon} />
          <span className={style.toggel}></span>
        </label>
        <label style={{display:"none"}}>
          <RiBox3Fill />
        </label>
      </div>
      <div className={style.mysidenav}>
        {/* <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Contact</a> */}
        {/* <div className={style.rahul}><span style={{fontSize:"2.5rem"}}>&lt;</span> Rahul Roy /<span style={{fontSize:"2.5rem"}}>&gt;</span></div> */}

        <div className={style.sidenavmenu}>
          <RxCross2 style={{ fontSize: "50px" }} />
          <HiHome className={style.snavhome} />
          <IoPerson className={style.snavabout} />
          <FaDev className={style.snavskill} />
          <FaReact className={style.snavexp} />
          <MdMail className={style.snavcontact} />
        </div>
      </div>
      <div className={style.elementbg}>
        <div className={style.elementbg1}></div>
        <div className={style.elementbg2}></div>
        <div className={style.elementbg3}></div>
      </div>

      <span className={style.autotypetxt}>
        <Typewriter
          words={[
            "Hey , Rahul Roy is here.",
            "A Passionate MERN Stack Developer on a Mission.",
            "Develop with Passion, Deliver with Precision.",
          ]}
          loop={0}
          cursor={1}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}
