import React from 'react';
import { View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator
        size={size || 'large'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Spinner.propTypes = {
  size: PropTypes.string
};

export { Spinner };
