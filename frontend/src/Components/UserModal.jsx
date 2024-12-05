import React from "react";
import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

ReactModal.setAppElement('#root');

export const UserModal = ({isOpen, closeModal, user}) => {

  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("Edit user");
    navigate('/editSqlForm', {state: {userId: user.id}});
  }

  const handleDelete = () => {
    fetch(`http://localhost:3000/sql/delete/${user.id}`, {
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
    })
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Information"
      className="self-center border border-2-500-red p-4 rounded-lg bg-backWhite text-richBlack"
      overlayClassName="fixed inset-0 bg-richBlack bg-opacity-50 flex items-center justify-center"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      >
        <h2 className="text-center mb-2">User info</h2>
        <p>Username: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Lastname: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Birthday: {user.birthday}</p>
        {/* <button onClick={closeModal}>Close</button> */}
        <div className="flex justify-around">
          <button className="border" onClick={handleDelete}>Delete</button>
          <button className="border" onClick={handleEdit}>Edit</button>
        </div>
    </ReactModal>
  )
}

export default UserModal;