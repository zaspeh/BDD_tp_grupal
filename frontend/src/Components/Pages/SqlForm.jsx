import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';



export const SqlForm = () => {

  const handleSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className='h-full border border-red-500 flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold text-2xl'>SQL database data injection form</h1>
      <GenericForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SqlForm;