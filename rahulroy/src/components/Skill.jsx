import style from "../Styling/skill.module.css";
export default function Skill() {

  const row1 = [
    "../logos/html-5-svgrepo-com.svg",
    "../logos/css-3-svgrepo-com.svg",
    "../logos/react-logo-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",

  ];
  const row2 = [
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",

  ];
  const row3 = [
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",

  ];
  const row4 = [
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",
    "../logos/html-5-svgrepo-com.svg",

  ]


  return (
    <div className={style.skill}>
      <div className={style.container}>
        <div
          className={style.shine}
          style={{ fontSize: "300%", fontFamily: "Poppins", fontWeight: "600" }}
        >
          SKILLS
        </div>
        <div className={style.wrapper}></div>
      </div>
    </div>
  );
}
