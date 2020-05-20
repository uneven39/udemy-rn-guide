import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
});

const GoalItem = props => {
    return (
        <View style={styles}>
            <Text>{props.text}</Text>
        </View>
    );
}

export default GoalItem;
