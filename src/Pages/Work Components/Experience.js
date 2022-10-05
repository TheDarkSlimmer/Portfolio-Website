import { Fragment } from "react";
import ExperienceStyles from '../Work Components/WorkStyles.module.css'

export default function Experience(props){

    const experienceInfo = [
      {
        title:'iejdifie',
        date:'June 14, 2022 -  present',
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        title:'iejdifie',
        date:'June 14, 2022 -  present',
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        title:'iejdifie',
        date:'June 14, 2022 -  present',
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ];

    return (
      <Fragment>
        <div className={ExperienceStyles.experienceMain}>
          <h1>Experience</h1>
          {experienceInfo.map(function (data, index) {
            return (
              <>
                <div className={ExperienceStyles.experienceContainer} key={index}>
                  <div className={ExperienceStyles.experienceHeaders}>
                    <h4>{data.title}</h4>
                    <h5>{data.date}</h5>
                  </div>
                  <div className={ExperienceStyles.experienceDescription}>
                    <p>{data.paragraphs}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Fragment>
    );
}