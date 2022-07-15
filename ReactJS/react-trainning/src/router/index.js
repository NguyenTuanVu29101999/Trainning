import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "contact", component: <Contact /> },
  { path: "about", component: <About /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
