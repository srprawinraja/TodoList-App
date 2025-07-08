import Todo from "./Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "@TodoList";
export const _store_data = async (todoList: Todo[]) => {
  const value = JSON.stringify(todoList);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("oops! unable to store the data");
  }
};

export const _retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("oops! unable retrieve the data");
  }
};
