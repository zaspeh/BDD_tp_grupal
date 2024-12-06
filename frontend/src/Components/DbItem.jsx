import React from "react"
import { useState } from 'react';
import UserModal from './UserModal';
import { FaInfoCircle } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const  DbItem = ({dbEntry, dbType}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  // No Sql
  const handleEditNoSql = () => {
    if (window.confirm("Are you sure you want to edit this entry?")) {
      navigate('/editNoSqlForm', {state: {user: dbEntry}});
    }
  }

  // Sql
  const handleEditSql = () => {
    if (window.confirm("Are you sure you want to edit this entry?")) {
      navigate('/editSqlForm', {state: {user: dbEntry}});
    }
  }

  // No Sql

  const handleDeleteNoSql = () => {
      
      if (window.confirm("Are you sure you want to delete this entry?")) {
        fetch(`http://localhost:3000/nosql/delete/${dbEntry._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log("Response: ");
          console.log(response);
          closeModal();
          // window.location.reload();
        }).catch(error => {
          console.log("Error: ");
          console.log(error);
        });
      }
  }

  const handleDeleteSql = () => {

    if (window.confirm("Are you sure you want to delete this entry?")) {
      fetch(`http://localhost:3000/sql/delete/${dbEntry.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log("Response: ");
        console.log(response);
        closeModal();
        window.location.reload();
      }).catch(error => {
        console.log("Error: ");
        console.log(error);
      });
    }

  }


  const openModal = () => {
    console.log("Open modal");
    setModalIsOpen(true);
  }

  const closeModal = () => {  
    console.log("Close modal");
    setModalIsOpen(false);
  }

  return (
    <tr>
      <td className="border p-1 text-center">{dbType == "sql" ? dbEntry.id : dbEntry._id}</td>
      <td className="border p-1 text-center">{dbEntry.username}</td>
      <td className="border p-1 text-left">{dbEntry.email}</td>
      <td className="border p-1 text-center">
        <div className="flex p-1 items-center justify-evenly">
          <button onClick={openModal}><FaInfoCircle /></button>
          <button className="" onClick={dbType == "sql" ? handleEditSql : handleEditNoSql}><FaEdit /></button>
          <button className="" onClick={dbType == "sql" ? handleDeleteSql : handleDeleteNoSql}><FaTrashCan /></button>
        </div>
      </td>

      <UserModal isOpen={modalIsOpen} closeModal={closeModal} user={dbEntry} />
    </tr>
  )
}

export default DbItem;