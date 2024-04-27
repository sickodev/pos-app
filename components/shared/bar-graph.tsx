"use client";
import { BarChartIcon, FileIcon } from "@radix-ui/react-icons";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import React from "react";
import MotionCard from "../motion/card";
import { Button } from "../ui/button";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const BarGraph = () => {
    return (
        <MotionCard>
            <div className='p-1 space-y-2 border border-secondary-foreground/30 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-2'>
                        <div className='bg-primary-foreground p-1 rounded'>
                            <BarChartIcon className='h-5 w-5' />
                        </div>
                        <p className='font-bold text-sm'>
                            Analytics for the week
                        </p>
                    </div>
                    <div className='items-center flex justify-between text-sm'>
                        <Button
                            variant={"outline"}
                            className='flex items-center justify-between space-x-1'
                        >
                            <FileIcon className='w-5 h-5' />
                            <p className='text-sm uppercase font-bold'>
                                Export
                            </p>
                        </Button>
                        <Button variant={"link"}>View More</Button>
                    </div>
                </div>
                <hr />
                <div className='w-full h-full'>
                    <ResponsiveContainer
                        width='99%'
                        height={300}
                        className='p-2'
                    >
                        <BarChart data={data}>
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar
                                dataKey={"pv"}
                                fill='#888aed'
                                name='expenditure'
                                className='bg-red-500'
                            ></Bar>
                            <Bar
                                dataKey={"uv"}
                                fill='#fffaef'
                                name='profit'
                            ></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </MotionCard>
    );
};

export default BarGraph;
