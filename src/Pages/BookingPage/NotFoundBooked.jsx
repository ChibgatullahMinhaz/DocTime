import React from "react";
import { NavLink } from "react-router";
const NotFoundBooked = () => {
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        You Have Not Booked Any Appointment Yet{" "}
      </h1>
      <p className="text-center text-gray-500 mt-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="flex justify-center items-center mt-4 lg:mt-8">
        <NavLink to='/'>
          {" "}
          <button className="btn btn-primary">Book An Appointment</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundBooked;
