import React from 'react'
import {
    RadialBarChart,
    RadialBar,
    Tooltip,
    Legend
} from 'recharts';
import {format , subDays ,parseISO} from 'date-fns';
function RadialBarChartDG() {

   const data =   [
       { 
  "name": "50+",
   "uv": -2.63,
   "pv": 4800,
   "fill": "#d0ed57"
 },
 {
    "name": "12+",
    "uv": 2.4,
    "pv": 4800,
    "fill": "#ffh658"
  },
  {
    "name": "45+",
    "uv": 5.3,
    "pv": 4800,
    "fill": "#ffe658"
  },
  {
    "name": "44+",
    "uv": 4.5,
    "pv": 4800,
    "fill": "#f0cd57"
  },
 {
   "name": "22+",
   "uv": 6.67,
   "pv": 4800,
   "fill": "#ffc658"
 }
]

    return (
        <div>
        <h1> RadialBarChart </h1>
            <RadialBarChart 
                width={700}
                height={500}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
               startAngle={180}
               endAngle={0}
            >
            <RadialBar dataKey='uv' label={{fill:"black", position: 'insideStart'}} background clockWise={true} fill="orange"/>
            <Legend layout='vertical' width={120} height={140} verticalAlign='middle' align="right"/>
            <Tooltip />
            </RadialBarChart>
        </div>
    )
}

export default RadialBarChartDG
