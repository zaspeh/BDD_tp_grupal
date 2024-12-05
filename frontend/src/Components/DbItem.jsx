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
    <tr>
      <td className="border p-1 text-center">{dbEntry.id}</td>
      <td className="border p-1 text-center">{dbEntry.username}</td>
      <td className="border p-1 text-left">{dbEntry.email}</td>
      <td className="border p-1 text-center"><button onClick={openModal}>Item info</button></td>
      <UserModal isOpen={modalIsOpen} closeModal={closeModal} user={dbEntry} />
    </tr>
  )
}

export default DbItem;