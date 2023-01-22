import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import NotFound from "../Pages/NotFound/NotFound";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> },
      { path: "jobs", element: <Jobs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
