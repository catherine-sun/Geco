import DateTimePicker from "react-native-ui-datepicker"
import { Pressable, Text, View, Modal } from "react-native"
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
            <Text style={styles.header}>Visualizations</Text>
            <View style={styles.selectors}>
                <Pressable onPress={() => { setStartDateOpen(true); setEndDateOpen(false)}}>
                    <Text style={styles.btn} >From 
                    <Text style={styles.btnDate}>{startDate}</Text></Text>
                </Pressable>
                <Pressable onPress={() => { setEndDateOpen(true); setStartDateOpen(false)}}>
                <Text style={styles.btn} >to 
                    <Text style={styles.btnDate}>{endDate}</Text></Text>                
                </Pressable>
            </View>
            {
                startDateOpen && 
                <Modal
                    style={styles.picker}
                    transparent={true}
                    onDismiss={() => setStartDateOpen(false)}
                    onRequestClose={() => setStartDateOpen(false)}

                >
                <View style={styles.pickerView}>
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
                </Modal>
            }
            {
                endDateOpen &&
                <Modal
                    style={styles.picker}
                    transparent={true}
                    onDismiss={() => setStartDateOpen(false)}
                    onRequestClose={() => setStartDateOpen(false)}

                >
                    <View style={styles.pickerView}>
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
                </Modal>
            }
        
        </View>
    )
}

export default DateIntervalPicker