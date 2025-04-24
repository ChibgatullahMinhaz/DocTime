import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { DoctorContext } from '../../Contaxt/CreatedContaxt/CreatedContaxt';
import DocNotFound from './DocNotFound';
import Details from './Details';

const DocDetails = () => {
  const {doctors} = useContext(DoctorContext)
  const {docRegId} = useParams()
 const findDoc= doctors.find((doc) => doc.registrationNumber == docRegId)
    return (
        <div>
            {
                findDoc ? (
                    <Details doc ={findDoc}></Details>
                ) : (
                    <DocNotFound></DocNotFound>
                )
            }
        </div>
    );
};

export default DocDetails;