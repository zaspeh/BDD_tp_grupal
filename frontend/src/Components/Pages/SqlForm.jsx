import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';



export const SqlForm = () => {

  const handleSubmit = (formData) => {
    console.log('Form data submitted');
    console.log(formData);

    fetch('http://localhost:3000/sql/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          alert(errorData.error || 'Something went wrong :c');
        })
      }
      return response.json();
    })
    .then(data => {
      alert('User entry created succesfully', data);
      console.log("Response: ");
      console.log(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    });
  }

  return (
    <div className='h-full border border-red-500 flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold text-2xl'>SQL database data injection form</h1>
      <GenericForm handleSubmit={handleSubmit} requiredAll={true}/>
    </div>
  );
}

export default SqlForm;