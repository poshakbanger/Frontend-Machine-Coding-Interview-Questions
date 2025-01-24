import React, { useState } from "react";
import Modal from "./Modal";

const MainApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Modal Title"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default MainApp