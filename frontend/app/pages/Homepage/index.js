
import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import { Divider } from '@rneui/base';
import HomepageCalendar from '../../components/HomepageCalendar';
import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';
import TrackedGraphs from '../../components/TrackedGraphs';


function Homepage() {


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.titleStyle}>
                    GECO
                </Text>
                <View>
                    <Text style={styles.sectionHeader}>Logs Calendar</Text>

                    <HomepageCalendar />
                </View>
                <View>
                    <Text style={styles.sectionHeader}>Bin Distribution</Text>

                    <TrackedGraphs/>
                </View>
                <View style={{height: 40}}></View>
            </ScrollView>
        <DisplayButtons currentPath='Homepage' />
        </SafeAreaView>
    )
}
export default Homepage;