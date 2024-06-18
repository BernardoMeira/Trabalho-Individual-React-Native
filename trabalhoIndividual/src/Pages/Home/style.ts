import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "#171a21",
    height: 150,
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-evenly",
  },

  headerTop: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  headerText: {
    color: "#94999D",
    fontSize: 16,
    fontWeight: "500",
    marginTop: -5,
  },

  titleText: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 21,
    marginTop: 20,
    // marginBottom: -12,
  },

  styleInput: {
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 1,
    borderColor: "#121c27",
    backgroundColor: "#272B34",
  },

  searchBar: {
    alignSelf: "center",
    // marginTop: 30,
    // marginLeft: 30,
    width: "75%",
  },

  icons: {
    alignSelf: "center",
    // marginTop: 46,
    marginLeft: -30,
    // marginRight: 30,
    flexDirection: "row",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  containerLogo: {
    marginTop: -60,
    marginBottom: 100,
  },
});
