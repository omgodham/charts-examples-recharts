import React from 'react'
import {format , subDays ,parseISO} from 'date-fns';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

function BarChartDG() {
    let data = [];
    for(var i=10 ; i>=1 ; i--){
        data.push({
            date:subDays(new Date(),i).toISOString().substr(0,10),
            value:1 + Math.random(),
            value2: 1 - Math.random()
        });
    }

    return (
        <div>
            <h1>Bar Chart</h1>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="7 7"/>
                <XAxis
                   dataKey="date" 
                />
                <YAxis 
                   dataKey='value' 
                />
                <Tooltip />
                <Bar dataKey='value' fill="blue"/>
                <Bar dataKey='value2' fill="orange"/>
            </BarChart>
        </div>
    )
}

export default BarChartDG
