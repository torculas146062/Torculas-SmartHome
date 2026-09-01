import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './screens/Dashboard';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import { Devices } from './screens/Devices';

const RootStack = createNativeStackNavigator({
  initialRouteName: "Dashboard",
  screens: {
    Dashboard: {
      screen: Dashboard,
      options: {
        title: 'Smart Home',
      },
    },
    Settings: {
      screen: Settings,
      options: { presentation: "modal" },
    },

    Devices: {
      screen: Devices,
      options: { presentation: "modal" },
    },
    
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
