import AboutinfoStyles from "../About Components/Aboutinfo.module.css";

function Aboutinfo(props) {
  return (
    <div className={AboutinfoStyles.aboutBody}>
      <div className={AboutinfoStyles.paragraphs}>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}
export default Aboutinfo;
