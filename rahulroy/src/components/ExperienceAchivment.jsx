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
              <h4>2018 - 2022</h4>
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
              <h4>Dec,2022 - May,2023</h4>
              <p>
                I developed internal website filters with JavaScript for custom
                searches and implemented efficient Python scripts to enhance
                automation for Android and iOS platforms. Collaborating within a
                cross-functional team, I helped establish India's first
                Automation R&D lab, boosting the quality execution rate by 71%
                and improving user satisfaction. Additionally, I automated the
                OEM-specific framework using Jenkins, Docker, and TestRail APIs,
                significantly streamlining the process.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Developer @ TCS</h3>
              <h4>Jun,2023 - Jan,2024</h4>
              <p>
                I developed custom search filters for an internal site using
                React and JavaScript, significantly enhancing functionality and
                user experience. By implementing UI/UX improvements based on
                user feedback and A/B testing, I achieved a 20% increase in user
                engagement. Collaborating closely within a cross-functional
                team, I worked with designers and product managers to translate
                wireframes and mockups into high-quality code. Additionally,
                interacted with foreign clients to ensure seamless integration
                and exceptional performance, fostering strong international
                relationships.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Developer @ TCS</h3>
              <h4>Feb,2024 - Present</h4>
              <p>
                I worked on the React UI component, implementing responsive
                design principles and ensuring cross-browser compatibility to
                enhance the user experience of our OTT platform users.
                Collaborating closely with backend developers, I integrated
                RESTful APIs to ensure seamless data flow and functionality,
                significantly improving the overall performance and user
                satisfaction of the OTT platform.{" "}
              </p>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.info}>
              <h3 class={style.title}>Developer @ Aspirational Organization</h3>
              <p>
                I have miles to go and I'm ready to write a new chapter in my
                career. If you'd like to be a part of this journey, please DM
                me. Your insights and guidance would be highly appreciated!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
