
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';
import TrackedGraphs from '../../components/TrackedGraphs';


function Homepage() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Dis Da Homepage
            </Text>
            <TrackedGraphs/>
            <DisplayButtons currentPath='Homepage' />
        </SafeAreaView>
    )

}
export default Homepage;