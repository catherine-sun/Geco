import * as d3 from "d3";

export const disposalTypeToColour = {
    "Compost": "green",
    "Recycle": "blue",
    "Trash": "grey",
    "Recycling": "blue"
}

export class GraphConstructor {

    getScaleFromType(type, dMin, dMax, rMin, rMax) {
        console.log(dMin, dMax, type)
        switch(type) {
            case "date":
                const scale = d3.scaleTime([new Date(dMin), new Date(dMax)], [rMin, rMax])
                return (s) => scale(new Date(s))
            default:
                return d3.scaleLinear([dMin, dMax], [rMin, rMax])
        }
    }
    createGraph(width, height, title) {
        return ({
            width,
            height,
            title
        })
    }
    
    createLineGraph({width, height, title, xAxisLabel, yAxisLabel, xAxisType, paddingWidth, paddingHeight, lines}){

        console.log(lines)

        const allX = lines.map(line => line.data.map(d => d.x)).flat();
        const allY = lines.map(line => line.data.map(d => d.y)).flat();
        console.log(allX)
        const maxX = d3.max(allX)
        const minX = d3.min(allX)

        const maxY = d3.max(allY)
        const minY = d3.min(allY)

        const obj = this.createGraph(width, height, title, 
            xAxis={min: minX, max: maxX, label: xAxisLabel}, yAxis={min: 0, max: maxY, label: yAxisLabel})

        obj.lines = []

        const xAxisScale = this.getScaleFromType(
            xAxisType, 
            minX, 
            maxX,
            0,
            width - 2 * paddingWidth - 6
        )

        const yAxisScale = d3.scaleLinear()
            .domain([maxY + 1, Math.max(0, minY - 1)])
            .range([0, height - 2 * paddingHeight])

        obj.xAxis = {
            min: minX, 
            max: maxX, 
            label: xAxisLabel, 
            buildTicks: () => {
            }
        }
        obj.yAxis = {
            min: maxY, 
            max: maxY, 
            label: yAxisLabel,
            buildTicks: () => {}
        }    
        lines.forEach(line => {

            const graphLine = d3.line()
                .x(d => xAxisScale(d.x) + paddingWidth)
                .y(d => yAxisScale(d.y) + paddingHeight)
                .curve(d3.curveCardinal.tension(0.4))
            
                
            obj.lines.push({
                d: graphLine(line.data),
                colour: line.colour
            })
        })

        console.log(obj)
        return obj

    }

    createPieChart({width, height, title, paddingWidth, paddingHeight, sections}){

        const obj = {
            width,
            height,
            title,
            sections: []
        }

        const radius = Math.min(width - 2 * paddingWidth, height - 2 * paddingHeight)/2

        const pie = d3.pie()
            .value(d => d.value)
           
        const pieData = pie(sections)

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius)

        obj.sections = pieData.map((d,i) => ({
            d: arc(d),
            colour: sections[i].colour,
            title: sections[i].title,
            value: sections[i].value
        }))

        return obj
    }
}
