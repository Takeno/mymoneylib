import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Switch, Button, StyleSheet } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    padding: 10px 30px;
`;
const FormTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
const FormSection = styled.View`
   padding: 10px;
   background-color: #fff;
   border-radius: 5px;
`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
`;
const Input = styled.TextInput`
    padding: 4px;
    font-size: 16px;
    height: 30px;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
`;

class TransactionForm extends Component {
    state = {
        category: null,
        amount: '',
    }

    save() {
        const transaction = {
            amount: parseFloat(this.state.amount),
            category: this.state.category,
            description: this.state.description,
            date: new Date()
        };

        this.props.addTransaction(transaction);
        this.props.navigation.goBack();
    }

    render() {
        const { transaction } = this.props;

        return (
            <Container>
                <FormSection>
                    <FormTitle>Category</FormTitle>
                    <Row>
                        <Switch value={this.state.category === 'Food'} onValueChange={checked => (checked && this.setState({ category: 'Food' }))} />
                        <Text>Food</Text>
                    </Row>
                    <Row>
                        <Switch value={this.state.category === 'Shopping'} onValueChange={checked => (checked && this.setState({ category: 'Shopping' }))} />
                        <Text>Shopping</Text>
                    </Row>
                    <Row>
                        <Switch value={this.state.category === 'Salary'} onValueChange={checked => (checked && this.setState({ category: 'Salary' }))} />
                        <Text>Salary</Text>
                    </Row>

                    <FormTitle style={{marginTop: 30}}>Amount</FormTitle>
                    <Input
                        placeholder="Specify your amount"
                        keyboardType="numeric"
                        onChangeText={text => this.setState({ amount: text })}
                        value={this.state.amount} />

                    <FormTitle style={{marginTop: 30}}>Note</FormTitle>
                    <Input
                        onChangeText={text => this.setState({ description: text })}
                        value={this.state.description} />
                </FormSection>
                <Button title="Salva" onPress={() => this.save()} />
            </Container>
        );
    }
}

export default TransactionForm;
