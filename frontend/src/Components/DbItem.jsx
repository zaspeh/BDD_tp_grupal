import React from "react"
import { useState } from 'react';
import UserModal from './UserModal';

export const  DbItem = ({dbEntry}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    console.log("Open modal");
    setModalIsOpen(true);
  }

  const closeModal = () => {  
    console.log("Close modal");
    setModalIsOpen(false);
  }

  return (
    <div className="border rounded border-500-red flex">
      <p className="p-1">{dbEntry.id}</p>
      <p className="p-1">{dbEntry.username}</p>
      <p className="p-1">{dbEntry.email}</p>
      <button onClick={openModal}>Item info</button>
      <UserModal isOpen={modalIsOpen} closeModal={closeModal} user={dbEntry} />
    </div>
  )
}

export default DbItem;