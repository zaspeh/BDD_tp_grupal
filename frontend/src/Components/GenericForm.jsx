import React, { useState } from 'react';




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
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        <input type="date" name="dateOfBirth" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
  );
}

export default GenericForm;