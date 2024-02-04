
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Jan', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'Feb', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'Mar', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'Apr', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'May', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'Jun', Expense: getRandomValue(), Income: getRandomValue() },
    { name: 'Jul', Expense: getRandomValue(), Income: getRandomValue() },
  ];
  
  // Function to generate a random value
  function getRandomValue() {
    return Math.floor(Math.random() * 10000); 
  }

// const data = [
//     {
//       name: 'Page A',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page B',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page C',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page D',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page E',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page F',
//       Expense: 4000,
//       Income: 2400,
//     },
//     {
//       name: 'Page G',
//        Expense: 4000,
//       Income: 2400,
//     },
//   ];
  




function TransactionChart(){
    return (
<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
<strong className="text-gray-700 font-medium">Transactions</strong>
    <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500}
            height={300}
            data={data}
            margin={{
                top:20,
                right:10,
                left:-10,
                bottom:0
            }}>

          <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="#Bea5e9"/>
          <Bar dataKey="Expense" fill="#ea580c"/>
          </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
    )

}

export default TransactionChart