import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles'
interface NewTransactinonalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactinonalModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title, value, type, category
    }

    api.post('/transactions', data)
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register new transaction</h2>

        <input placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
        <input placeholder="Value" type="number" value={value} onChange={event => setValue(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox isActive={type === 'deposit'} type="button" onClick={() => setType('deposit')} activeColor="green">
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox isActive={type === 'withdraw'} type="button" onClick={() => setType('withdraw')} activeColor="red">
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Category" value={category} onChange={event => setCategory((event.target.value))} />

        <button type="submit" >Submit</button>
      </Container>
    </Modal >
  )
}