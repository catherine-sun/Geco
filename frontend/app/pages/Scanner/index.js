import React from 'react';
import { Text, SafeAreaView} from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';

function Scanner() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Make Camera Work Good
            </Text>


            <DisplayButtons currentPath='Scanner' />

        </SafeAreaView>
    )

}
export default Scanner;
