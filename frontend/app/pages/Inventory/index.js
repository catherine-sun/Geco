import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';

function Inventory() {
    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                How terrible of a human being have you been so far?
            </Text>
            <Text style={styles.titleStyle}>
                How much gar-bahj have you scanned that contributes to the death of this planet?
            </Text>

            <DisplayButtons currentPath='Inventory' />

        </SafeAreaView>
    )

}
export default Inventory;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
  });