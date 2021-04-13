import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'

import { Container } from './styles'

export function Sumary() {
  const { transactions } = useContext(TransactionContext);

  const total = transactions.reduce((acc, cur) => {
    if (cur.type === 'deposit') {
      return { ...acc, deposits: acc.deposits + cur.value, total: acc.total + cur.value }
    }
    return { ...acc, withdraws: acc.withdraws + cur.value, total: acc.total - cur.value };
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: "USD" }).format(total.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: "USD" }).format(total.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: "USD" }).format(total.total)}</strong>
      </div>
    </Container>
  )
}