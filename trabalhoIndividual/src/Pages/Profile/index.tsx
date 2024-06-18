import { View } from "react-native";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";

export function Profile() {
  const navigator = useNavigation();

  const handleLogout = () => {
    navigator.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={300} color={"#94999D"} />
      <View style={styles.buttons}>
        <ButtonComponent title="Logout" handleOnChange={handleLogout} />
      </View>
    </View>
  );
}
