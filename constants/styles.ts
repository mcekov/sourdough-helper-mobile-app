import Colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFFF",
  },
  header: {
    height: 100,
    backgroundColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "gotham-b",
  },
  btnIcon: {
    position: "absolute",
    left: 16,
  },
  footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  centerElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
