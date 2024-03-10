import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import './styles.css';

import { Picker } from '@react-native-picker/picker';

const InventoryItem = ({ title, recommended, approveItem }) => {
  const [selectedWaste, setSelectedWaste] = useState(recommended);
  const [wasteArr, setWasteArr] = useState(['Trash', 'Recycle', 'Compost']);

  useEffect(() => {
    setWasteArr(wasteArr.reduce((acc, element) => {
      if (element == recommended) {
        return [element, ...acc];
      }
      return [...acc, element];
    }, []));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <View style={styles.containerBody}>
        <Text>Recommended: {recommended}</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedWaste}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedWaste(itemValue)
          }
        >
          {wasteArr.map((waste, wasteId) => {
            return (<Picker.Item style={styles.pickerItem} id={wasteId} label={waste} value={waste} ></Picker.Item>)
          })}

        </Picker>
        <FontAwesome.Button style={styles.button}size={32} name="check-circle-o" backgroundColor="white" color="green" onPress={() => approveItem(title, selectedWaste)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    // width: '60vw',
    height: 50,
    margin: 10,
  },
  containerBody: {
    flexDirection: 'row',
        alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: -70,
    height: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  picker: {
    // borderRadius: '18px',
    top: -30,
    height: 30, 
    width: 145,
    marginLeft: 'auto',
    marginRight: 0
  },
  pickerItem: {
    zIndex: 0
  },
  button: {
    position: 'relative',
    top: -10,
    float: 'right'
  }
});

export default InventoryItem;