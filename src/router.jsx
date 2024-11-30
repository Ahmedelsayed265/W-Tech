import About from "./routes/About";
import BlogDetails from "./routes/BlogDetails";
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import WorkDetails from "./routes/WorkDetails";
import Works from "./routes/Works";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/works/:id",
    element: <WorkDetails />,
  },
];

export default router;
