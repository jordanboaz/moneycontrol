import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionalModal } from './components/NewTransactionalModal'
import { useState } from 'react';
import Modal from 'react-modal'

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


      <GlobalStyle />
      <NewTransactionalModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
    </>
  );
}