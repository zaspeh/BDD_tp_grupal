import React, { useState } from 'react';
import GenericInput from './GenericInput';




export const GenericForm = ({handleSubmit, requiredAll}) => {
// La password debería ser un hash más que la contraseña en sí
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    birthday: ''
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
        <GenericInput name={"name"} type={"text"} placeholder={"Name"} handleChange={handleChange} required={requiredAll} /> 
        <GenericInput name={"lastname"} type={"text"} placeholder={"Last Name"} handleChange={handleChange} required={requiredAll}/>
        <GenericInput name={"username"} type={"text"} placeholder={"Username"} handleChange={handleChange} required={requiredAll}/>
        <GenericInput name={"email"} type={"email"} placeholder={"Email"} handleChange={handleChange} required={requiredAll}/>
        <GenericInput name={"password"} type={"password"} placeholder={"Password"} handleChange={handleChange} required={requiredAll} />
        <GenericInput name={"phone"} type={"text"} placeholder={"Phone Number"} handleChange={handleChange} required={requiredAll}/>
        <GenericInput name={"birthday"} type={"date"} handleChange={handleChange} required={requiredAll} />
        <button type="submit" className='h-10 w-40 border border-red-500 self-center my-5 rounded-lg hover:bg-headerBlack'>
            Submit
        </button>
      </form>
  );
}

export default GenericForm;