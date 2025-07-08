import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./TodoComponent.style";
import { useState } from "react";
import TodoViewModel from "../viewModels/TodoViewModel";
import Todo from '../models/Todo'

export default function TodoComponent({ id, todoName, onDelete }) {
  const [tick, setTick] = useState<boolean>(false);
  const onPress = () => setTick((tick) => (tick ? false : true));

  return (
    <TouchableOpacity style={styles.todoUi} onPress={onPress}>
      <Image
        style={styles.statusIconUi}
        source={{
          uri: tick
            ? "https://img.icons8.com/?size=100&id=12402&format=png&color=FD7E14"
            : "https://img.icons8.com/?size=100&id=37375&format=png&color=737373",
        }}
      />
      <Text style={{ fontSize: 17, fontWeight: "400" }}>{todoName}</Text>
      <TouchableOpacity style={{marginLeft:'auto'}} onPress={()=>{onDelete(id)}}>
        <Image
          style={styles.deleteIconUi}
          source={{
            uri: "https://img.icons8.com/?size=100&id=95771&format=png&color=4D4D4D",
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
