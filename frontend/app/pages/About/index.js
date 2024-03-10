import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView,  Text, View, Image } from 'react-native';
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


            <ScrollView style={styles.scroll}>
                <Text style={{
                    fontSize: 38,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 10,
                    color: '#014927',
                }}>
                    Geco: a step towards a greener tomorrow
                </Text>
                <Text style={styles.titleStyle}>
                    What does Geco Do?
                </Text>
                <Text style={styles.textStyle}>
                    Geco is a mobile application created with the intention of aiding and guiding users through
                    the process of waste disposal. This app is capable of logging and recording the bags of
                    trash, recycling, and compostables thrown out by the user over time, displaying this data on a
                    calendar that shows the dates they were thrown out, as well as on two graphs. The pie chart displays
                    the total about of trash, recycling, and compost thrown out in a specified interval, whereas the line
                    graph will display the trends of disposal. The app can also provide recommendations for items that
                    are scanned by the app, using AI that recognizes the items in an image captured by the phone's camera,
                    or a photo uploaded to the app.
                </Text>
                <Text style={styles.titleStyle}>
                    Inspiration
                </Text>
                <Text style={styles.textStyle}>
                    Unfortunate as it may be, the average person does not have the time or energy to care about sorting between
                    garbage, recycling, and compost. Oftentimes people are too busy to properly consider where they should dispose
                    of items, and what damage that can have on the environment. This app was created with the aim of making users'
                    commitments to the planet and its health easier, as well as allow users to both see the impact of their actions,
                    and promote users to think more about the environment.
                </Text>
                <Text style={styles.titleStyle}>
                    How was Geco Built?
                </Text>
                <Text style={styles.textStyle}>
                    Geco was mainly built on Expo, using javascript and react-native to render and run the mobile app. An async
                    storage is used to store the database, and an AI trained with image-recognition was used to scan and recognize
                    items in an uploaded image or photo taken through the app.
                </Text>
                <Text style={styles.titleStyle}>
                    Challenges
                </Text>
                <Text style={styles.textStyle}>
                    The main challenge we faced was the AI server, as although we used one that had already been trained to recognize images,
                    the short duration of this hackaton made it difficult to properly train it to the specifications we desired,
                    specifically to recognize and filter items between recyclable, compostable, and waste products.
                </Text>
                <Text style={styles.titleStyle}>
                    Accomplishments We're Proud of
                </Text>
                <Text style={styles.textStyle}>
                    We are all very proud of our ability to create this app in such a demanding time frame, as two days for a functional
                    app is a difficult task. As well, we can be proud of the new technologies we have learned in the process of this
                    hackaton, as a lot of research and implementation when into this project. Last of all, the opportunity to think
                    about and contribute to the health of the planet, spreading awareness, and providing useful, implementable solutions
                    in the fight against global warming and climate change is something for all of us to be proud of.
                </Text>
                <Text style={styles.titleStyle}>
                    What We Learned
                </Text>
                <Text style={styles.textStyle}>
                    This experience provided us the chance to build an app through react-native, which we were previously unfamilar with.
                    As well, it was also our first experience with machine learning and image recognition AI, making it a valuable period
                    for growth.
                </Text>
                <Text style={styles.titleStyle}>
                    What's Next for Geco?
                </Text>
                <Text style={styles.textStyle}>
                    The goal for the future of this app is to connect images to the AI server, such that the items in the picture can be
                    recognized and properly sorted. This involves training the AI dataset to recognize different materials, such as platics,
                    metals, and glass for recycling, or produce and yard materials for compost.
                </Text>
                <Text style={styles.titleStyle}>
                    Who are the Members of Geco?
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
            </ScrollView>


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