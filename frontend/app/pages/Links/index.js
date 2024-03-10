import React from 'react';
import { Text, SafeAreaView, Button} from 'react-native';
import { openBrowserAsync} from 'expo-web-browser';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';

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