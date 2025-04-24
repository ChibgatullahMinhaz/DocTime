import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../Contaxt/CreatedContaxt/CreatedContaxt";
import { getDoctor, removeDoctor } from "../../utilities/utilities";
import BookChart from "../../Components/Chart/BookChart";
import BookedAppointment from "../../Components/BookedAppointment/BookedAppointment";
import toast from "react-hot-toast";
import NotFoundBooked from "./NotFoundBooked";

const BookingPage = () => {
  const { doctors } = useContext(DoctorContext);
  const [bookedDoctor, setBookedDoctor] = useState([]);

  useEffect(() => {
    const storedId = getDoctor("doctor");
    const findedData = doctors.filter((doctor) =>
      storedId.includes(doctor.registrationNumber)
    );
    setBookedDoctor(findedData);
  }, [doctors]);

  const handleRemove = (id) => {
    toast.error("Appointment Canceled");
    removeDoctor("doctor", id);
    const updatedAppointment = bookedDoctor.filter(
      (appointment) => appointment.registrationNumber !== id
    );
    setBookedDoctor(updatedAppointment);
  };
  return (
    <div>
      {bookedDoctor.length === 0 ? (
        <NotFoundBooked></NotFoundBooked>
      ) : (
        <>
          <BookChart storedData={bookedDoctor}></BookChart>{" "}
          <div className="mt-9">
            <h1 className="text-center font-bold text-2xl lg:text-4xl">
              My Today Appointments
            </h1>
            <p className="text-center text-gray-600 text-md mt-3">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
          {bookedDoctor.map((data) => (
            <BookedAppointment
              key={data.id}
              handleRemove={handleRemove}
              data={data}
            ></BookedAppointment>
          ))}
        </>
      )}
    </div>
  );
};

export default BookingPage;
