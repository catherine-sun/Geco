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

      <SafeAreaView style={styles.pressView}>
        <Text style={styles.header} >Here are a few useful links!</Text>
        <Pressable style={styles.pressStyle}
          onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-garbage-bin/')}>
          <Text style={styles.textStyle} >What Belongs in the Garbage?</Text>
        </Pressable>
        <Pressable style={styles.pressStyle}
          onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-blue-bin/')}>
          <Text style={styles.textStyle} >What Belongs in the Recycling?</Text>
        </Pressable>
        <Pressable style={styles.pressStyle}
          onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-green-bin/')} >
          <Text style={styles.textStyle} >What Belongs in the Compost?</Text>
        </Pressable>
      </SafeAreaView>

      <SafeAreaView style={styles.pressView}>
        <Text style={styles.header} >Want to know where an item should go? Ask the Waste Wizard!</Text>
        <Pressable style={styles.pressStyle}
          onPress={() => openBrowserAsync('https://www.toronto.ca/services-payments/recycling-organics-garbage/waste-wizard/')}>
          <Text style={styles.textStyle} >Toronto's Waste Wizard</Text>
        </Pressable>
      </SafeAreaView>




      <DisplayButtons currentPath='Links' />

    </SafeAreaView>
    )

}
export default Links;