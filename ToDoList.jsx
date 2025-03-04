import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <View>
      <ScrollView>
        {tasks.map((task, index) => (
          <View style={styles.task} key={index}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
