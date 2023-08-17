import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../../utils/colors';

//Tabs
import Location from '../../screens/BottomTabs/Location';
import Groups from '../../screens/BottomTabs/Groups';
import AddEvent from '../../screens/BottomTabs/AddEvent';
import Pin from '../../screens/BottomTabs/Pin';
import Profile from '../../screens/BottomTabs/Profile';

//Icons
import ICON_LOCATION from '../../assets/icons/location.png';
import ICON_GROUPS from '../../assets/icons/group.png';
import ICON_PIN from '../../assets/icons/pin.png';
import ICON_PROFILE from '../../assets/icons/profile.png';
import ICON_ADDEVENT from '../../assets/icons/add.png';
import {Image} from 'react-native';
import styles from './styles';

export type BottomTabParamList = {
  Location: undefined;
  Groups: undefined;
  AddEvent: undefined;
  Pin: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function () {
  return (
    <BottomTab.Navigator
      initialRouteName="AddEvent"
      //   detachInactiveScreens={false}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: colors.silver,
        tabBarStyle: {
          elevation: 2.5,
          borderTopWidth: 0,
          height: 60,
          backgroundColor: 'black',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarIcon: ({color, size, focused}) => {
          let icon;
          if (route.name === 'Location') icon = ICON_LOCATION;
          else if (route.name === 'AddEvent') icon = ICON_ADDEVENT;
          else if (route.name === 'Groups') icon = ICON_GROUPS;
          else if (route.name === 'Pin') icon = ICON_PIN;
          else icon = ICON_PROFILE;

          return <Image source={icon} style={styles.tabIcon} />;
        },
      })}>
      <BottomTab.Screen name="Location" component={Location} />
      <BottomTab.Screen name="Groups" component={Groups} />
      <BottomTab.Screen name="AddEvent" component={AddEvent} />
      <BottomTab.Screen name="Pin" component={Pin} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
}
