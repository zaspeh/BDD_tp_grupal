import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';
import { useLocation } from 'react-router-dom';

export const SqlEditForm = () => {
  
  const { state } = useLocation();

  const userId = state.userId;

  console.log(`The user id is: ${userId}`)

  const handleSubmit = (formData) => {
    console.log('Form data submitted');
    console.log(formData);

    fetch(`http://localhost:3000/sql/update/${userId}`, {
      method: 'PUT',
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
      alert('User entry updated succesfully!', data);
      console.log("Response: ");
      console.log(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    });
  }

  return (
    <div className='h-full border border-red-500 flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold text-2xl'>SQL Update entry from user: {userId}</h1>
      <GenericForm handleSubmit={handleSubmit} requiredAll={false}/>
    </div>
  );
}

export default SqlEditForm;