import 'react-native-gesture-handler';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerIcons from './components/drawerIcons/drawerIcons';
import { screens } from './routes/drawerScreens';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

/*-- connecting with flipper --*/
import { connectToDevTools } from 'react-devtools-core';

if (__DEV__) {
 connectToDevTools({
  host: 'localhost',
  port: 8097,
 });
}
/*------------------------------*/

export default function App() {
 const [location, setLocation] = useState(null);
 const [errorMsg, setErrorMsg] = useState(null);
 const Drawer = createDrawerNavigator();

 /*  useEffect(() => {
  (async () => {
   let { status } = await Location.requestForegroundPermissionsAsync();
   if (status !== 'granted') {
    setErrorMsg('Permission to access location was denied');
    return;
   }

   let location = await Location.getCurrentPositionAsync({});
   setLocation(location);
  })();
 }, []);

 let text = 'Waiting..';
 if (errorMsg) {
  text = errorMsg;
 } else if (location) {
  text = JSON.stringify(location);
 } */

 return (
  <Provider store={store}>
   <NavigationContainer>
    <Drawer.Navigator>
     {screens.map((screen) => (
      <Drawer.Screen
       useLegacyImplementation={false}
       key={screen.name}
       name={screen.name}
       component={screen.component}
       options={({ route }) => ({
        title: screen.title,
        headerShown: screen.headerShown,
        drawerIcon: ({ color, size }) => (
         <DrawerIcons
          name={screen.iconName}
          size={size}
          color={color}
          route={route}
         />
        ),
       })}
      />
     ))}
    </Drawer.Navigator>
   </NavigationContainer>
  </Provider>
 );
}
