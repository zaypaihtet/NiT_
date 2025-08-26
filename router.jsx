import { createBrowserRouter } from "react-router";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import ContactPage from "./src/pages/ContactPage";
import ProgramsPage from "./src/pages/ProgramsPage";
import BlogDetailPage from "./src/pages/BlogDetailPage";
import EventDetailPage from "./src/pages/EventDetailPage";
import EventsPage from "./src/pages/EventsPage";
import ProgramDetailPage from "./src/pages/ProgramDetailPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import BlogsPage from "./src/pages/BlogsPage";
import Layout from "./src/Layout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:slug",
        element: <EventDetailPage />,
      },
      {
        path: "/programs",
        element: <ProgramsPage />,
      },
      {
        path: "/programs/:slug",
        element: <ProgramDetailPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default router;
