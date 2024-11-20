import React from "react"

export const  GenericInput = ({name, type, placeholder, handleChange}) => {
  return (
    <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={handleChange} 
        className="mx-2 my-3 h-8 w-72 rounded-md p-2" />
  )
}

export default GenericInput;