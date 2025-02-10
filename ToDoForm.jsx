import { StyleSheet, TextInput, Button, View } from "react-native";
import React from "react";
import { useState } from "react";

const todos = [];
const ToDoForm = () => {
  const [text, setText] = useState("");

  const addTodo = (todo) => {
    todos.push(todo);
    setText("");
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Add" onPress={() => addTodo(text)} />
      </View>
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
