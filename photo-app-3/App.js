//removed content from node_modules expo-permissions tsconfig.json

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { f, auth, database, storage } from "./config/config.js";
import feed from "./app/screens/feed.js";
import upload from "./app/screens/upload.js";
import profile from "./app/screens/profile.js";
import userProfile from "./app/screens/userProfile.js";
import comments from "./app/screens/comments.js";

const TabStack = createBottomTabNavigator({
  Feed: { screen: feed },
  Upload: { screen: upload },
  Profile: { screen: profile }
});

const MainStack = createStackNavigator(
  {
    Home: { screen: TabStack },
    User: { screen: userProfile },
    Comments: { screen: comments }
  },
  {
    initialRouteName: "Home",
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  login = async () => {
    //force user to login
    try {
      let user = await auth.signInWithEmailAndPassword(
        "test@user.com",
        "password"
      );
    } catch (error) {
      console.log(error);
    }
  };

  constructor(props) {
    super(props);
    this.login();
  }
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
