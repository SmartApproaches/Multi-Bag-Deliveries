import React from 'react';

const FormHeader = ({ title = 'Book a Delivery', subtitle = 'Fill in the details below to book your parcel delivery.' }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm md:text-base text-gray-500">{subtitle}</p>
    </div>
  );
};

export default FormHeader;
