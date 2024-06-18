import style from "../Styling/project.module.css";
import { SiGithub } from "react-icons/si";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import pro1 from "../logos/pro1.png";
// import Swiper from "swiper";
// import "swiper/css";
export default function Project() {
  // var swiper = new Swiper(".swiper", {
  //   effect: "cards",
  //   grabCursor: true,
  //   initialSlide: 2,
  //   speed: 500,
  //   loop: true,
  //   rotate: true,
  //   mousewheel: {
  //     invert: false,
  //   },
  // });
  return (
    <div className={style.project}>
      <section>
        <ul class={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <div className={style.heading}>
        <span style={{ display: "flex", justifyContent: "center" }}>
          PROJECT'S
        </span>
      </div>
      <div className={style.projectbox}>
        <div className={style.box1}>
          <div className={style.wraper}>
            <div className={style.projectname}>Tunify - Music App</div>
            <div className={style.projectdes}>
              I created Tunify, a dynamic web-based music platform utilizing
              React, the MUI library, and REST API integration. Experience
              seamless music streaming with an intuitive interface that enhances
              user engagement and accessibility. Tunify offers a personalized
              listening experience, combining functionality with aesthetic
              appeal for music enthusiasts
            </div>
            <div className={style.projectlinks}>
              <a>
                <SiGithub />
              </a>
              <a style={{ marginLeft: "5%" }}>
                Live Demo <HiOutlineArrowTopRightOnSquare />
              </a>
            </div>
          </div>
        </div>
        <div className={style.box2}>
          <div className={style.wraper}>
            <div className={style.projectname}>Smart Dashboard</div>
            <div className={style.projectdes}>
              I've created a versatile and highly responsive interactive
              dashboard using React and MUI library, seamlessly integrated with
              REST API. Explore its dynamic data visualization and user-friendly
              interface, designed to elevate user experience and streamline data
              management tasks effortlessly
            </div>
            <div className={style.projectlinks}>
              <a>
                <SiGithub />
              </a>
              <a style={{ marginLeft: "5%" }}>
                Live Demo <HiOutlineArrowTopRightOnSquare />
              </a>
            </div>
          </div>
        </div>
        <div className={style.box3}>
          <div className={style.wraper}>
            <div className={style.projectname}>Task Planner</div>
            <div className={style.projectdes}>
              I've developed a versatile task mapping system using the React
              Flow library, enabling seamless visualization and management of
              multiple tasks. Experience intuitive task mapping with dynamic
              flow charts and interactive features, designed to optimize
              productivity and streamline workflow management effortlessly.
            </div>
            <div className={style.projectlinks}>
              <a>
                <SiGithub />
              </a>
              <a style={{ marginLeft: "5%" }}>
                Live Demo <HiOutlineArrowTopRightOnSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
