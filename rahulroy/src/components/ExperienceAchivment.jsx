import style from "../Styling/experience.module.css";
export default function ExperienceAchivment() {
  return (
    <div className={style.exper}>
      {/* <div>Milestons Achived</div> */}
      <div className={style.heading}>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          MILESTONE'S ACHIVED
        </span>
      </div>
      <div class={style.timeline}>
        <div class={style.outer}>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Student Grad @ SIT</h3>
              <p>
                I graduated in a 2022 with an impressive CGPA of 8.43. During my
                time at college, I served as a{" "}
                <a
                  href="https://gdsc.community.dev/siliguri-institute-of-technology-darjeeling-india/"
                  style={{ color: "#F26E01" }}
                >
                  core team member of Google DSC SIT,
                </a>{" "}
                where I organized engaging seminars on cutting-edge
                technologies, attracting over 100 participants each. These
                events not only fostered a culture of learning but also
                showcased my leadership and organizational skills.I also had the
                privilege of being a part of{" "}
                <a style={{ color: "#F26E01" }}>North Bengal Innovation Hub</a>{" "}
                as a student partner, where I collaborated with fellow
                innovators to explore and develop creative solutions to
                real-world challenges.Additionally, I completed a rigorous{" "}
                <a style={{ color: "#F26E01" }}>cyber security</a> internship at{" "}
                <a style={{ color: "#F26E01" }}>Devtown,</a> where I honed my
                skills in protecting digital assets and ensuring robust online
                safety measures.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>System Engineer @ TCS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Developer @ TCS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Developer @ TCS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Title 5</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
