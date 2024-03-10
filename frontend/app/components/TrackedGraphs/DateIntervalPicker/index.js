import DTPicker from '@react-native-community/datetimepicker';
import { Pressable, Text, View, SafeAreaView } from "react-native"
import { useState } from "react"
import dayjs from 'dayjs';
import styles from "./styles"

const DateIntervalPicker = ({startDate, endDate, setStartDate, setEndDate}) => {

    const [startDateOpen, setStartDateOpen] = useState(false)
    const [endDateOpen, setEndDateOpen] = useState(false)

    const [startDateVal, setStartDateVal] = useState(new Date(Date.now() - 5000))
    const [endDateVal, setEndDateVal] = useState(new Date(Date.now()))

    return (
        <View style={styles.root}>
            <Text style={styles.header}>Visualizations</Text>
            <View style={styles.selectors}>
                <Pressable onPress={() => { setStartDateOpen(true); setEndDateOpen(false)}}>
                    <Text style={styles.btn} >From   
                    <Text style={styles.btnDate}> { startDate}</Text></Text>
                </Pressable>
                <Pressable onPress={() => { setEndDateOpen(true); setStartDateOpen(false)}}>
                <Text style={styles.btn} > to 
                    <Text style={styles.btnDate}> {endDate}</Text></Text>                
                </Pressable>
            </View>
            {
                startDateOpen && 
                <SafeAreaView style={styles.pickerView}>
                    <Text style={styles.pickerHeader}>Select the start date of the interval</Text>
                    <DTPicker 
                        date={startDateVal}
                        value={startDateVal}
                        onChange={(e, s) => { 
                            console.log(s)
                            if (s) {
                                setStartDateVal(s)
                                setStartDate(dayjs(s).format("YYYY-MM-DD"))
                                setStartDateOpen(false)
                            }
                        }}
                        mode="date"
                    />
                </SafeAreaView>
            }
            {
                endDateOpen &&
                    <SafeAreaView style={styles.pickerView}>
                        <Text style={styles.pickerHeader}>Select the end date of the interval</Text>
                        <DTPicker 
                            value={endDateVal}
                            onChange={(e, s) => {
                                console.log(s)
                                if (s) {
                                    setEndDateVal(s)
                                    setEndDate(dayjs(s).format("YYYY-MM-DD"))
                                    setEndDateOpen(false)
                                }                    
                            }}
                            mode="date"
                        />
                    </SafeAreaView>
            }
        
        </View>
    )
}

export default DateIntervalPicker