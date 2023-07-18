import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from 'firebase';
import db from "../config";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.jpg")} style={styles.logoImage}></Image>
          <Text style={styles.text}>NoRegrets</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
