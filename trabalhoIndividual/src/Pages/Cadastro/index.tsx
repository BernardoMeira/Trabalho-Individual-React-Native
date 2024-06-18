import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponent } from "../../Components/ButtonComponent";
import axios from "axios";
import { styles } from "./style";
import Icon from "@expo/vector-icons/Ionicons";
import { RegisterButtonComponent } from "../../Components/RegisterButtonComponent";
import { LogoComponent } from "../../Components/LogoComponent";
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

export function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmSenha, setConfirmSenha] = useState<string>("");

  const navigator = useNavigation();

  const [emailError, setEmailError] = useState<boolean>(false);
  const [senhaError, setSenhaError] = useState<boolean>(false);
  const [confirmSenhaError, setConfirmSenhaError] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleSenha = (value: string) => {
    setSenha(value);
  };

  const handleConfirmSenha = (value: string) => {
    setConfirmSenha(value);
  };

  const handleLogin = () => {
    navigator.navigate("StackLogin", { name: "Login" });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleErrors = () => {
    let emailErr = false;
    let senhaErr = false;
    let confirmSenhaErr = false;

    if (!email || !validateEmail(email)) {
      emailErr = true;
    }

    if (!senha) {
      senhaErr = true;
    }

    if (!confirmSenha) {
      confirmSenhaErr = true;
    }

    setEmailError(emailErr);
    setSenhaError(senhaErr);
    setConfirmSenhaError(confirmSenhaErr);

    if (!emailErr && !senhaErr && !confirmSenhaErr) {
      return false;
    } else {
      return true;
    }
  };

  const handleCadastro = async () => {
    if (!handleErrors()) {
      if (senha !== confirmSenha) {
        Alert.alert("Erro no cadastro", "Senhas não são iguais!");
      } else {
        try {
          const response = await axios.post(
            "http://10.0.2.2:8080/login/cadastrar",
            {
              email,
              senha,
            }
          );

          if (response.status === 200) {
            Alert.alert("Cadastro realizado com sucesso!");

            navigator.navigate("StackLogin", { name: "Login" });
          } else {
            Alert.alert(
              "Cadastro não realizado!",
              response.data.message || "Aconteceu algum erro..."
            );
          }
        } catch (error: any) {
          if (error.response.status === 400) {
            Alert.alert("Cadastro não realizado!", error.response.data);
          } else {
            Alert.alert("Erro na requisição!", error.response.data);
            console.log("Erro na requisição!", error);
          }
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
            name="person-add-outline"
            size={120}
            color={"#fff"}
          />
          <Text style={styles.title}>CADASTRO</Text>

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

          <TextInputComponent
            onChangeValue={handleConfirmSenha}
            placeholder="Confirmar senha"
            type={true}
            error={confirmSenhaError}
            errorText="Preencha o confirma senha!"
          />
        </View>

        <View style={styles.buttons}>
          <ButtonComponent title="Cadastrar" handleOnChange={handleCadastro} />

          <RegisterButtonComponent
            title="Voltar ao login"
            handleOnChange={handleLogin}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
