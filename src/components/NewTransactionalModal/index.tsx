import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import { Container } from './styles'
interface NewTransactinonalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactinonalModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container>
        <h2>Register new transaction</h2>

        <input placeholder="Title" />
        <input placeholder="Value" type="number" />
        <input placeholder="Category" />

        <button type="submit" >Submit</button>
      </Container>
    </Modal >
  )
}