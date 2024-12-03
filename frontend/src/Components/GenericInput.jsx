import React from "react"

export const  GenericInput = ({name, type, placeholder, handleChange, required}) => {
  return (
    <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={handleChange} 
        className="mx-2 my-3 h-8 w-72 rounded-md p-2" 
        {...(required ? { required: true } : {})}
        />
  )
}

export default GenericInput;