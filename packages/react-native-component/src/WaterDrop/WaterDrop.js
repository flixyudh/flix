// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

const Ring = ({ delay, size, duration, color }) => {
  const ring = React.useRef(new Animated.Value(0)).current;
  const ringStyle = {
    opacity: ring.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      {
        scale: ring.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 4],
        }),
      },
    ],
  };
  React.useEffect(() => {
    startAnimation();
  }, [ring]);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(ring, {
        toValue: 1,
        delay,
        useNativeDriver: true,
        duration,
      })
    ).start();
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: color,
          borderWidth: size / 6,
        },
        ringStyle,
      ]}
    />
  );
};

/**
 * Water drop effect animation
 *
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {number} [props.delay=850] - delay of animation component
 * @param {number} [props.size=20] - size of Loader
 * @param {string} [props.color='#5F952F'] - color of Loader
 */

const WaterDrop = ({ delay = 750, size = 20, color = '#5F952F' }) => {
  return (
    <View
      style={{
        width: size * 4,
        height: size * 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Ring duration={delay * 3} delay={0} color={color} size={size} />
      <Ring duration={delay * 3} delay={delay * 1} color={color} size={size} />
      <Ring duration={delay * 3} delay={delay * 2} color={color} size={size} />
      <Ring duration={delay * 3} delay={delay * 3} color={color} size={size} />
    </View>
  );
};

const WaterDropPropsType = {
  /** Delay of animation component */
  delay: PropTypes.number,
  /** Size of Loader */
  size: PropTypes.number,
  /** Color of Loader */
  color: PropTypes.string,
};

const WaterDropPropsDefault = {
  delay: 750,
  size: 20,
  color: '#5F952F',
};

WaterDrop.propTypes = WaterDropPropsType;
WaterDrop.defaultProps = WaterDropPropsDefault;

export default WaterDrop;
