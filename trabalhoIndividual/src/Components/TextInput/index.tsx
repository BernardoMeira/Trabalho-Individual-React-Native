import React from "react";
import { TextInput, View, Text, Image } from "react-native";
import { styles } from "./style";
import Logo from "../../Assets/logo-vapor.png";

interface PropsComponent {
  placeholder: string;
  type?: boolean;
  onChangeValue: (value: string) => void;
  error?: boolean;
  logo?: boolean;
  errorText?: string;
  style?: any;
}

export function TextInputComponent({
  placeholder,
  type,
  onChangeValue,
  error,
  logo,
  errorText,
  style,
}: PropsComponent) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBar}>
        {logo && (
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={Logo} alt="Logo" />
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#fff"}
          style={[
            styles.styleInput,
            style,
            { borderColor: error ? "red" : "#121c27" },
          ]}
          secureTextEntry={type}
          onChangeText={onChangeValue}
        />
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{errorText}</Text>
        </View>
      )}
    </View>
  );
}
