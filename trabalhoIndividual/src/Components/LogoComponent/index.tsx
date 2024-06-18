import React from "react";
import { View, Text, Image } from "react-native";

import Logo from "../../Assets/logo-vapor.png";
import { styles } from "./style";

export function LogoComponent() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={Logo} alt="Logo" />
      <Text style={styles.logoTitle}>VAPOR</Text>
      <Text style={styles.logoTitleCopy}>©</Text>
    </View>
  );
}
