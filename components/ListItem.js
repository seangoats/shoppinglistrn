import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({item, deleteItem}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="circle-edit-outline" size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => deleteItem(item.id)}>
          <Icon name="delete" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  text: {
    paddingLeft: 20,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListItem;
