import { StackNavigator } from "./StackRoutes";
import { RootTabParamsList } from "./TabsRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigator {}
    interface RootParamList extends RootTabParamsList {}
  }
}
