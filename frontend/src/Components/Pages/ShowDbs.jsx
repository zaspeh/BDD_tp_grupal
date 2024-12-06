import React from 'react';
import { useState, useEffect } from 'react';
import { DbItem } from '../DbItem';


export const ShowDbs = () => {

  const [sqlData, setSqlData] = useState([]);
  const [mongoData, setMongoData] = useState([]);

  useEffect(() => {
    // SQL Data fetch
    fetch('http://localhost:3000/sql/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      console.log("Sql Response: ");
      console.log(data);
      setSqlData(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    })

    // Mongo Data fetch
    fetch('http://localhost:3000/noSql/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      console.log("MongoDB Response: ");
      console.log(data);
      setMongoData(data);
    }).catch(error => {
      console.log("Error: ");
      console.log(error);
    })

  }, []);

  return (
    <div className='h-fit flex justify-between'>
      <div className='border border-red-500 w-full'>
        <h1 className='text-center m-2'>NoSql Database</h1>
        <table className='border border-500-red w-full'>
          <tr className='border'>
            <th className='border'>ID</th>
            <th className='border'>Username</th>
            <th className='border'>Email</th>
            <th className='border'>Actions</th>
          </tr>
          <tbody>
            {mongoData.map((item) => {
              console.log("Item Id: ", item._id);
              return <DbItem dbEntry={item} dbType={"nosql"}/>
            })}
          </tbody>
        </table>
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
          <tbody>
            {sqlData.map((item) => {
              return <DbItem dbEntry={item} dbType={"sql"} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowDbs;