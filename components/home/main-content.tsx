"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Link1Icon } from "@radix-ui/react-icons";
import { Skeleton } from "../ui/skeleton";

const MainContent = () => {
    const { isSignedIn, isLoaded, user } = useUser();
    const { toast } = useToast();

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
        <div className='p-2 w-full'>
            <div>
                <h1 className='text-4xl md:text-6xl text-center'>
                    Welcome, {user.fullName} 🎊🎊
                </h1>
            </div>
        </div>
    );
};

export default MainContent;
