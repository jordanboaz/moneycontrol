import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Software Development',
          type: 'deposit',
          category: 'work',
          value: 22000,
          createdAt: new Date('2021-02-17 00:00:00')
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'housing',
          value: 2200,
          createdAt: new Date('2021-02-22 00:00:00')
        },
        {
          id: 3,
          title: 'Doordash',
          type: 'withdraw',
          category: 'restaurant',
          value: 50,
          createdAt: new Date('2021-02-23 00:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })


  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
