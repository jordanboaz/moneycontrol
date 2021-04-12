import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Register new transaction</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}