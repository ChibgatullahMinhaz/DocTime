import React, { useContext, useEffect, useState } from "react";
import { DoctorContext, LoaderContext } from "../CreatedContaxt/CreatedContaxt";

const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const {setLoader} =useContext(LoaderContext)
  const {loader} =useContext(LoaderContext)
  useEffect(() => {
      const fetchDoctorsData = async () => {
      try{
        setLoader(true);
        const res = await fetch("/doctors.json") ;
        const data = await res.json();
        setDoctors(data);
      }catch(error){
        console.log(error);
      }finally{
        setLoader(false)
      }
      }
    fetchDoctorsData();

  }, [setLoader]);

  return (
    <DoctorContext.Provider value={{ doctors, loader, setLoader, setDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
