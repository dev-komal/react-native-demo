module.exports = {
    customers: [
      { id: '1', name: 'John Doe', email: 'john@example.com' }
    ],
    accounts: [
      { id: '1', customerId: '1', accountNumber: '123456789', balance: 1500, currency: 'USD' }
    ],
    transactions: [
      { id: '1', accountId: '1', type: 'DEBIT', amount: 50, description: 'Grocery', date: '2025-07-25' },
      { id: '2', accountId: '1', type: 'CREDIT', amount: 100, description: 'Salary', date: '2025-07-24' },
      { id: '3', accountId: '1', type: 'DEBIT', amount: 20, description: 'Taxi', date: '2025-07-23' }
    ]
  }
  