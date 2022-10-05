import { Fragment } from "react";
import projectStyles from "../Work Components/WorkStyles.module.css";

const projectInfo = [
  {
    title: "Guessing Game",
    date: "June 14, 2022",
    description:
      "This guessing game will generate a random number between 1 to 50. The generated number will be hidden behind the question mark. You job as the player is to guess the hidden number by typing your guesses in the empty box and then pressing the check button to check if your guess is the same number as the generated number. Your score will decrease as you keep guessing. You only have 20 guesses so try your best not to guess too much 😊. Goodluck and have fun. 🎊",
  },
  {
    title: "Guessing Game",
    date: "June 14, 2022",
    description:
      "This guessing game will generate a random number between 1 to 50. The generated number will be hidden behind the question mark. You job as the player is to guess the hidden number by typing your guesses in the empty box and then pressing the check button to check if your guess is the same number as the generated number. Your score will decrease as you keep guessing. You only have 20 guesses so try your best not to guess too much 😊. Goodluck and have fun. 🎊",
  },
  {
    title: "Guessing Game",
    date: "June 14, 2022",
    description:
      "This guessing game will generate a random number between 1 to 50. The generated number will be hidden behind the question mark. You job as the player is to guess the hidden number by typing your guesses in the empty box and then pressing the check button to check if your guess is the same number as the generated number. Your score will decrease as you keep guessing. You only have 20 guesses so try your best not to guess too much 😊. Goodluck and have fun. 🎊",
  },
];

export default function Projects(props) {
  return (
    <Fragment>
      <div className={projectStyles.projectMain}>
        <h1>Projects</h1>
        {projectInfo.map(function (data, index) {
          return (
            <>
              <div className={projectStyles.projectContainer} key={index}>
                <div className={projectStyles.projectHeaders}>
                  <h4>{data.title}</h4>
                  <h5>{data.date}</h5>
                </div>
                <div className={projectStyles.projectDescription}>
                  <p>{data.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Fragment>
  );
}
