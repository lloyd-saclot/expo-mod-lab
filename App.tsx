import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import {Ionicons, Entypo, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';


import iconImage from './assets/box.png';
import messageImage from './assets/speech-bubble.png';

export default function App() {
  return (
    <View style={styles.container}>

<TouchableOpacity>
        <View>
          <AntDesign name="pluscircle" size={24} color="blue" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Ionicons name="search" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Feather name="bell" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Entypo name="chat" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Ionicons name="briefcase-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <FontAwesome name="user" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.message}>Messages</Text>


      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Image source={iconImage} style={{ width: 20, height: 20 }} />
        </View>
      </TouchableOpacity>
      
      <View style={styles.messageiconImage}>
        <View style={styles.messageiconBackground}>
            <Image source={messageImage} style={{ width: 70, height: 70,}} />
        </View>
      </View>
      

      <Text style={styles.middleTitle}>No Messages</Text>
      <Text style={styles.middleText}> When you have messages, you'll see</Text>
      <Text style={styles.middleText}> them here.</Text>

      <Text></Text>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 120,
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 30,
  },

  middleTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 50,
  },

  middleText: {
    paddingTop: 10,
    fontSize: 17,
    color: '#a3a3a3',
  },

  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingTop: 60,
    paddingRight: 30,
  },

  iconBackground: {
    backgroundColor: '#f2f0f0',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageiconBackground: {
    backgroundColor: '#f2f0f0',
    borderRadius: 150,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageiconImage: {
    paddingTop: 70,
  },
});
