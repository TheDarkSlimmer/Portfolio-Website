import { createContext, Fragment } from "react";
import Projects from "../Pages/Work Components/Projects";

export const ProjectsContext = createContext();

export default function ProjectProvider(props) {
  const projectInfo = [
    {
      title: "Guessing Game",
      date: "June 14, 2022",
      description:
        "This guessing game will generate a random number between 1 to 50. The generated number will be hidden behind the question mark. You job as the player is to guess the hidden number by typing your guesses in the empty box and then pressing the check button to check if your guess is the same number as the generated number. Your score will decrease as you keep guessing. You only have 20 guesses so try your best not to guess too much 😊. Goodluck and have fun. 🎊",
    },
  ];

  return (
    <Fragment>
      <ProjectsContext.Provider value={{ projectInfo }}>
        {props.children}
      </ProjectsContext.Provider>
    </Fragment>
  );
}
