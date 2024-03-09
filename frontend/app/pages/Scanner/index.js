import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';

function Scanner() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Make Camera Work Good
            </Text>


            <DisplayButtons currentPath='Scanner' />

        </SafeAreaView>
    )

}
export default Scanner;

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