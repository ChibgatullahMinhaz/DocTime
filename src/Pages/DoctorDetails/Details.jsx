import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import RegIcom from "../../assets/rgicon.png";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { addDoctor } from "../../utilities/utilities";

const Details = ({ doc }) => {
  const [available, setAvailable] = useState(false);
  const navigate = useNavigate();
  const {
    designation,
    registrationNumber,
    experience,
    consultationFee,
    workingPlace,
    availability,
    doctorImage,
    speciality,
    education,
    name,
  } = doc;

  useEffect(() => {
    if (availability.length > 0) {
      setAvailable(true);
    }
  }, [availability]);

  const handleBook = () => {
    const isDoctor = addDoctor(registrationNumber, "doctor");
    if (isDoctor) {
      toast.success('Appointment schedule For'+ " " +name);
      setTimeout(() => {
        navigate("/My-Bookings");
      }, 100);
    } else{
      toast.error('Appointment Already Schedule For Today')
    }
  };
  return (
    <>
      <div className="bg-white p-4 text-center shadow-lg rounded-2xl mb-4">
        <h1 className="text-center font-bold text-3xl">
          {" "}
          Doctor’s Profile Details
        </h1>
        <p className="w-4/5 mx-auto text-gray-500  inter my-3">
          View detailed information about your doctor, including their
          expertise, experience, education, and patient ratings. Easily explore
          their availability and book an appointment with confidence.
        </p>
      </div>

      {/* details */}
      <div className="bg-white  shadow-lg rounded-2xl flex flex-col items-center lg:flex-row p-4 lg:gap-x-4 mb-4">
        <div className=" lg:max-w-4/10">
          <img
            src={doctorImage}
            alt={name}
            className=" w-full md:max-w-full max-h-[350px] md:h-[500px] rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h1 className="font-bold md:text-3xl text-2xl my-2">{name}</h1>
          <h1 className="font-semibold text-lg text-gray-500">{education}</h1>
          <h1 className="font-semibold text-lg text-gray-500">{designation}</h1>
          <div className="my-3">
            <p className="font-semibold text-lg text-gray-500">Working At:</p>
            <p className="font-semibold text-xl md:text-2xl">{workingPlace}</p>
          </div>
          <div className="border-b-2 border-dashed border-gray-300 my-3"></div>

          <h1 className="flex gap-x-1 text-gray-600 font-semibold">
            <img src={RegIcom} alt={registrationNumber} />
            Reg No: {registrationNumber}
          </h1>
          <div className="border-b-2 border-dashed border-gray-300 my-3"></div>
          {/* Availability */}
          <h1 className="flex gap-x-3 items-center my-3 ">
            Availability:
            {availability.map((day, index) => (
              <span
                key={index}
                className="p-2 rounded-2xl bg-amber-50 text-red-400 "
              >
                {day}
              </span>
            ))}
          </h1>
          {/* Consultation Fee */}
          <h1 className="font-black mt-2">
            Consultation Fee:
            <span className="text-indigo-400">
              {" "}
              {consultationFee} TK + Including Vat
            </span>{" "}
          </h1>
        </div>
      </div>

      <div className="bg-white p-4 text-center shadow-lg rounded-2xl">
        <h1 className="text-center font-bold text-2xl">Book an Appointment</h1>
        <div className="border-b-2 border-dashed border-gray-300 my-3"></div>
        <div className="flex justify-between items-center mb-3">
          <h1>Availability</h1>
          <h1 className="bg-green-300 text-orange-700 p-2 rounded-2xl">
            {available ? "Doctor Available Today" : "Not Available Today"}
          </h1>
        </div>
        <div className="border-b-2 border-dashed border-gray-300 my-3"></div>

        <h1 className="bg-green-100 text-orange-400 p-2 rounded-2xl flex  items-center gap-x-2">
          <AiOutlineExclamationCircle />
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </h1>
        <div className="w-4/5 mx-auto my-5">
          <button
            onClick={handleBook}
            className="btn  btn-primary w-full rounded-2xl"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
