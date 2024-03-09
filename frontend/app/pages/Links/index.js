import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

function Links() {
    return (
        <View>
            <View>
                <Text>Low effort, links only </Text>
                <Text> (https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-blue-bin/</Text>
                <Text>https://www.toronto.ca/services-payments/recycling-organics-garbage/houses/what-goes-in-my-green-bin/)</Text>
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

            <Pressable onPress={() => router.replace("./About")}>
                <Text >About Us</Text>
            </Pressable>

        </View>
    )

}
export default Links;