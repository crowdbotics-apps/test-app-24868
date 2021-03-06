import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps212134Navigator from '../features/Maps212134/navigator';
import Additem212133Navigator from '../features/Additem212133/navigator';
import Maps212129Navigator from '../features/Maps212129/navigator';
import UserProfile212125Navigator from '../features/UserProfile212125/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps212134: { screen: Maps212134Navigator },
Additem212133: { screen: Additem212133Navigator },
Maps212129: { screen: Maps212129Navigator },
UserProfile212125: { screen: UserProfile212125Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
