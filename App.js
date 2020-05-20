import React, { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = (enteredGoal) => {
        setGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: enteredGoal },
        ]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput
                onSubmit={addGoalHandler}
            />
            <FlatList
                data={goals}
                keyExtractor={(item) => item.id}
                renderItem={goalData => (
                    <GoalItem text={goalData.item.value} />
                )}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
