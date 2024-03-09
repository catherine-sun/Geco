import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

function Inventory() {
    return (
        <View>
            <View>
                <Text>How terrible of a human being have you been so far?</Text>
                <Text>How much gar-bahj have you scanned that contributes to the death of this planet?</Text>
            </View>

            <Pressable onPress={() => router.replace("/Homepage")}>
                <Text >Homepage</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/Scanner")}>
                <Text >Scanner</Text>
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
export default Inventory;