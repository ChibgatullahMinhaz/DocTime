import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Roots from "../Layouts/Roots/Roots";
import NotFound from "../Pages/Error/NotFound";
import DocDetails from "../Pages/DoctorDetails/DocDetails";
import BookingPage from "../Pages/BookingPage/BookingPage";
import Blogs from "../Pages/Blog/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/Blogs",
        Component: Blogs,
      },
      {
        path: "/My-Bookings",
        element: <BookingPage></BookingPage>,
      },
      {
        path: "/doctorDetails/:docRegId",
        Component: DocDetails,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
export default router;
