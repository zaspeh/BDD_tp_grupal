import React, { useState } from 'react';
import { GenericForm } from '../GenericForm';
import { useActionData, useLocation, useNavigate } from 'react-router-dom';

export const SqlEditForm = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state.user);

  const userInfo = state.user;

  console.log(userInfo);

  console.log(`The user is: ${userInfo.username}`)

  const updateUserInfo = (formData) => {

    Object.keys(formData).forEach(key => {
      if (formData[key] !== '') {
        userInfo[key] = formData[key];
      }
    })
  }

  const handleSubmit = (formData) => {
    // console.log(formData);
    updateUserInfo(formData);

    fetch(`http://localhost:3000/sql/update/${userInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(userInfo)
    }).then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          alert(errorData.error || 'Something went wrong :c');
        })
      }
      return response.json();
    })
    .then(data => {
      alert('User entry updated succesfully!');
      navigate('/showDb');
      console.log("Response: ");
      console.log(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    });
  }

  return (
    <div className='h-full border border-red-500 flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold text-2xl'>SQL Update entry from user: {userInfo.username}</h1>
      <GenericForm handleSubmit={handleSubmit} requiredAll={false}/>
    </div>
  );
}

export default SqlEditForm;