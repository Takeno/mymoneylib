import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Amount from './Amount';


export default class ListHeader extends Component {
    render() {
        const { income, outcome } = this.props;

        return (
            <Container>
                <Row>
                    <Title>Entrate:</Title>
                    <Title><Amount amount={income} /></Title>
                </Row>
                <Row>
                    <Title>Uscite:</Title>
                    <Title><Amount amount={outcome} /></Title>
                </Row>
                <LastRow>
                    <Title><Amount amount={income + outcome} /></Title>
                </LastRow>
            </Container>
        );
    }
}

const Container = styled.View`
    backgroundColor: white;
    padding: 10px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const LastRow = Row.extend`
    justify-content: flex-end;
`;

const Title = styled.Text`
    font-size: 16px;
`;