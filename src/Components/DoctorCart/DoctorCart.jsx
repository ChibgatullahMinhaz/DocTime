import React from "react";
import docImage from "../../assets/doctor-sample.png";
import RegIcom  from '../../assets/rgicon.png'
import { NavLink } from "react-router";



const DoctorCart = ({ doctor }) => {
  const {
    buttonText,
    registrationNumber,
    experience,
    doctorImage,
    speciality,
    education,
    name,
  } = doctor;
  return (
    <div className="card bg-base-100 text-left shadow-sm self-auto">
      <figure className="p-4 place-items-center">
        <img src={doctorImage} loading="lazy" alt={name} className="h-[300px] w-full object-cover bg-center items-stretch rounded-lg" />
      </figure>
      <div className="card-body">
        <div className="flex justify-around items-center gap-x-6 text-center">
          <p className="p-1.5 font-semibold bg-amber-100 text-red-600 rounded-lg">
            Available
          </p>
          <p className=" p-1.5 text-blue-600 rounded-xl bg-indigo-100 font-semibold">
            {experience} experience
          </p>
        </div>
        <h1 className="font-black text-xl">{name}</h1>
        <p className="font-semibold text-lg text-gray-600">{education}</p>
        <div className="my-3 border-b-2 border-dashed border-gray-300"></div>
        <h1 className="flex gap-x-1 text-gray-600 font-semibold">
            <img src={RegIcom} alt={name} />
            Reg No: {registrationNumber}</h1>
        <div className="card-actions justify-center">
            <NavLink to={`/doctorDetails/${registrationNumber}`}>
            <button className="btn btn-outline  btn-primary">{buttonText}</button>

            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DoctorCart;
