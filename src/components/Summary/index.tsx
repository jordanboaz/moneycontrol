import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'

import { Container } from './styles'

export function Sumary() {
  const { transactions } = useContext(TransactionContext);

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>- $500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>$500,00</strong>
      </div>
    </Container>
  )
}