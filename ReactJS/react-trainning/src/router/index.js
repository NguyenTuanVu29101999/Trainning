import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import TodoList from "../pages/TodoList";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "contact", component: <Contact /> },
  { path: "about", component: <About /> },
  { path: "todolist", component: <TodoList /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
