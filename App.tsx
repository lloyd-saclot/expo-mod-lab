import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>








      
      <Text style={styles.message}>Messages</Text>








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
});
