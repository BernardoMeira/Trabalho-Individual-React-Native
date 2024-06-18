import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { styles } from "./style";
import axios from "axios";
import Icon from "@expo/vector-icons/Ionicons";
import { RegisterButtonComponent } from "../../Components/RegisterButtonComponent";
import { LogoComponent } from "../../Components/LogoComponent";

export function Login() {
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const navigator = useNavigation();

  const [emailError, setEmailError] = useState<boolean>(false);
  const [senhaError, setSenhaError] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleSenha = (value: string) => {
    setSenha(value);
  };

  const handleCadastro = () => {
    navigator.navigate("StackCadastro", { name: "Cadastro" });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleErrors = () => {
    let emailErr = false;
    let senhaErr = false;

    if (!email || !validateEmail(email)) {
      emailErr = true;
    }

    if (!senha) {
      senhaErr = true;
    }

    setEmailError(emailErr);
    setSenhaError(senhaErr);

    if (!emailErr && !senhaErr) {
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (!handleErrors()) {
      try {
        const response = await axios.post("http://10.0.2.2:8080/login", {
          email,
          senha,
        });

        if (response.status === 200) {
          Alert.alert("Login realizado!");

          navigator.navigate("StackHome", { name: "Home" });
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          Alert.alert("Login não realizado!", error.response.data);
        } else {
          Alert.alert("Erro na requisição!", error.response.data);
          console.log("Erro na requisição!", error);
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LogoComponent />

        <View style={styles.textinput}>
          <Icon
            style={styles.icon}
            name="person-outline"
            size={120}
            color={"#fff"}
          />
          <Text style={styles.title}>LOGIN</Text>
          <TextInputComponent
            placeholder="Digite seu email"
            onChangeValue={handleEmail}
            error={emailError}
            errorText="Preencha com um email valido!"
          />

          <TextInputComponent
            onChangeValue={handleSenha}
            placeholder="Digite sua senha"
            type={true}
            error={senhaError}
            errorText="Preencha a senha!"
          />
        </View>

        <View style={styles.buttons}>
          <ButtonComponent title="Entrar" handleOnChange={handleLogin} />

          <RegisterButtonComponent
            title="Efetuar cadastro"
            handleOnChange={handleCadastro}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
