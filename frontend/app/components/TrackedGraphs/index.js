import { View, Text, useWindowDimensions } from "react-native"
import { useState, useEffect } from "react"
import { disposalTypeToColour } from "../tools/graphs/tools"
import LineGraph from "./LineGraph"
import PieChart from "./PieChart"
import DateIntervalPicker from "./DateIntervalPicker"
import styles from "./styles"
import dayjs from "dayjs"
const TrackedGraphs = () => {
    
    const { height, width } = useWindowDimensions();
    const [lineGraphData, setLineGraphData] = useState(null)
    const [pieChartData, setPieChartData] = useState(null)
    const [fromDate, setFromDate] = useState("2023-05-23")
    const [toDate, setToDate] = useState(dayjs(new Date(Date.now())).format("YYYY-MM-DD"))

    const compileGraphData = () => {

        console.log("Compiling data")

        const items =  [
            { name: "Apple", recommended: "Compost", trashedAt: "Compost", date: "2020-02-14" },
            { name: "Battery", recommended: "Trash", trashedAt: "Trash", date: "2020-02-14" },
            { name: "Oranges", recommended: "Compost", trashedAt: "Trash", date: "2020-02-14" },
            { name: "Camera", recommended: "Trash", trashedAt: "Trash", date: "2020-02-15" },
            { name: "Mattress", recommended: "Recycle", trashedAt: "Recycle", date: "2020-02-15" },
            { name: "Phone", recommended: "Trash", trashedAt: "Compost", date: "2020-02-18" },
            { name: "Juice box", recommended: "Compost", trashedAt: "Compost", date: "2020-02-18" },
            { name: "TV", recommended: "Trash", trashedAt: "Trash", date: "2020-02-18" },
            { name: "Charger", recommended: "Compost", trashedAt: "Trash", date: "2024-02-24" },
            { name: "Granola", recommended: "Trash", trashedAt: "Recycle", date: "2024-02-25" },
            { name: "Apple", recommended: "Compost", trashedAt: "Compost", date: "2024-02-14" },
            { name: "Battery", recommended: "Trash", trashedAt: "Trash", date: "2024-02-14" },
            { name: "Oranges", recommended: "Compost", trashedAt: "Trash", date: "2024-02-14" },
            { name: "Camera", recommended: "Trash", trashedAt: "Trash", date: "2024-02-15" },
            { name: "Mattress", recommended: "Recycle", trashedAt: "Recycle", date: "2024-02-15" },
            { name: "Phone", recommended: "Trash", trashedAt: "Compost", date: "2024-02-18" },
            { name: "Juice box", recommended: "Compost", trashedAt: "Compost", date: "2024-02-18" },
            { name: "TV", recommended: "Trash", trashedAt: "Trash", date: "2024-02-18" },
            { name: "Charger", recommended: "Compost", trashedAt: "Trash", date: "2024-02-24" },
            { name: "Granola", recommended: "Trash", trashedAt: "Recycle", date: "2024-02-25" }
        ] 

        let trashedItems = items.filter(i => i.trashedAt && i.date >= fromDate && i.date <= toDate)

        trashedItems.sort((a, b) => a.date > b.date ? 1 : -1)

        const lineData = {}

        const pieData = {}

        while (trashedItems.length > 0) {
            const nextItem = trashedItems.pop()
            const differentItems = trashedItems.filter(i => i.trashedAt != nextItem.trashedAt || i.date != nextItem.date)
            if (!lineData[nextItem.trashedAt]) {
                lineData[nextItem.trashedAt] = {
                    colour: disposalTypeToColour[nextItem.trashedAt],
                    data: []
                }
            }
            lineData[nextItem.trashedAt].data.push({
                y: 1 + trashedItems.length - differentItems.length,
                x: nextItem.date
            })

            if (!pieData[nextItem.trashedAt]) {
                pieData[nextItem.trashedAt] = {
                    colour: disposalTypeToColour[nextItem.trashedAt],
                    title: nextItem.trashedAt,
                    value: 0
                }
            }

            pieData[nextItem.trashedAt].value += 1 + trashedItems.length - differentItems.length

            trashedItems = differentItems
        }

        setLineGraphData(Object.values(lineData))
        setPieChartData(Object.values(pieData))
        
    }

    /* 
    const lines = [
        {
            colour: "blue",
            data: [
                {
                    x: 3,
                    y: 6
                },
                {
                    x: 20,
                    y: 26
                },
                {
                    x: 31,
                    y: 26
                },
                {
                    x: 37,
                    y: 64
                },
                {
                    x: 43,
                    y: 36
                },
                {
                    x: 47,
                    y: 76
                },

            ]
        },
        {
            colour: "green",
            data: [
                {
                    x: 3,
                    y: 16
                },
                {
                    x: 14,
                    y: 26
                },
                {
                    x: 21,
                    y: 16
                },
                {
                    x: 27,
                    y: 64
                },
                {
                    x: 40,
                    y: 36
                },
                {
                    x: 47,
                    y: 46
                },

            ]
        },
        {
            colour: "black",
            data: [
                {
                    x: 3,
                    y: 46
                },
                {
                    x: 4,
                    y: 26
                },
                {
                    x: 21,
                    y: 43
                },
                {
                    x: 27,
                    y: 24
                },
                {
                    x: 40,
                    y: 16
                },
                {
                    x: 47,
                    y: 36
                },

            ]
        }
    ]

    const sections = [
        {
            title: "WASTE",
            colour: "green",
            value: 60
        },
        {
            title: "RECYCLE",
            colour: "blue",
            value: 90
        },
        {
            title: "GARBAGE",
            colour: "grey",
            value: 90
        }
    ]
    */

    useEffect(() => {
        compileGraphData()
    }, [])

    useEffect(() => {
        compileGraphData()
    }, [fromDate, toDate])

    return (
        <View style={styles.root}>
            <Text>Tracked Graphs {width} {height}</Text>
            <View>
                <DateIntervalPicker
                    startDate={fromDate}
                    setStartDate={setFromDate}
                    endDate={toDate}
                    setEndDate={setToDate}
                />
            </View>
            {
                pieChartData &&
                <View style={styles.graphContainer}>
                    <PieChart
                        width={Math.min(width * 0.8, 400)}
                        height={Math.min(width * 0.7, 400)}
                        title={`${fromDate} to ${toDate}`}
                        data={pieChartData}
                    />
                </View>
            }
            {
                lineGraphData &&
                <View style={styles.graphContainer}>
                    <LineGraph 
                        width={Math.min(width * 0.8, 400)}
                        height={Math.min(width * 0.7, 400)}
                        title={`${fromDate} to ${toDate}`}
                        xAxisLabel={"X AXIS"}
                        yAxisLabel={"Y AXIS"}
                        xAxisType={"date"}
                        data={lineGraphData}
                    />
                </View>
            }
        </View>
    )
}

export default TrackedGraphs