import { View, Text, Pressable } from "react-native"
import { Svg, G, Line, Path, Text as SvgText, Circle } from "react-native-svg"
import { useState, useEffect } from "react"
import { GraphConstructor } from "../../tools/graphs/tools";
import { TouchableOpacity } from "react-native";
import PieChartToolTip from "./PieChartToolTip";
import styles from "./styles";

const PieChart = ({
    data, 
    width, 
    height, 
    title,
    paddingWidth = 50, 
    paddingHeight = 50
}) => {

    const [graphProps, setGraphProps] = useState(null)
    const [openTooltip, setOpenTooltip] = useState(null)
    const [toolTipPos, setTooltipPos] = useState([200,10])

    const graphBuilder = new GraphConstructor()

    
    useEffect(() => {
        setGraphProps(graphBuilder.createPieChart({width, height, title, paddingWidth, 
            paddingHeight, sections: data}))
    }, [data])

    const setTooltipLayout = (t, e) => {
        const {x, y, width, height} = e.nativeEvent.layout;
        console.log(t)
        console.log(e.nativeEvent.layout)
    }

    return (
        <View>
            <TouchableOpacity onPress={(e) => {console.log(e); setTooltipPos([e.nativeEvent.pageX, e.nativeEvent.pageY])}}>
                <Svg width={width} height={height}>
                    {
                        graphProps &&
                        <G width={width} height={height}>
                            {/* TITLE */}
                            <SvgText
                                x={width / 2}
                                y={paddingHeight / 2}
                                textAnchor={"middle"}
                            >
                                {title}
                            </SvgText>
                            {
                                graphProps.sections && graphProps.sections.map(section => (
                                    <>
                                        <Path
                                            onLayout={(e) => setTooltipLayout(section.title, e)}
                                            id={`${section.title}-arc`}
                                            onClick={() => { 
                                                console.log(section.title); setOpenTooltip(section.title)}
                                            }
                                            onPress={() => { 
                                                console.log(section.title); setOpenTooltip(section.title)}
                                            }
                                            key={section.colour}
                                            fill={section.colour}
                                            d={section.d}
                                            translate={[width/2, height/2]}
                                            strokeWidth={3}
                                            stroke={"white"}
                                        />
                                    </>

                                ))
                            }
                        </G>
                    }
                </Svg>
                {
                graphProps && graphProps.sections && graphProps.sections.map(
                    section => (
                        <>
                            <PieChartToolTip 
                                visible={openTooltip == section.title}
                                onClose={() => setOpenTooltip(null)}
                                style={{
                                    position: "fixed",
                                    top: toolTipPos[1],
                                    left: toolTipPos[0],
                                    color: "white",
                                    backgroundColor: section.colour,
                                    border: "3px solid"
                                }}
                                width={100}
                                content={
                                    <View>
                                        <Text style={styles.tooltipContent}>
                                            {`${section.title}`} - {section.value}
                                        </Text>
                                    </View>
                                }
                            />
                        </>
                    )
                )
            }
            </TouchableOpacity>
        </View>
    )
}
export default PieChart