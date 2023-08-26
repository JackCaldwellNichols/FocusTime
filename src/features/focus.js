import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/Button'
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {

const [subject, setSubject] = useState(null)



return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput 
        style = {styles.textInput}
        label="What would you like to focus on?" 
        onChangeText = {setSubject}
        />
        <View style={styles.button}>
          <RoundedButton title='+' 
          size={50}
          onPress={()=>addSubject(subject)}
          />
        </View>
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'top',
    padding: spacing.lg
  },

  button: {
    justifyContent: 'center'
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm
  }
});
