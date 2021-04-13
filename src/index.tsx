import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return data;
    })

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transation 1',
          amount: 400,
          type: 'deposit',
          category: 'Restaurant',
          createdAt: new Date()
        }
      ]
    })


  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
