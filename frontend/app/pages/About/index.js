import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView,  Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import DisplayButtons from '../../components/DisplayButtons';

function About() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Image style={{height: 50, width: 100, objectFit: "contain"}} source={require('../../../assets/geco_logo.jpg')}/>
            </View>
            <Text style={styles.titleStyle}>
                About GECO
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