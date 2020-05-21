import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
});

const GoalItem = props => {
    return (
        <TouchableOpacity
            onPress={props.onDelete.bind(this, props.id)}
            activeOpacity={0.8}
        >
            <View style={styles}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;
