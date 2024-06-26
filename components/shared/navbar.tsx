import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    UserButton,
} from "@clerk/nextjs";
import {
    CubeIcon,
    HomeIcon,
    LockClosedIcon,
    PersonIcon,
    PlusIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className: string }) => {
    return (
        <div
            className={cn(
                className,
                "relative h-full w-12 mt-2 mb-2 p-2 flex flex-col justify-between items-center gap-y-2 border rounded-lg bg-neutral-900 shadow-lg"
            )}
        >
            <div className=''>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size={"icon"}
                                variant={"ghost"}
                                className=' p-2 rounded-lg'
                            >
                                <HomeIcon className='w-5 h-5' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white bg-black'>
                            <p>Dashboard</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size={"icon"}
                                variant={"ghost"}
                                className=' p-2 rounded-lg'
                            >
                                <CubeIcon className='w-5 h-5' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white bg-black'>
                            <p>Orders</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size={"icon"}
                                variant={"ghost"}
                                className=' p-2 rounded-lg'
                            >
                                <PlusIcon className='w-5 h-5' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white bg-black'>
                            <p>Add Order</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size={"icon"}
                                variant={"ghost"}
                                className=' p-2 rounded-lg'
                            >
                                <PersonIcon className='w-5 h-5' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white bg-black'>
                            <p>Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div>
                <SignedIn>
                    <SignOutButton>
                        {/* <Button size={"icon"} variant={"secondary"}>
                    <LockOpen1Icon className='w-5 h-5' />
                </Button> */}
                        <UserButton
                            appearance={{
                                elements: {
                                    userPreview: "bg-gray-300",
                                },
                            }}
                        />
                    </SignOutButton>
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
