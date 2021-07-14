
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '../Packages/react-navigation-stack';
import { createDrawerNavigator } from '../Packages/react-navigation-drawer';

import VerifyScreen from '../Screens/Verify/index';
import CreatePasswordScreen from '../Screens/CreatePassword/index';
import LoginScreen from '../Screens/LogIn/index';
import ResetPasswordScreen from '../Screens/ResetPassword/index';
import HomeScreen from '../Screens/HomeScreen/Home';
import OrdersScreen from '../Screens/OrdersScreen/Orders';
import OthersScreen from '../Screens/OthersScreen/Others';
import PersonalDataScreen from '../Screens/OthersScreen/PersonalData';
import SettingsScreen from '../Screens/OthersScreen/Settings';
import ChangePasswordScreen from '../Screens/OthersScreen/ChangePassword';
import CameraScreen from '../Screens/OthersScreen/Camera';
import QRcodeScreen from '../Screens/OthersScreen/QRcode';







//import SideBar from './SideBar';


const Navigator = createStackNavigator({

 
 HomeScreen:
 {
   screen: HomeScreen,
   navigationOptions:
   {
     headerMode: 'none',
     header: null,
     drawerLockMode: 'locked-closed'
   },
  },

  ResetPasswordScreen:
 {
   screen: ResetPasswordScreen,
   navigationOptions:
   {
     headerMode: 'none',
     header: null,
     drawerLockMode: 'locked-closed'
   },
  },
  VerifyScreen:
 {
   screen: VerifyScreen,
   navigationOptions:
   {
     headerMode: 'none',
     header: null,
     drawerLockMode: 'locked-closed'
   },

  },
  
  

 
  CreatePasswordScreen:
  {
    screen: CreatePasswordScreen,
    navigationOptions:
    {
      headerMode: 'none',
      header: null,
      drawerLockMode: 'locked-closed'
    },
   },
    
  LoginScreen:
  {
    screen: LoginScreen,
    navigationOptions:
    {
      headerMode: 'none',
      header: null,
      drawerLockMode: 'locked-closed'
    },
  },

  OrdersScreen:
 {
   screen: OrdersScreen,
   navigationOptions:
   {
     headerMode: 'none',
     header: null,
     drawerLockMode: 'locked-closed'
   },
  },
 
  OthersScreen:
  {
    screen: OthersScreen,
    navigationOptions:
    {
      header: null,
    },
  },
  
   PersonalDataScreen:
   {
     screen: PersonalDataScreen,
     navigationOptions:
     {
       header: null,
     },
  },
   
  SettingsScreen:
  {
    screen: SettingsScreen,
    navigationOptions:
    {
      header: null,
    },
  },
  
  ChangePasswordScreen:
  {
    screen: ChangePasswordScreen,
    navigationOptions:
    {
      header: null,
    },
  },
  CameraScreen:
  {
    screen: CameraScreen,
    navigationOptions:
    {
      header: null,
    },
  },
  QRcodeScreen:
  {
    screen: QRcodeScreen,
    navigationOptions:
    {
      header: null,
    },
  },
});
/*
const DrawerNavigator = createDrawerNavigator(
    {
      Home: {
        screen: Navigator,
        navigationOptions: ({ navigation }) => ({
          //drawerLockMode: "locked-closed"
        })
      },
      
    },
    {
      contentComponent: SideBar,
      drawerWidth:width*0.65,
      drawerPosition: 'left'
    }
  );
*/
export default createAppContainer(Navigator);
