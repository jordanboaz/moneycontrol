import { useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'
export function TransactionsTable() {
  useEffect(() => {
    api.get('/api/transactions')
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
          <tr>
            <td>Software developing</td>
            <td className="deposit">$7.000,00</td>
            <td>Programming</td>
            <td>20/12/2021</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">-$7.000,00</td>
            <td>Programming</td>
            <td>20/12/2021</td>
          </tr>

          <tr>
            <td>Software developing</td>
            <td>$7.000,00</td>
            <td>Programming</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}