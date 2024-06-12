import style from "../Styling/about.module.css";
import pic from "../components/mypic.png";
import Tilty from "react-tilty";
export default function About() {
 
  return (
    <div className={style.about}>
      <div className={style.aboutwraper}>
        <Tilty style={{ transformStyle: "preserve-3d" }}>
          <div className={style.profilebox}>
            <img src={pic}></img>
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
                cursor: "default",
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
          <div className={style.conatcticons}></div>
        </div>
      </div>
    </div>
  );
}
