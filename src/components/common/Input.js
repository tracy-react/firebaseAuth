import React from 'react';
import {
  TextInput,
  View,
  Text, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { input, labelStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={input}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 22,
    flex: 2,
    width: '100%',
    height: 45
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  }
});

export { Input };
