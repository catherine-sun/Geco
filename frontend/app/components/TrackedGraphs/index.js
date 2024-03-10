import { View, Text, useWindowDimensions } from "react-native"
import { useState, useEffect } from "react"
import { disposalTypeToColour } from "../tools/graphs/tools"
import LineGraph from "./LineGraph"
import PieChart from "./PieChart"
import DateIntervalPicker from "./DateIntervalPicker"
import styles from "./styles"
import dayjs from "dayjs"
const TrackedGraphs = ({itemType = "bags"}) => {
    
    const { height, width } = useWindowDimensions();
    const [lineGraphData, setLineGraphData] = useState(null)
    const [pieChartData, setPieChartData] = useState(null)
    const [fromDate, setFromDate] = useState("2023-05-23")
    const [toDate, setToDate] = useState(dayjs(new Date(Date.now())).format("YYYY-MM-DD"))

    const compileGraphData = () => {

        console.log("Compiling data")

        let items;

        const itemItems =  [
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

        
        const bagItems = [
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
        ]

        if (itemType == "bags") {
            const it = []
            bagItems.forEach(
                b => {
                    for (let i = 0; i < b.small; i++) {
                        it.push({
                            ...b,
                            trashedAt: b.name
                        })
                    }

                    for (let i = 0; i < b.medium; i++) {
                        for (let j = 0; j < 3; j++){
                            it.push({
                                ...b,
                                trashedAt: b.name
                            })
                        }
                    }

                    for (let i = 0; i < b.large; i++) {
                        for (let j = 0; j < 6; j++){
                            it.push({
                                ...b,
                                trashedAt: b.name
                            })
                        }
                    }
                }
            )
            items = it
        } else {
            items = itemItems
        }

        console.log("items")
        console.log(items)
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
            <View key="3434543636">
                <DateIntervalPicker
                    startDate={fromDate}
                    setStartDate={setFromDate}
                    endDate={toDate}
                    setEndDate={setToDate}
                />
            </View>
            {
                pieChartData && pieChartData.length == 0 &&
                (
                    <View style={styles.noDataContainer}>
                        <Text style={styles.noDataContainerText}>No data from {fromDate} to {toDate}. Select dates with logged entries to view your visualizations.</Text>
                    </View>
                )
            }
            {
                pieChartData &&  pieChartData.length > 0 &&
                    <View key="piechart" style={styles.graphContainer}>
                        <PieChart
                            width={Math.min(width * 0.8, 400)}
                            height={Math.min(width * 0.7, 400)}
                            paddingHeight={30}
                            paddingWidth={30}
                            title={`${fromDate} to ${toDate}`}
                            data={pieChartData}
                        />
                    </View>
            }
            {
                lineGraphData && lineGraphData.length > 0 &&
                <View key="linegraph" style={styles.graphContainer}>
                    <LineGraph 
                        width={Math.min(width * 0.8, 400)}
                        height={Math.min(width * 0.7, 400)}
                        title={`${fromDate} to ${toDate}`}
                        paddingHeight={30}
                        paddingWidth={30}
                        xAxisLabel={""}
                        yAxisLabel={""}
                        xAxisType={"date"}
                        data={lineGraphData}
                    />
                </View>
               
            }
        </View>
    )
}

export default TrackedGraphs