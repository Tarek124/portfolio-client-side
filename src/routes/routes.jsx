import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Educarion from "../componenets/Education/Educarion";
import Skills from "../componenets/Skills/Skills";
import Projects from "../componenets/Projects/Projects";
import Contact from "../componenets/Contact/Contact";
import AddNewProject from "../componenets/AddNewProject/AddNewProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      { path: "/education", element: <Educarion /> },
      { path: "/skills", element: <Skills /> },
      {
        path: "/project",
        element: <Projects />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/ae893f@d31k49dk", element: <AddNewProject /> },
    ],
  },
]);

export default router;
