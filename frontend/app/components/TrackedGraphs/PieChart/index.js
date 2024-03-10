import { View, Text, Pressable } from "react-native"
import { Svg, G, Line, Path, Text as SvgText, Circle } from "react-native-svg"
import { useState, useEffect } from "react"
import { GraphConstructor } from "../../tools/graphs/tools";
import PieChartToolTip from "./PieChartToolTip";
import { TouchableOpacity } from "react-native";
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
    const [toolTipPositions, setTooltipPositions] = useState({})
    const graphBuilder = new GraphConstructor()

    
    useEffect(() => {
        setGraphProps(graphBuilder.createPieChart({width, height, title, paddingWidth, 
            paddingHeight, sections: data}))
    }, [data])

    const setTooltipLayout = (t, x, y) => {
        //const {x, y, width, height} = e.nativeEvent.layout;
        console.log(t)
        setTooltipPositions({...toolTipPositions, [t]: [x, y]})
    }

    return (
        <View>
                <Svg width={width} height={height}>
                    {
                        graphProps &&
                        <G width={width} height={height}>
                            {/* TITLE */}
                            <SvgText
                                fill="grey"
                                x={width / 2}
                                y={2 * paddingHeight / 3}
                                textAnchor={"middle"}
                                fontWeight={"bold"}
                                fontFamily="Arial"
                            >
                                {title}
                            </SvgText>
                            {
                                graphProps.sections && graphProps.sections.map(section => (
                                    <>
                                        <Path
                                            id={`${section.title}-arc`}
                                            onClick={(e) => { 
                                                setTooltipLayout(section.title, e.nativeEvent.pageX, e.nativeEvent.pageY)
                                                console.log(section.title); setOpenTooltip(section.title)}
                                            }
                                            onPress={(e) => { 
                                                setTooltipLayout(section.title, e.nativeEvent.pageX, e.nativeEvent.pageY)
                                                console.log("press onclick" + section.title); setOpenTooltip(section.title)}
                                            }
                                            key={section.colour + section.title}
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
                graphProps && graphProps.sections &&
                    graphProps.sections.map(
                    section => (
                        <>
                            <PieChartToolTip 
                                key={`${section.title}-${section.value}`}
                                visible={openTooltip == section.title}
                                onClose={() => setOpenTooltip(null)}
                                myStyle={{
                                    position: "fixed",
                                    top: toolTipPositions[section.title] ? toolTipPositions[section.title][1] : 100,
                                    left: toolTipPositions[section.title] ? toolTipPositions[section.title][0] : 100,
                                    color: "white",
                                    backgroundColor: section.colour,
                                    borderWidth: 3,
                                    borderColor: "white",
                                    maxWidth: 130
                                }}
                                content={
                                    <Text 
                                        key={`${section.title}-${section.value}-text`} 
                                        style={styles.tooltipContent}
                                    >
                                        {section.title} - {section.value}
                                    </Text>
                                }
                            />
                        </>
                    )
                )
            }
        </View>
    )
}
export default PieChart