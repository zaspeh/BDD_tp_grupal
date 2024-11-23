import React, { useState } from 'react';
import GenericInput from './GenericInput';




export const GenericForm = ({handleSubmit}) => {
// La password debería ser un hash más que la contraseña en sí
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
  }
  
  return (
      <form onSubmit={onSubmit} className='flex flex-col'>
        <GenericInput name={"name"} type={"text"} placeholder={"Name"} handleChange={handleChange} /> 
        <GenericInput name={"lastName"} type={"text"} placeholder={"Last Name"} handleChange={handleChange} />
        <GenericInput name={"username"} type={"text"} placeholder={"Username"} handleChange={handleChange} />
        <GenericInput name={"email"} type={"email"} placeholder={"Email"} handleChange={handleChange} />
        <GenericInput name={"password"} type={"password"} placeholder={"Password"} handleChange={handleChange} />
        <GenericInput name={"phoneNumber"} type={"text"} placeholder={"Phone Number"} handleChange={handleChange} />
        <GenericInput name={"dateOfBirth"} type={"date"} handleChange={handleChange} />
        <button type="submit" className='h-10 w-40 border border-red-500 self-center my-5 rounded-lg hover:bg-headerBlack'>
            Submit
        </button>
      </form>
  );
}

export default GenericForm;