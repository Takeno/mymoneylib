import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import Amount from './Amount';

const TransactionHeader = props => {
    const {section} = props;
    const amount = section.data.reduce((a, t) => a + t.amount, 0);
    return (
        <Container>
            <Header>{section.title}</Header>
            <Amount amount={amount} />
        </Container>
    );
}

export default TransactionHeader;

const Container = styled.View`
    margin-top: 10px;
    background-color: white;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    borderBottomWidth: 1px;
    borderBottomColor: #AAA;
`;

const Header = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;