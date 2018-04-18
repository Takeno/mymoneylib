import DEFAULT_TRANSACTIONS from './transactions';

let transactions = [].concat(DEFAULT_TRANSACTIONS);

export const getTransactions = () => transactions;
export const saveTransaction = transaction => transactions.push(transaction);