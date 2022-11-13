import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProjectProvider from "./Context/ProjectsContext";
import ExperienceProvider from "./Context/ExperienceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExperienceProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </ExperienceProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
