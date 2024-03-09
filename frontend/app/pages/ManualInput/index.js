import React from 'react';
import { Text, SafeAreaView} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';

function ManualInput() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Do it yourself bar
            </Text>


            <DisplayButtons currentPath='ManualInput' />

        </SafeAreaView>
    )
}
export default ManualInput;