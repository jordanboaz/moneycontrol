import { useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'
import { useState } from 'react'

interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw',
  category: string;
  value: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))

  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>${transaction.value}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}



        </tbody>
      </table>
    </Container>
  )
}