import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [itemText, setItemText] = useState('');

  const onChange = (textValue) => setItemText(textValue);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Add an item here..."
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(itemText)}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  input: {
    alignSelf: 'center',
    borderColor: '#666',
    borderWidth: 1,
    marginVertical: 14,
    marginHorizontal: 2,
    width: '50%',
  },
  btn: {
    alignSelf: 'center',
    width: '15%',
    backgroundColor: '#25f',
    height: 20,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffe',
  },
});

export default AddItem;
