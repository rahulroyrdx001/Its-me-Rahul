import style from "../Styling/skill.module.css";
import css from "../logos/css.png";
import reactlogo from "../logos/reactlogo.png";
import html from "../logos/html.png";
import boot from "../logos/bootstp.png";
import tail from "../logos/tailw.png";
import mui from "../logos/mui.png";
import node from "../logos/node.png";
import exp from "../logos/exp.png";
import mongo from "../logos/mongo.png";
import redux from "../logos/redux.png";
import vite from "../logos/vite.png";
import figma from "../logos/figma.png";
import javasct from "../logos/javascript.png";
import java from "../logos/java.png";
import python from "../logos/python.png";
import selenium from "../logos/selenium.png";
import jest from "../logos/jest.png";
import postman from "../logos/postman.png";
import git from "../logos/git.png";
import docker from "../logos/docker.png";
import aws from "../logos/aws.png";
import azur from "../logos/azur.png";
import jira from "../logos/jira.png";
import ga from "../logos/ganalytic.png";

export default function Skill() {
  const row1 = [
    { id: "img1", src: html, name: " Html" },
    { id: "img2", src: css, name: " Css" },
    { id: "img3", src: reactlogo, name: " React" },
    { id: "img4", src: mui, name: " Material Ui" },
    { id: "img5", src: boot, name: " Bootstrap" },
    { id: "img6", src: tail, name: " Tailwind css" },
  ];
  const row2 = [
    { id: "img7", src: node, name: " Node Js" },
    { id: "img8", src: exp, name: "   Express Js" },
    { id: "img9", src: mongo, name: " Mongo DB" },
    { id: "img10", src: redux, name: " Redux" },
    { id: "img11", src: vite, name: " Vite" },
    { id: "img12", src: figma, name: " Figma" },
  ];
  const row3 = [
    { id: "img13", src: javasct, name: " JavaScript" },
    { id: "img14", src: java, name: " Java" },
    { id: "img15", src: python, name: " Python" },
    { id: "img16", src: selenium, name: " Selenium" },
    { id: "img17", src: jest, name: " Jest" },
    { id: "img18", src: postman, name: " Postman" },
  ];
  const row4 = [
    { id: "img19", src: git, name: " GitHub" },
    { id: "img20", src: docker, name: " Docker" },
    { id: "img21", src: aws, name: " Aws" },
    { id: "img22", src: azur, name: " Azure" },
    { id: "img23", src: jira, name: " Jira" },
    { id: "img24", src: ga, name: " Google Analytics" },
  ];

  return (
    <div className={style.skill}>
      <div className={style.container}>
        <div className={style.shine}>SKILLS</div>
        <div className={style.wrapper}>
          <div className={style.marquee}>
            <div className={style.marquee1}>
              {row1.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.marquee1}>
              {row1.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.marquee}>
            <div className={style.marquee2}>
              {row2.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.marquee2}>
              {row2.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.marquee}>
            <div className={style.marquee3}>
              {row3.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.marquee3}>
              {row3.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.marquee}>
            <div className={style.marquee4}>
              {row4.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.marquee4}>
              {row4.map((el) => (
                <div
                  className={style.skilllogos}
                  style={{
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    width: "auto",
                    height: "7vh",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img src={el.src} />
                  <div>
                    <span>{el.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
