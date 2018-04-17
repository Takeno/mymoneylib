import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Amount from './Amount';


const TransactionRow = props => (
    <Row>
        <Icon source={{uri: 'http://placehold.it/40x40'}} />
        <Infos>
            <Category>{props.transaction.category}</Category>
            <Description>{props.transaction.description}</Description>
        </Infos>
        <Amount amount={props.transaction.amount} />
    </Row>
);
export default TransactionRow;

const Row = styled.View`
    background-color: white;
    padding: 8px 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled.Image`
    width: 40px;
    height: 40px;
`;

const Infos = styled.View`
    flex: 1;
    margin: 0 8px;
`;

const Category = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

const Description = styled.Text`
    font-size: 12px;
`;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
