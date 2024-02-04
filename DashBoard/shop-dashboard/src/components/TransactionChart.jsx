
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    { Name: 'Jan', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Feb', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Mar', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Apr', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'May', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Jun', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Jul', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Aug', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Sep', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Oct', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Nov', Expense: getRandomValue(), Income: getRandomValue() },
    { Name: 'Dec', Expense: getRandomValue(), Income: getRandomValue() },
  ];
  
  // Function to generate a random value
  function getRandomValue() {
    return Math.floor(Math.random() * 10000); 
  }


function TransactionChart(){
    return (
<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-300 flex flex-col flex-1 mt-5">
<strong className="text-gray-700 font-medium">Transactions</strong>
    <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            width={500}
            height={300}
            data={data}
            margin={{
                top:20,
                right:10,
                left:-10,
                bottom:0
            }}
            >

          <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="#778da9"/>
          <Bar dataKey="Expense" fill="#f07167"/>
          </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
    )

}

export default TransactionChart