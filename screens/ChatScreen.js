// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { View, Text, StyleSheet } from 'react-native'
import {Header,Body,Left,Right,Icon,Button,Title} from "native-base"
import Fire from '../Fire';


type Props = {
  name?: string,
};

class ChatScreen extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <View style={styles.container}>
         <Header  style={{ backgroundColor: '#1f4287' }}> 
          <Left>
            <Button transparent>
              <Icon name='logo-game-controller-b'/>
            </Button>
          </Left>
          <Body>
            <Title>Sociallic</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:"#21e6c1",
  },
});
export default ChatScreen;

