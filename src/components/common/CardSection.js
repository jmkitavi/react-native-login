import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // start top
    flexDirection: 'row', // placing items in same line
    borderColor: '#ddd',
    position: 'relative',
  }
}

export { CardSection };