import moment from 'moment';

const DATA = [{
    date: new Date('2018-04-18T21:10:14'),
    category: 'Food',
    description: 'RomaJS dinner',
    amount: -50.29
}, {
    date: new Date('2018-04-18T10:30:14'),
    category: 'Luck',
    description: 'Lottery ticket',
    amount: 20.00
}, {
    date: new Date('2018-04-19T10:30:13'),
    category: 'Salary',
    description: '',
    amount: 800.00
}, {
    date: new Date('2018-04-19T12:30:14'),
    category: 'Shopping',
    description: 'New React T-Shirt',
    amount: -50.00
}];

const transactions = [];

for(let i = 0; i < 100; i++) {
    const t = Object.assign({}, DATA[Math.floor(Math.random() * DATA.length)]);
    t.date = moment(t.date).subtract(Math.random() * 6, 'days').toDate();

    transactions.push(t);
}

export default transactions;