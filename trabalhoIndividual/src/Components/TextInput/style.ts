import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  error: {
    color: "red",
    fontWeight: "500",
    fontSize: 19,
  },

  errorContainer: {
    marginTop: -10,
    marginBottom: -10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },

  styleInput: {
    width: "90%",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1.8,
    height: 55,
    fontSize: 20,
    borderRadius: 8,
    borderColor: "#121c27",
    color: "#fff",
    backgroundColor: "#171a21",
    zIndex: 1,
  },

  containerLogo: {
    marginRight: -10,
  },

  logo: {
    width: 30,
    height: 30,
  },

  containerBar: {
    flexDirection: "row",
    alignItems: "center",
  },
});
