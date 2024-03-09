import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';

function ManualInput() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Do it yourself bar
            </Text>


            <DisplayButtons currentPath='ManualInput' />

        </SafeAreaView>
    )
}
export default ManualInput;

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