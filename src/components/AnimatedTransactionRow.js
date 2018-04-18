import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import TransactionRow from './TransactionRow';

export default class AnimatedTransactionRow extends Component {
    state = {
        value: new Animated.Value(1)
    };

    onPress() {
        Animated.timing(
            this.state.value,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start();
    }

    render() {
        const animatedStyles = {
            height: this.state.value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
                extrapolate: 'clamp',
            }),
            opacity: this.state.value,
            transform: [
                { scale: this.state.value },
                {
                    rotate: this.state.value.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['35deg', '0deg'],
                        extrapolate: 'clamp',
                    })
                }
            ],
        }

        return (
            <TouchableOpacity onPress={() => this.onPress()}>
                <Animated.View style={animatedStyles}>
                    <TransactionRow {...this.props} />
                </Animated.View>
            </TouchableOpacity>
        );
    }
}
