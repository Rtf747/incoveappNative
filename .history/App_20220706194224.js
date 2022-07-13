import 'react-native-gesture-handler';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerIcons from './components/drawerIcons/drawerIcons';
import { screens } from './routes/drawerScreens';
import HomeStack from './routes/homeStack';

export default function App() {
 const Drawer = createDrawerNavigator();

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
