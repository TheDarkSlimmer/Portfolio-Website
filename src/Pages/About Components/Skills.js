import skillStyles from "../About Components/Skills.module.css";

function Skills(props) {
  return (
    <div>
      <div className={skillStyles.skills}>
        <span className={skillStyles.htmlTitle}>HTML</span>
        <div className={skillStyles.htmlSkillBar}>
          <span className={skillStyles.htmlPercent}>
            <span className={skillStyles.htmlResult}>95%</span>
          </span>
        </div>
      </div>
      <div className={skillStyles.skills}>
        <span className={skillStyles.CSSTitle}>CSS</span>
        <div className={skillStyles.CSSSkillBar}>
          <span className={skillStyles.CSSPercent}>
            <span className={skillStyles.CSSResult}>95%</span>
          </span>
        </div>
      </div>
      <div className={skillStyles.skills}>
        <span className={skillStyles.javascriptTitle}>Javascript</span>
        <div className={skillStyles.javascriptSkillBar}>
          <span className={skillStyles.javascriptPercent}>
            <span className={skillStyles.javascriptResult}>95%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Skills;
