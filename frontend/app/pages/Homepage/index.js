import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

function Homepage() {
    return (
        <View>
            <View>
                <Text>Dis Da homepage</Text>
            </View>

            <Pressable onPress={() => router.replace("/Scanner")}>
                <Text >Scanner</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/Inventory")}>
                <Text >Inventory</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/ManualInput")}>
                <Text >Manual Input</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/Links")}>
                <Text >Links</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/About")}>
                <Text >About Us</Text>
            </Pressable>

        </View>
    )

}
export default Homepage;