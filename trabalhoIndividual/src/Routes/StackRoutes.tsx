import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";
import { Profile } from "../Pages/Profile";
import Icon from "@expo/vector-icons/Ionicons";

export type StackNavigator = {
  StackLogin: { name: string };
  StackHome: { name: string };
  StackProfile: { name: string };
  StackCadastro: { name: string };
};

export type DrawerNavigator = {
  Home: { name: string };
  Profile: { name: string };
};

const Stack = createNativeStackNavigator<StackNavigator>();

const Drawer = createDrawerNavigator<DrawerNavigator>();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigator = useNavigation();

  const handleLogout = () => {
    navigator.navigate("StackLogin", { name: "Login" });
  };

  const handleProfile = () => {
    navigator.navigate("StackProfile", { name: "Profile" });
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        inactiveTintColor="#c7d5e0"
        onPress={() => props.navigation.navigate("Home")}
        icon={() => <Icon name="home" size={30} color={"#c7d5e0"} />}
      />
      <DrawerItem
        label="Profile"
        inactiveTintColor="#c7d5e0"
        onPress={handleProfile}
        icon={() => (
          <Icon name="person-circle-outline" size={30} color={"#c7d5e0"} />
        )}
      />
      <DrawerItem
        label="Logout"
        inactiveTintColor="#c7d5e0"
        onPress={handleLogout}
        icon={() => <Icon name="log-out" size={30} color={"#c7d5e0"} />}
      />
    </DrawerContentScrollView>
  );
}

function DrawerHome() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#323A45",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={TabsRoutes} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen
          name="StackHome"
          component={DrawerHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="StackProfile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
