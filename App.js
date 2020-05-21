import React, { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Button,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [showAddInput, setShowAddInput] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: enteredGoal },
        ]);
        setShowAddInput(false);
    };

    const cancelAddGoalHandler = () => {
        setShowAddInput(false);
    };

    const removeGoalHandler = (goalId) => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            <Button
                title="New goal"
                onPress={() => setShowAddInput(true)}
            />
            <GoalInput
                show={showAddInput}
                onCancel={cancelAddGoalHandler}
                onSubmit={addGoalHandler}
            />
            <FlatList
                data={goals}
                keyExtractor={(item) => item.id}
                renderItem={goalData => (
                    <GoalItem
                        id={goalData.item.id}
                        text={goalData.item.value}
                        onDelete={removeGoalHandler}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
