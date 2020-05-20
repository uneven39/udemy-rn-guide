import React, {useState} from 'react';
import {
    StyleSheet,
    Button,
    TextInput,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '50%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="text"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="add"
                onPress={props.onSubmit.bind(this, enteredGoal)}
            />
        </View>
    );
};

export default GoalInput;
