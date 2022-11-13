import { Fragment } from "react";
import { ExperienceContext } from "../../Context/ExperienceContext";
import ExperienceStyles from "../Work Components/WorkStyles.module.css";
import { useContext } from "react";

export default function Experience(props) {
  const { experienceInfo } = useContext(ExperienceContext);

  return (
    <Fragment>
      <div className={ExperienceStyles.experienceMain}>
        <h1>Experience</h1>
        {experienceInfo.map(function (data, index) {
          return (
            <div className={ExperienceStyles.experienceContainer} key={index}>
              <div className={ExperienceStyles.experienceHeaders}>
                <h4>{data.title}</h4>
                <h5>{data.date}</h5>
              </div>
              <div className={ExperienceStyles.experienceDescription}>
                <p>{data.paragraphs}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
