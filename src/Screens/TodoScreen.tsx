import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "./TodoScreen.style";
import TodoComponent from "../components/TodoComponent";
import { useState } from "react";
import TodoViewModel from "../viewModels/TodoViewModel";
import Todo from "../models/Todo";
export default function TodoScreen() {
  const { todoList, addTodo, deleteTodo, changeStatusTodo } = TodoViewModel();
  const [inpTodo, onChangeInputTodo] = useState("");
  const dummyTodoList: Todo[] = [
    {
      id: "0",
      todoName: "apple",
      todoStatus: true,
    },
    {
      id: "1",
      todoName: "bannana",
      todoStatus: true,
    },
    {
      id: "2",
      todoName: "orange",
      todoStatus: true,
    },
  ];

  return (
    <View style={styles.containerUi}>
      <View style={styles.topBarUi}>
        <Text style={styles.titleUi}>To-Do List</Text>
        <Image
          style={styles.tinyLogoUi}
          source={{
            uri: "https://img.icons8.com/?size=100&id=114426&format=png&color=000000",
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputUi}
          onSubmitEditing={() => {
            onChangeInputTodo((inpTodo) => (inpTodo = ""));
            addTodo(inpTodo);
          }}
          placeholder="Add your task"
          value={inpTodo}
          onChangeText={onChangeInputTodo}
        ></TextInput>
        <TouchableOpacity
          style={styles.addButtonUi}
          onPress={() => {
            onChangeInputTodo((inpTodo) => (inpTodo = ""));
            addTodo(inpTodo);
          }}
        >
          <Text style={styles.addButtonTextUi}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.scrollUi}
        keyboardShouldPersistTaps="handled"
        data={todoList}
        renderItem={({ item }) => (
          <TodoComponent
            id={item.id}
            todoName={item.todoName}
            todoStatus={item.todoStatus}
            onDelete={deleteTodo}
            onChangeStatus={changeStatusTodo}
          />
        )}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
}
