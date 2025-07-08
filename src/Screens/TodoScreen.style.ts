import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerUi: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  scrollUi: {
    marginTop: 35,
  },
  addButtonUi: {
    position: "absolute",
    fontSize: 30,
    borderRadius: 50,
    height: 55,
    width: 100,
    padding: 20,
    backgroundColor: "#fd7e14",
    alignSelf: "flex-end",
  },
  addButtonTextUi: { flex: 1, textAlign: "center", color: "#FFFFFF" },
  titleUi: { color: "#00008B", fontSize: 25, fontWeight: "bold" },
  tinyLogoUi: {
    width: 70,
    height: 70,
  },
  topBarUi: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  inputUi: {
    backgroundColor: "#CDC9CA",
    borderRadius: 50,
    height: 55,
    padding: 15,
    paddingLeft: 25,
  },
});
