import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

function About() {
    return (
        <View>
            <View>
                <Text>Listen to us toot our own horns.</Text>
                <Text>Here's why we're morally superior to you</Text>
            </View>

            <Pressable onPress={() => router.replace("./Homepage")}>
                <Text >Homepage</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("./Scanner")}>
                <Text >Scanner</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("./Inventory")}>
                <Text >Inventory</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("./ManualInput")}>
                <Text >Manual Input</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("./Links")}>
                <Text >Links</Text>
            </Pressable>

        </View>
    )

}
export default About;