import { React, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
