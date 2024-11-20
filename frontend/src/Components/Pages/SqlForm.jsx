import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';



export const SqlForm = () => {

  const handleSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className='h-full border border-red-500'>
      <h1>SQL database data injection form</h1>
      <GenericForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SqlForm;