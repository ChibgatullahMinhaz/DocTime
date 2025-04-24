import React, { useContext ,useEffect} from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../../Components/Navber/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader";
import { DoctorContext,LoaderContext } from "../../Contaxt/CreatedContaxt/CreatedContaxt";
import { Toaster } from "react-hot-toast";

const Roots = () => {
  const { loader } = useContext(DoctorContext);
  const { setLoader } = useContext(LoaderContext);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    
     setTimeout(() => {
      setLoader(false);
    }, 200); 

  }, [location,setLoader ]);

  return (
    <div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Navbar></Navbar>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div className="bg-[#efefef] minHight md:p-4 lg:py-9 p-2">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Roots;