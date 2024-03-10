import React from 'react';
import { Text, SafeAreaView, Button, View, Image} from 'react-native';
import { openBrowserAsync} from 'expo-web-browser';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';

function Links() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Image style={{height: 50, width: 100, objectFit: "contain"}} source={require('../../../assets/geco_logo.jpg')}/>
      </View>
      <Text style={styles.titleStyle}>
        Helpful Resources
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