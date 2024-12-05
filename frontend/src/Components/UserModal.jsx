import React from "react";
import ReactModal from 'react-modal';
import { useEffect } from 'react';

ReactModal.setAppElement('#root');

export const UserModal = ({isOpen, closeModal, user}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Information"
      className="self-center border border-2-500-red p-4 rounded-lg bg-white text-backWhite"
      overlayClassName="fixed inset-0 bg-richBlack bg-opacity-50 flex items-center justify-center"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}

      >
        <h2>User info</h2>
        <p>Username: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Lastname: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Birthday: {user.birthday}</p>
        <button onClick={closeModal}>Close</button>
    </ReactModal>
  )
}

export default UserModal;