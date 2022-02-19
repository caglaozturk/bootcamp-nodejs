import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Home,  User, Todo } from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../config/colors'
// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

//Screen names
const homeName = "Home";
const todoName = "Todos";
const userName = "Users";

// Create Custom Tab Navigator
const Tabs = () => {

  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === userName) {
              iconName = focused ? 'person' : 'person-outline';

            } else if (rn === todoName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: theme.colors.primary,
        })}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={todoName} component={Todo} />
        <Tab.Screen name={userName} component={User} />

      </Tab.Navigator>
  );
}

export default Tabs;