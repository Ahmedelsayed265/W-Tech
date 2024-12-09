import About from "./routes/About";
import BlogDetails from "./routes/BlogDetails";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Privacy from "./routes/Privacy";
import ServiceDetails from "./routes/ServiceDetails";
import Terms from "./routes/Terms";
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
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/services/:id",
    element: <ServiceDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default router;
