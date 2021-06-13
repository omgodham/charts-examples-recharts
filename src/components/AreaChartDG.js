import React from 'react'

//for formating dates
import {format , subDays ,parseISO} from 'date-fns';
import {
AreaChart ,
Area,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from 'recharts'
function AreaChartDG() {

   let data = [];
    for(var i=30 ; i>=1 ; i--){
        data.push({
            date:subDays(new Date(),i).toISOString().substr(0,10),
            value:1 + Math.random(),
            value2: 1 - Math.random()
        });
    }
    return (
        <div>
            <h1>Area Chart</h1>
            <AreaChart width={600} height={400} data={data}>
                <Area type='monotone' dataKey='value' fill="blue"/>
                <Area type='linear' dataKey='value2' fill="orange"/>
                <XAxis 
                    dataKey='date'
                    // axisLine={false}
                />   
                <YAxis 
                    dataKey='value'
                    tickCount={5}
                    
                  
                />

                <Tooltip content={<CustomTooltip />}/>
                <CartesianGrid vertical={false} opacity={0.5}/>
            </AreaChart>

        </div>
    )
}

const CustomTooltip = ({active , payload , label}) => {
   if(active)
    return (
        <div style={{backgroundColor:"#fff" , padding:"5px" , color:"gray"}}>
            <h4>{format(parseISO(label) , "eeee , d MMM , yyyy")}</h4>
            <p>$ {payload[0].value.toFixed(2)}</p>
            <p>CDP {payload[1].value.toFixed(2)}</p>
        </div>
); else return ""
}


export default AreaChartDG;

