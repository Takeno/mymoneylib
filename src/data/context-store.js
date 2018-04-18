import React from 'react';

const {Provider, Consumer} = React.createContext();

export const withTransactions = Comp => props => (
  <Consumer>
    {
      ({transactions, addTransaction}) =>
        <Comp
          transactions={transactions}
          addTransaction={addTransaction} />
    }
  </Consumer>
);

export class TransactionProvider extends React.Component {
  state = {
    transactions: [],
    addTransaction: transaction => this.addTransaction(transaction)
  };

  addTransaction(transaction) {
    const transactions = this.state.transactions.concat([transaction]);

    this.setState({
      transactions
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}