import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Redirect, router } from 'expo-router';

function index () {
    return (
        <Redirect href={'/pages/Homepage'} />
    )
}
export default index;