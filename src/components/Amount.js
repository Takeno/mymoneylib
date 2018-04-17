import React from 'react'
import styled from "styled-components";
const AmountText = styled.Text`
  color: ${props => props.amount >= 0 ? 'green' : 'red'};
`;

const Amount = props =>
    <AmountText amount={props.amount}>€ {props.amount.toFixed(2)}</AmountText>;

export default Amount;
