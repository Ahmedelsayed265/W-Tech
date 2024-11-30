import About from "./routes/About";
import BlogDetails from "./routes/BlogDetails";
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";

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
];

export default router;
