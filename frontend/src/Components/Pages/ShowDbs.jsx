import React from 'react';
import { useState, useEffect } from 'react';
import { DbItem } from '../DbItem';


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
    <div className='h-fit flex justify-between'>
      <div className='w-full'>
        <h1>Mongo Database</h1>
        {/* <ul>
          {mongoData.map((item) => {
            return <li key={item._id}>{item.name}</li>
          })}
        </ul> */}
      </div>
      <div className='border border-red-500 w-full'>
        <h1 className='text-center m-2'>SQL Database</h1>
        <table className='border border-500-red w-full'>
          <tr className='border'>
            <th className='border'>ID</th>
            <th className='border'>Username</th>
            <th className='border'>Email</th>
            <th className='border'>Actions</th>
          </tr>
          {sqlData.map((item) => {
            return <DbItem dbEntry={item} />
          })}
        </table>
      </div>
    </div>
  );
}

export default ShowDbs;