import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import TransactionRow from './TransactionRow';

const TouchableTransactionRow = props => (
    <TouchableOpacity onPress={() => Share.share({message: 'message', title: 'title'})}>
        <TransactionRow {...props} />
    </TouchableOpacity>
);
export default TouchableTransactionRow;
