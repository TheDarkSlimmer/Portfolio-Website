import skillStyles from "../About Components/Skills.module.css";

function Skills(props) {
  return (
    <>
      <h1 className={skillStyles.skillsHeader}>My Skills</h1>
      <div className={skillStyles.skillsContainer}>
        <div className={skillStyles.skills}>
          <span className={skillStyles.htmlTitle}>HTML</span>
          <div className={skillStyles.SkillBar}>
            <div className={skillStyles.htmlPercent}></div>
          </div>
        </div>
        <div className={skillStyles.skills}>
          <span className={skillStyles.CSSTitle}>CSS</span>
          <div className={skillStyles.SkillBar}>
            <div className={skillStyles.CSSPercent}>
            </div>
          </div>
        </div>
        <div className={skillStyles.skills}>
          <span className={skillStyles.javascriptTitle}>Javascript</span>
          <div className={skillStyles.SkillBar}>
            <div className={skillStyles.javascriptPercent}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
