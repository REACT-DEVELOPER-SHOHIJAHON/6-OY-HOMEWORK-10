import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Blog from "./blog/Blog";

const RouterController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
};

export default RouterController;
