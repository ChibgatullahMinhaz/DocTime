import React from "react";

const BookedAppointment = ({ data, handleRemove }) => {
  const { name, designation, registrationNumber, education, consultationFee } =
    data;

  return (
    <>
      <div className="bg-white rounded-lg p-2 md:p-4 my-4">
        <h1 className="text-2xl md:text-3xl  font-semibold">{name}</h1>
        <p className="text-lg text-gray-500 mt-2 flex flex-col md:flex-row md:justify-between items-center">
          <span>
            {education} {designation}
          </span>
          <span>Appointment Fee : {consultationFee} Taka + Vat</span>
        </p>
        <div className="border-b-2 border-dashed border-gray-400 my-2"></div>
        <button
          onClick={()=> handleRemove(registrationNumber)}
          className="btn btn-outline btn-error w-full rounded-2xl"
        >
          Cancel Appointment
        </button>
      </div>
    </>
  );
};

export default BookedAppointment;
