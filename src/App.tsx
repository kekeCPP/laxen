import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import * as colors from "./components/colors";
import {styles} from  "./components/stylesheet"
import PaymentFeed from "./components/PaymentFeed"


function HomeScreen() {
  return (
    <View style={styles.homeViewContainer}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerFont}>Hem</Text>
      </View>
      <View style={styles.homeView}>
        <Text style={styles.paymentsTitle}>Betalningar</Text>

        <View style={styles.paymentsFeedContainer}>
          <PaymentFeed></PaymentFeed>
        </View>
      </View>
    </View>
  );
}

function GroupsScreen() {
  return(
    <View style={styles.groupsViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>Grupper</Text>
      </View>
      <View>
        <Text>Groups</Text>
      </View>
    </View>
  );
}

function ContactsScreen() {
  return(
    <View style={styles.contactsViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>Kontakter</Text>
      </View>
      <View>
        <Text>Contacts</Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settingsViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>Inställningar</Text>
      </View>
      <View style={styles.settingsView}>
        <Text>Settings</Text>
      </View>
    </View>
  );
}


const tabs = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>


      <tabs.Navigator
       tabBarPosition='bottom'
       screenOptions={{
        tabBarStyle: styles.tabs,
        tabBarIndicatorStyle: styles.tabsIndicator,
        tabBarAndroidRipple: {color: colors.white}
       }}
      >
        <tabs.Screen 
          name="home" 
          component={HomeScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="home" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            title: "HOME"
          }}
        />


        <tabs.Screen name="groups" component={GroupsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="comments" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />


        <tabs.Screen name="contacts" component={ContactsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="user" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />


        <tabs.Screen name="settings" component={SettingsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="gear" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}


export default MyTabs;