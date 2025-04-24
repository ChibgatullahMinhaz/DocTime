import React, { useEffect, useState } from "react";
import DoctorCart from "../DoctorCart/DoctorCart";

const Doctors = ({ doctors }) => {
  const [showDocCart, setShowDocCart] = useState(false);
  const [allDocs, setAllDocs] = useState(doctors);

  useEffect(() => {
    if (showDocCart) {
      setAllDocs(doctors);
    } else {
      setAllDocs(doctors.slice(0, 6));
    }
  }, [doctors, showDocCart]);

  const handleShowMoreDocs = () => {
    setShowDocCart(!showDocCart);
    if (showDocCart) {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-3xl md:mt-8 mb-5">
          Our Best Doctors
        </h1>
        <p className="font-normal text-sm text-center w-4/5 mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center lg:p-5 xl:p-8 gap-4 max-w-10/12 mx-auto ">
        {allDocs.map((doctor, index) => (
          <DoctorCart key={index} doctor={doctor}></DoctorCart>
        ))}
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleShowMoreDocs}
          className="btn btn-primary text-center rounded-xl"
        >
          {showDocCart ? "Show Less" : "View All Doctors"}
        </button>
      </div>
    </>
  );
};

export default Doctors;
