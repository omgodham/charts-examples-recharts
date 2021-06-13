import React from 'react'
import {format , subDays ,parseISO} from 'date-fns';
import { Pie, PieChart } from 'recharts';

function PieChartDG() {
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
        <h1>Pie Chart</h1>
            <PieChart width={500} height={500}>
                <Pie data={data} label='date' dataKey="value" nameKey="date" innerRadius={150} outerRadius={200} fill="blue"/>
               <Pie data={data} dataKey="value2" nameKey="date" outerRadius={100} fill="orange"/> 
            </PieChart>
        </div>
    )
}

export default PieChartDG
