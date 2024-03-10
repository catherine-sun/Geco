import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Alert, StyleSheet } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import * as tools from './tools/db';


function HomepageCalendar() {

    const [bags, setBags] = useState([]);
    const [marked, setMarked] = useState({});

    useEffect(() => {
        async function storeData() {
            await tools.storeData("bags", [
                {name: "Trash", date: "2024-03-01", small: 0, medium: 0, large: 3},
                {name: "Compost", date: "2024-03-01", small: 0, medium: 1, large: 0},
                {name: "Trash", date: "2024-03-03", small: 1, medium: 0, large: 0},
                {name: "Recycling", date: "2024-03-03", small: 1, medium: 0, large: 0},
                {name: "Compost", date: "2024-03-03", small: 1, medium: 0, large: 0},
                {name: "Trash", date: "2024-03-05", small: 0, medium: 1, large:0},
                {name: "Recycling", date: "2024-03-06", small: 0, medium: 0, large: 2},
                {name: "Trash", date: "2024-03-08", small: 1, medium: 2, large: 0},
                {name: "Compost", date: "2024-03-08", small: 1, medium: 0, large: 0},
                {name: "Compost", date: "2024-03-09", small: 0, medium: 0, large: 2},
                {name: "Recycling", date: "2024-03-09", small:0, medium: 2, large: 1}
            ])
            setBags(await tools.getData("bags"));
        }
        storeData();

        async function getData() {
            await tools.getData("bags")
            setBags(await tools.getData("bags"));
        }
        getData();

    }, []);

    useEffect(() => {
        const color = {
            'Trash': 'black',
            'Recycling': 'blue',
            'Compost': 'green',
          };
          setMarked(bags.reduce((acc, bag) => {
            if (!acc[bag.date]) {
              acc[bag.date] = {dots: []};
            }
            if(!acc[bag.date].dots.includes(bag.name)) {
              acc[bag.date].dots.push({
                  key: bag.name,
                  color: color[bag.name]
              });
            }
            return acc;
        }, {}));

    }, [bags]);

    const T = {
        key: "Trash",
        color: "grey",
    }

    const R = {
        key: "Recycling",
        color: "blue",
    }

    const C = {
        key: "Compost",
        color: "green",
    }

    function displayString(day) {
        let dayBags = '';

        for (let i=0; i< bags.length; i++) {
            if(bags[i].date === day) {
                let temp = bags[i].name+': \n'
                if(bags[i].small > 0){
                    temp += '\t\t○ '+bags[i].small+' small bag(s)';
                }
                if(bags[i].medium > 0){
                    if(temp !== bags[i].name+': \n')
                        temp += '\n'
                    temp += '\t\t○ '+ bags[i].medium+' medium bag(s)';
                }
                if(bags[i].large > 0){
                    if(temp !== bags[i].name+': \n')
                        temp += '\n'
                    temp += '\t\t○ '+bags[i].large+ ' large bag(s)'
                }
                dayBags += temp+ '\n';
            }
        }
        if(dayBags === '')
            dayBags = 'You did not throw anything out on '+day;

        return dayBags
    }

    function displayBags(day) {
        return (
            Alert.alert(day, displayString(day), [
                {
                    text: 'Done',
                },
            ])
        )
    }


    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView>
                <Calendar
                    onDayPress={(day) => displayBags(day.dateString)}
                    initialDate= "2024-03-01"
                    markingType="multi-dot"
                    markedDates={marked}
                />
            </SafeAreaView>

        </SafeAreaView>
    )

}
export default HomepageCalendar;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
  });