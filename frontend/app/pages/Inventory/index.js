import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';

function Inventory() {
    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                How terrible of a human being have you been so far?
            </Text>
            <Text style={styles.titleStyle}>
                How much gar-bahj have you scanned that contributes to the death of this planet?
            </Text>

            <DisplayButtons currentPath='Inventory' />

        </SafeAreaView>
    )

}
export default Inventory;

