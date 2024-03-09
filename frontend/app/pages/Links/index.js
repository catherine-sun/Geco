import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import { openBrowserAsync} from 'expo-web-browser';

import DisplayButtons from '../../components/DisplayButtons';

function Links() {

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleStyle}>
        Minimum effort, links only
      </Text>
      <Text style={styles.textStyle}>
        https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-blue-bin/
      </Text>
      <Text style={styles.textStyle}>
      https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-green-bin/
      </Text>

      <Button title='Recyclables'
        onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-blue-bin/')} />
      <Button title='Compost'
        onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-green-bin/')} />


      <DisplayButtons currentPath='Links' />

    </SafeAreaView>
    )

}
export default Links;

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