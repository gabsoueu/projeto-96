import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import firebase from 'firebase';
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      searchText:""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.jpg")} style={styles.logoImage}></Image>
          <Text style={styles.text}>NoRegrets</Text>
          <TextInput
            onChangeText={text=>this.setState({searchText:text})}
            style={styles.input}
            placeholder={"pesquse o nome da sala"}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.SaladasButtom} onPress={()=>
            this.props.navigation.navigate("Chat")}>
            <Text>Gaia</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.SaladasButtom} onPress={()=>
            this.props.navigation.navigate("Chat")}>
            <Text>Problemas fisiologicos</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.SaladasButtom} onPress={()=>
            this.props.navigation.navigate("Chat")}>
            <Text>Problemas financeiros</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.SaladasButtom} onPress={()=>
            this.props.navigation.navigate("Chat")}>
            <Text>Problemas nos estudos</Text>
          </TouchableOpacity>
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
  },
  logoImage:{
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: RFValue(20)
  },
  input: {
    borderRadius: RFValue(20)
  },
  SaladasButtom: {
    width: 300,
    height: 50,
    marginTop: 50,
    backgroundColor: "#f166c9",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});