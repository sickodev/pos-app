import Navbar from "@/components/shared/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <div className='sticky h-screen top-0 hidden px-1 md:flex flex-col justify-between'>
                <Navbar className=' border-secondary-foreground/40' />
            </div>
            <div className='w-full'>{children}</div>
        </div>
    );
};

export default MainLayout;
