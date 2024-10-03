
  //Necessary imports
import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();
 
  //Responsiveness

const { width, height } = Dimensions.get('window');

export default function App() {


  const handlePress = () => {
    console.log("Button Pressed");
  };

  //Custom font
  const [loaded, error] = useFonts({
    'MarineSikona-Regular': require('./assets/Font/MarineSikona-Regular.otf'),
    'Athene': require('./assets/Font/Athene.otf'),
    'magicalsignature': require('./assets/Font/magicalsignature.otf'),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (loaded) {
        await SplashScreen.hideAsync();
      } else if (error) {
        console.error(error);
      }
    };
    hideSplash();
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/Image/cafelogo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Life Happens!, Coffee Helps.
      </Text>
      <Image
        source={require('./assets/Image/letter.png')}
        style={styles.image1}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Buy Me Coffee</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2668F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.05, 
  },
  image: {
    width: width * 1.15, 
    height: height * 0.83, 
    aspectRatio: 431 / 442,
    position: 'absolute',
    top: height * -0.24,
    left: width * -0.1, 
  },
  image1: { 
    aspectRatio: 257 / 87,
    position: 'absolute',
    top: height * 0.64,
  },
  text: {
    color: '#FFE4F7',
    fontFamily: 'Athene',
    fontSize: width * 0.04,
    position: 'absolute',
    top: height * 0.81,
  },
  button: {
    position: 'absolute',
    top: height * 0.9,
    width: width * 1.0,
    height: height * 0.1,
    backgroundColor: '#640a3c', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#C2668F', 
    fontSize: width * 0.05,
    fontFamily: 'MarineSikona-Regular', 
  },
});
