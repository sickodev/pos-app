"use client";
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import axios from "axios";
import MotionCard from "../motion/card";
import { Progress } from "../ui/progress";
import { Dialog, DialogTrigger } from "../ui/dialog";

const TopCards = () => {
    const invoices = [
        {
            id: 1,
            name: "Apples",
            price: "$10",
            quantity: 250,
        },
        {
            id: 2,
            name: "Chips",
            price: "$2.50",
            quantity: 500,
        },
    ];

    return (
        <div className='space-y-2 space-x-1 w-full'>
            <p className='font-thin'>Your weekly insights</p>
            <div className='flex md:justify-between justify-evenly items-start'>
                <MotionCard>
                    <Card>
                        <CardHeader>
                            <CardDescription>
                                This week&apos;s performance
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            <CardTitle className='text-4xl font-light text-right'>
                                <span className='text-lg mx-0.5 font-bold'>
                                    $
                                </span>
                                1234
                            </CardTitle>
                            <div className='space-y-1'>
                                <p className=''>13% more than previous week.</p>
                                <Progress
                                    value={13}
                                    className='w-full bg-primary-foreground'
                                />
                            </div>
                            <div>
                                <p className='text-sm font-thin italic'>
                                    Highest selling produce - Oranges
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <Button variant={"link"}> View More</Button>
                        </CardFooter>
                    </Card>
                </MotionCard>
                <MotionCard>
                    <Card>
                        <CardHeader>
                            <CardDescription>
                                Highest Selling Item
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.id}>
                                            <TableCell>
                                                {invoice.name}
                                            </TableCell>
                                            <TableCell>
                                                {invoice.price}
                                            </TableCell>
                                            <TableCell>
                                                {invoice.quantity}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <Button variant={"link"}> View More</Button>
                        </CardFooter>
                    </Card>
                </MotionCard>
                <MotionCard>
                    <Card className='hidden md:block'>
                        <CardHeader>
                            <CardDescription>
                                This week&apos;s profit
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            <CardTitle className='text-4xl  font-light text-right'>
                                <span className='text-lg mx-0.5 font-bold'>
                                    $
                                </span>
                                1234
                            </CardTitle>
                            <div className='space-y-1'>
                                <p className=''>13% more than previous week.</p>
                                <Progress
                                    value={13}
                                    className='w-full bg-primary-foreground'
                                />
                            </div>
                            <div>
                                <p className='text-sm font-thin italic'>
                                    Highest profitable unit - Apples
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <Button variant={"link"}> View More</Button>
                        </CardFooter>
                    </Card>
                </MotionCard>
            </div>
        </div>
    );
};

export default TopCards;
