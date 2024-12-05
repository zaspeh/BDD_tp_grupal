import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';

export const NoSqlForm = () => {
  const handleSubmit = async (formData) => {
    console.log('Form data submitted to NoSQL');
    console.log(formData);

    try {
      const response = await fetch('http://localhost:3000/nosql/create', {  // Asegúrate de que la URL esté correcta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('NoSQL Data saved:', data);
    } catch (error) {
      console.error('Error saving to NoSQL DB:', error);
    }
  };

  return (
    <div className='h-full border border-red-500 flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold text-2xl'>NoSQL Database Data Injection Form</h1>
      <GenericForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default NoSqlForm;
