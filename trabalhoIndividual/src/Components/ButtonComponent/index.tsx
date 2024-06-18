import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

interface PropsComponent {
  title?: string;
  handleOnChange?: () => void;
}

export function ButtonComponent({ title, handleOnChange }: PropsComponent) {
  return (
    <>
      <TouchableOpacity style={styles.buttonstyles} onPress={handleOnChange}>
        <LinearGradient colors={["#BCDCF2", "#4e738b"]} style={styles.button}>
          <Text style={styles.textButton}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}
