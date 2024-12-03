import React from 'react';
import { useState, useEffect } from 'react';


export const ShowDbs = () => {

  const [sqlData, setSqlData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/sql/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      console.log("Response: ");
      console.log(data);
      setSqlData(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    })
  }, []);

  return (
    <div className='h-full border border-red-500'>
      <h1>This should show both databases together</h1>
    </div>
  );
}

export default ShowDbs;