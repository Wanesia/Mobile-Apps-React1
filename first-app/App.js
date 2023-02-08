import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ; 



export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DOT app</Text>
      <Image style={styles.logo} source={require('./4950.png')} />
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Text style={styles.txt}>Login</Text>
        <Text style={styles.txt}>Register</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 60,
  },
  logo: {
    width: 400,
    height: 400,
  },
  txt:{
    marginTop: 10,
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons:{
    flex: 1,
    flexDirection: 'row',
  }
});