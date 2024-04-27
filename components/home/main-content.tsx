"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Link1Icon } from "@radix-ui/react-icons";
import { Skeleton } from "../ui/skeleton";
import TopCards from "../shared/top-cards";
import BarGraph from "../shared/bar-graph";
import { useEffect, useState } from "react";

const MainContent = () => {
    const { isSignedIn, isLoaded, user } = useUser();
    const [mounted, setMounted] = useState(false);

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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (!isLoaded) {
        return (
            <div className='p-2 w-full'>
                <div className='flex flex-col gap-2'>
                    <Skeleton className='h-16 w-full' />
                    <Skeleton className='h-20 w-full' />
                </div>
            </div>
        );
    }

    if (!isSignedIn && isLoaded) {
        return (
            <div className='p-2 w-full'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-4xl md:text-6xl text-center'>
                        Sign In to access content!
                    </h1>
                    <SignInButton>
                        <Button className='gap-1'>
                            <Link1Icon />
                            <p>Sign In</p>
                        </Button>
                    </SignInButton>
                </div>
            </div>
        );
    }

    return (
        <div className='p-4 w-full space-y-2'>
            <div className=''>
                <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-primary from-30% via-secondary via-90% to-black inline-block text-transparent bg-clip-text'>
                    Welcome, {user.fullName} !!
                </h1>
            </div>
            <div className='gap-2 grid grid-cols-2 md:grid-cols-5 md:grid-rows-3 grid-rows-3'>
                <div className='col-span-3 row-span-1'>
                    <TopCards />
                </div>
                <div className='md:col-span-2 col-span-2 md:row-span-3 row-span-1 h-full w-full bg-white'></div>
                <div className='md:col-span-3 col-span-2 md:row-span-2 row-span-1 rounded-lg w-full'>
                    <BarGraph />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
