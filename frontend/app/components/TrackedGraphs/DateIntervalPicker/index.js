import DateTimePicker from "react-native-ui-datepicker"
import { Pressable, Text, View } from "react-native"
import { useState } from "react"
import dayjs from 'dayjs';
import styles from "./styles"

const DateIntervalPicker = ({startDate, endDate, setStartDate, setEndDate}) => {

    const [startDateOpen, setStartDateOpen] = useState(false)
    const [endDateOpen, setEndDateOpen] = useState(false)

    const [startDateVal, setStartDateVal] = useState(dayjs())
    const [endDateVal, setEndDateVal] = useState(dayjs())

    return (
        <View style={styles.root}>
            <View style={styles.selectors}>
                <Pressable onPress={() => { setStartDateOpen(true); setEndDateOpen(false)}}>
                    <Text style={styles.btn} >From {startDate}</Text>
                </Pressable>
                <Pressable onPress={() => { setEndDateOpen(true); setStartDateOpen(false)}}>
                    <Text style={styles.btn} >To {endDate}</Text>
                </Pressable>
            </View>
            {
                startDateOpen && 
                <View style={styles.picker}>
                    <Text style={styles.pickerHeader}>Select the start date of the interval</Text>
                    <DateTimePicker 
                        date={startDateVal}
                        onChange={(startDate) => { 
                            if (startDate.date) {
                                setStartDate(dayjs(startDate.date).format("YYYY-MM-DD"))
                                console.log(startDate)
                                setStartDateVal(startDate.date)
                                console.log(dayjs(startDate.date).format("YYYY-MM-DD"))
                                setStartDateOpen(false)
                            }
                        }}
                        mode="single"
                    />
                </View>
            }
            {
                endDateOpen &&
                <View style={styles.picker}>
                    <Text style={styles.pickerHeader}>Select the end date of the interval</Text>
                    <DateTimePicker 
                        date={endDateVal}
                        onChange={(endDate) => {
                            if (endDate.date) {
                                setEndDateVal(endDate.date)
                                setEndDate(dayjs(endDate.date).format("YYYY-MM-DD"))
                                setEndDateOpen(false)
                            }                    
                        }}
                        mode="single"
                    />
                </View>
            }
        
        </View>
    )
}

export default DateIntervalPicker