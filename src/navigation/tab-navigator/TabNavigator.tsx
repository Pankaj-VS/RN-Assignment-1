import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  

import { Activity } from '../../screens/activity/Activity.tsx'
import Dashboard from '../../screens/dashboard/Dashboard.tsx'
import { Exercises } from '../../screens/exercises/Exercises.tsx'
import { Notifications } from '../../screens/notifications/Notifications.tsx'
import { Profile } from '../../screens/profile/Profile.tsx'
import { COLORS } from '../../theme/colors.ts'
import { TabNavigatorParams } from '../../types/tabNavigator-types.ts'

import { ResizeMode } from '../../constants/common-constants.ts'

import { styles } from './tabNavigator-styles.ts'

const Tab = createBottomTabNavigator<TabNavigatorParams>()
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: COLORS.primary[100],
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/home.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/exercise.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/activity.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/notification.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.navIcon}
              resizeMode={ResizeMode.contain}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
