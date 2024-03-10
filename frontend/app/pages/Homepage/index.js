
import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';

import HomepageCalendar from '../../components/HomepageCalendar';
import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';


function Homepage() {


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <HomepageCalendar />
            </ScrollView>

        <DisplayButtons currentPath='Homepage' />

        </SafeAreaView>
    )
}
export default Homepage;