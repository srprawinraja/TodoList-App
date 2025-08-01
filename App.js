import {
  StatusBar
} from "react-native";

import TodoScreen from './src/Screens/TodoScreen'
export default function App() {
  return <>
  <StatusBar barStyle="dark-content" backgroundColor="#ffffffff" />
  <TodoScreen/>
  </>
}

