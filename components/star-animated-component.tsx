import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const StarAnimated = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 1500 }), -1, false);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <FontAwesome name="star" size={24} color="#FFD700" />
    </Animated.View>
  );
};
