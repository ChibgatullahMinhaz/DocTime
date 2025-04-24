import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";
import DoctorProvider from "./Contaxt/DoctorProvider/DoctorProvider.jsx";
import LoaderProvider from "./Contaxt/LoaderProvider/LoaderProvider.jsx";
import BlogsProvider from "./Contaxt/BlogsContext/BlogsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <DoctorProvider>
        <BlogsProvider>
        <RouterProvider router={router} />
        </BlogsProvider>
      </DoctorProvider>
    </LoaderProvider>
  </StrictMode>
);
