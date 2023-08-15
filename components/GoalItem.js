import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#333333' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#bf0650c9',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
