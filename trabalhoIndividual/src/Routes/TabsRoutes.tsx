import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image } from "react-native";
import { Home } from "../Pages/Home";
import { styles } from "./style";
import Icon from "@expo/vector-icons/Ionicons";
import { Profile } from "../Pages/Profile";

export type RootTabParamsList = {
  TabHome: { name: string };
  TabProfile: { name: string };
  TabDrawer: { name: string };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#171a21",
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#171a21",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.boxNavigation,
                {
                  borderTopColor: focused ? "#66c0f4" : "transparent",
                  borderTopWidth: 2,
                  width: 70,
                },
                { transform: [{ scaleX: -1 }] },
              ]}
            >
              <Icon
                name="pricetag"
                size={30}
                color={focused ? "#66c0f4" : "#fff"}
              />
              {/* <Text style={[styles.nameRoute, { color: focused ? "#66c0f4" : "#fff" }]}>Home</Text> */}
            </View>
          ),
          headerTitle: "Home",
          headerTintColor: "#66c0f4",
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="TabProfile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.boxNavigation,
                {
                  borderTopColor: focused ? "#66c0f4" : "transparent",
                  borderTopWidth: 2,
                  width: 70,
                },
              ]}
            >
              <Icon
                name="person"
                size={30}
                color={focused ? "#66c0f4" : "#fff"}
              />
              {/* <Text style={[styles.nameRoute, { color: focused ? "#66c0f4" : "#fff" }]}>Profile</Text> */}
            </View>
          ),
          tabBarLabel: "",
          headerTintColor: "#66c0f4",
          headerTitle: "Profile",
        }}
      />

      <Tab.Screen
        name="TabDrawer"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.boxNavigation, { marginTop: -5 }]}>
              <Icon
                name="menu-outline"
                size={45}
                color={focused ? "#66c0f4" : "#fff"}
              />
              {/* <Text style={[styles.nameRoute, { color: focused ? "#66c0f4" : "#fff" }]}>Drawer</Text> */}
            </View>
          ),
          headerTitle: "Drawer",
          tabBarLabel: "",
          headerTintColor: "#66c0f4",
        }}
      />
    </Tab.Navigator>
  );
}
