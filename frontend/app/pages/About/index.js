import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';

function About() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Listen to us toot our own horns.
            </Text>
            <Text style={styles.titleStyle}>
                Here's why we're morally superior to you
            </Text>

            <Text style={styles.textStyle}>
                Catherine Sun, the lonely tuatara
            </Text>
            <Text style={styles.textStyle}>
                Christine Zhao, the veiled chameleon
            </Text>
            <Text style={styles.textStyle}>
                Clare Zhu, the arabian sand boa
            </Text>
            <Text style={styles.textStyle}>
                Rachel Kwan, the rhinoceros iguana
            </Text>

            <DisplayButtons currentPath='About' />

        </SafeAreaView>
    )

}
export default About;

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
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });