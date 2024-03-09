
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';
//import styles from './styles';




function Homepage() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Dis Da Homepage
            </Text>

            <DisplayButtons currentPath='Homepage' />

        </SafeAreaView>
    )

}
export default Homepage;


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