import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";

import TodoScreen from './src/Screens/TodoScreen'
export default function App() {
  return <>
  <StatusBar barStyle="dark-content" backgroundColor="#000000" />
  <TodoScreen/>
  </>
}

