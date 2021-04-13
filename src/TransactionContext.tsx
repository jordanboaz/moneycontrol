import React, { createContext, useEffect, useState } from 'react'
import { api } from './services/api';


interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw',
  category: string;
  value: number;
  createdAt: string;
}

interface TransactionProviderProps {
  children: React.ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))

  }, [])

  async function createTransaction(transaction: TransactionInput) {

    await api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}