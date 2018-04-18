import {AsyncStorage} from 'react-native';
import DEFAULT_TRANSACTIONS from './transactions';

const STORAGE_KEY = '@transactions';

let transactions = [];

AsyncStorage.getItem(STORAGE_KEY)
    .then(data => {
        if(!data) {
            return;
        }

        transactions = JSON.parse(data);
    });

export const getTransactions = () => transactions;
export const saveTransaction = transaction => {
    transactions.push(transaction);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}