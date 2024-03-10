import { View, Text } from "react-native"
import { Svg, G, Line, Path, Text as SvgText } from "react-native-svg"
import { useState, useEffect } from "react"
import { GraphConstructor } from "../../tools/graphs/tools";

const LineGraph = ({
    data, 
    width, 
    height, 
    title,
    xAxisLabel,
    yAxisLabel,
    xAxisType,
    paddingWidth = 50, 
    paddingHeight = 50
}) => {

    const [graphProps, setGraphProps] = useState(null)
    const graphBuilder = new GraphConstructor()

    useEffect(() => {
        setGraphProps(graphBuilder.createLineGraph({width, height, title, xAxisLabel, yAxisLabel, xAxisType, paddingWidth, 
            paddingHeight, lines: data}))
    }, [data])

    return (
        <View>
            <Svg width={width} 
                height={height} 
            >
                {
                    graphProps &&
                    <G >
                        {/* TITLE */}
                        <SvgText
                            fill="grey"
                            fontWeight={"bold"}
                            x={width / 2}
                            y={2 * paddingHeight / 3}
                            textAnchor={"middle"}
                            fontFamily="Arial"
                        >
                            {title}
                        </SvgText>
                        {/* xAxis */}
                        <Line
                            stroke={"grey"}
                            strokeWidth={3}
                            x1={paddingWidth}
                            y1={height - paddingHeight}
                            x2={width - paddingWidth}
                            y2={height - paddingHeight}
                            strokeLinecap="round"
                        />
                        {
                            graphProps.xAxis.buildTicks()
                        }
                        <SvgText
                            x={-((height)/2)}
                            y={paddingHeight / 2}
                            transform={`rotate(-90)`}
                            textAnchor={"middle"}
                        >
                            {graphProps.xAxis.label}
                        </SvgText>
                        {/* yAxis */}
                        <Line
                            stroke={"grey"}
                            strokeWidth={3}
                            x1={paddingWidth}
                            y1={paddingHeight}
                            x2={paddingWidth}
                            y2={height - paddingHeight}
                            strokeLinecap="round"
                        />
                        <SvgText
                            x={width / 2}
                            y={height - paddingHeight / 2}
                            textAnchor={"middle"}
                        >
                            {graphProps.xAxis.label}
                        </SvgText>
                        {
                            graphProps.lines && graphProps.lines.map(line => (
                                <Path
                                    key={line.d}
                                    stroke={line.colour}
                                    strokeWidth={3}
                                    fill={"transparent"}
                                    d={line.d}
                                    strokeLinecap="round"
                                />
                            ))
                        }
                    </G>
                }
                
            </Svg>
        </View>
    )
}

export default LineGraph