import React from 'react';
import { StyleSheet, View, MaskedViewIOS, Animated } from 'react-native';

export default function ScreenSplash() {

  const [start, setStart] = React.useState(false);
  const [loading, setLoading] = React.useState({
    loadingInProgress: new Animated.Value(0),
    animationDone: false
  });

  const colorLayer = <View style={[StyleSheet.absoluteFill, { backgroundColor: '#7F23D9' }]} />
  const finalLayer = <View style={[StyleSheet.absoluteFill, { backgroundColor: '#000000' }]} />

  const imageScale = {
    transform: [
      {
        scale: loading.loadingInProgress.interpolate({
          inputRange: [0, 15, 100],
          outputRange: [0.1, 0.06, 16]
        })
      }
    ]
  };

  const animaPantalla = Animated.timing(loading.loadingInProgress, {
    toValue: 100,
    duration: 2000,
    useNativeDriver: true,
    delay: 400
  });

  React.useEffect(() => {
    setTimeout(() => {
      animaPantalla.start();
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>

      {colorLayer}

      <MaskedViewIOS style={{ flex: 1 }} maskElement={
        <View style={styles.centered}>
          <Animated.Image
            source={require('../assets/images/icon.png')}
            style={[{
              height: 1000,
              width: 1000
            }, imageScale]}
            resizeMode='contain'
          />
        </View>
      }>
        {finalLayer}
      </MaskedViewIOS>
    </View>
  );

}

//estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});