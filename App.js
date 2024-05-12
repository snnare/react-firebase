import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();


import UserList from './screens/UserList';
import CreateUser from './screens/CreateUser';
import UserDetail from './screens/UserDetail';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUser}/>
      <Stack.Screen name="UserList" component={UserList}/>
      <Stack.Screen name="UserDetail" component={UserDetail}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
