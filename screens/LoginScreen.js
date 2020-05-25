import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {Icon} from "native-base";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Chatter',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      
      <View style={styles.container}>
        <View style={{backgroundColor:"#21e6c1"}}>
      <View style={styles.circle} />

      <View style={{ marginTop: 150 }}>
          <Image
              source={require("../assets/chat.png")}
              style={{ width: 100, height: 100, alignSelf: "center" }}
          />
      </View>
      <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Game Name</Text>
          <TextInput
              style={styles.input}
              placeholder="blue knight"
              onChangeText={this.onChangeText}
              value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
              <TouchableOpacity style={styles.continue} onPress={this.onPress}>
              <Icon name="arrow-forward" style={{ color: "#ffffff" }} />
              </TouchableOpacity>
          </View>
      </View>
      </View>
  </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  container:{
  backgroundColor:"#21e6c1",
 
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
    color:"#1f4287",
    backgroundColor:"#1f4287",
},
header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#21e6c1",
    marginTop: 3,
    paddingTop:20,
    paddingBottom:20
},
input: {
    marginBottom: 100,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#21e6c1",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#1f4287",
    fontWeight: "600",
    backgroundColor:"#21e6c1",
   

},
continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#1f4287",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:100
}
});

export default LoginScreen;

