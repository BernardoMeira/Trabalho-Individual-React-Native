import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerInfo: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: 350,
    marginLeft: 10,
    marginTop: 10,
    paddingVertical: 20,
    height: 300,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderWidth: 1,
    height: "100%",
  },

  card: {
    alignSelf: "flex-start",
    gap: 10,
    width: "100%",
    height: "100%",
  },

  imagemGame: {
    marginTop: -21,
    width: 350,
    height: 180,
  },

  gameName: {
    marginLeft: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  gameValor: {
    marginBottom: -28,
    marginLeft: 18,
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
});
