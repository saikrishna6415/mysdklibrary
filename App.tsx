import React, {useRef} from 'react';
import {Button, Animated, Easing} from 'react-native';

function App(): JSX.Element {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    // alert('Button clicked!');
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: rotation}]}}>
      <Button title="Click me" onPress={startRotation} />
    </Animated.View>
  );
}

export default App;
