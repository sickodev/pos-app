import {
    BoxIcon,
    DragHandleDots1Icon,
    FileIcon,
    ReaderIcon,
    SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import React from "react";
import MotionCard from "../motion/card";
import { Button } from "../ui/button";
import {
    LineChart,
    CartesianGrid,
    Legend,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const LineGraph = () => {
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

    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
    ];
    return (
        <MotionCard>
            <div className='p-1 border border-primary/30 rounded-lg space-y-1'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='p-1 bg-primary-foreground rounded'>
                            <ReaderIcon className='h-5 w-5' />
                        </div>
                        <p className='text-sm font-bold'>
                            Profits for this week
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
                <ResponsiveContainer width='99%' height={300} className='p-1'>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type='monotone'
                            dataKey='pv'
                            stroke='#8884d8'
                            activeDot={{ r: 8 }}
                        />
                        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                    </LineChart>
                </ResponsiveContainer>
                <hr />
                <div className='p-2 space-y-2'>
                    <div className='flex items-center space-x-2'>
                        <div className='p-1 bg-primary-foreground rounded'>
                            <DragHandleDots1Icon className='h-5 w-5' />
                        </div>
                        <p className='text-sm text-secondary-foreground opacity-65 font-bold'>
                            Last orders
                        </p>
                    </div>
                    <hr />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell>{invoice.invoice}</TableCell>
                                    <TableCell>
                                        <Badge
                                            className={cn(
                                                invoice.paymentStatus === "Paid"
                                                    ? `bg-green-500`
                                                    : invoice.paymentStatus ===
                                                      "Pending"
                                                    ? `bg-yellow-500`
                                                    : `bg-red-500`
                                            )}
                                        >
                                            {invoice.paymentStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {invoice.paymentMethod}
                                    </TableCell>
                                    <TableCell>{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell>$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </MotionCard>
    );
};

export default LineGraph;
