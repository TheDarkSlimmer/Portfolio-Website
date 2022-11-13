import { Fragment, useContext } from "react";
import projectStyles from "../Work Components/WorkStyles.module.css";
import { ProjectsContext } from "../../Context/ProjectsContext";

export default function Projects(props) {
  const { projectInfo } = useContext(ProjectsContext);

  return (
    <Fragment>
      <div className={projectStyles.projectMain}>
        <h1>Projects</h1>
        {projectInfo.map(function (data, index) {
          return (
              <div className={projectStyles.projectContainer} key={index}>
                <div className={projectStyles.projectHeaders}>
                  <h4>{data.title}</h4>
                  <h5>{data.date}</h5>
                </div>
                <div className={projectStyles.projectDescription}>
                  <p>{data.description}</p>
                </div>
              </div>
          );
        })}
      </div>
    </Fragment>
  );
}
