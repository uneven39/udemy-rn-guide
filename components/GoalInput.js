import React, {useState} from 'react';
import {
    StyleSheet,
    Modal,
    Button,
    TextInput,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    modal: {

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
    },
    button: {
        width: '40%',
    }
});

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const submitInputHandler = () => {
        props.onSubmit(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal
            visible={props.show}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="text"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View
                    style={styles.buttonsContainer}
                >
                    <View
                        style={styles.button}
                    >
                        <Button
                            title="cancel"
                            color="orange"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View
                        style={styles.button}
                    >
                        <Button
                            title="add"
                            onPress={submitInputHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
