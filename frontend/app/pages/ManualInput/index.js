import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

function ManualInput() {
    return (
        <View>
            <View>
                <Text>Put in the data yourself</Text>
            </View>

            <Pressable onPress={() => router.replace("/Homepage")}>
                <Text >Homepage</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/Scanner")}>
                <Text >Scanner</Text>
            </Pressable>

            <Pressable onPress={() => router.replace("/Inventory")}>
                <Text >Inventory</Text>
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
export default ManualInput;