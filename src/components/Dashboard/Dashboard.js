import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <div>
            <div className="inner-hero">
                <h2>Dashborad</h2>
            </div>
            <div className="charts container">
                <div className="line-chart">
                    <LineChart width={400} height={400} data={chartData}>
                        <Line type="monotone" dataKey="revenue" stroke="#22a6b3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey='revenue' />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className="area-chart">
                    <AreaChart
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#22a6b3" fill="#22a6b3" />
                    </AreaChart>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;