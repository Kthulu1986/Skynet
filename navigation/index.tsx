import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import Loading from '../screens/ScreenLoading';
import ScreenLogin from '../screens/ScreenLogin';
import ScreenSplash from '../screens/ScreenSplash';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const [isLoading, setIsLoading] = React.useState(false);

  // esta variable se cargara desde boton google o cando valida si ya tiene session iniciada.
  const [user, setUser] = React.useState(false);


  
  React.useEffect(() => {

    //aqui se validara si usuario tiene session iniciada
 
    //simulare un tiempo de carga 4 seg
    setTimeout(() => {
     // setUser(true);
    }, 4000);

  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      { user ? <RootNavigator /> : < ScreenLogin />}

    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
