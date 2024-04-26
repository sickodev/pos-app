import MainContent from "@/components/home/main-content";
import Navbar from "@/components/shared/navbar";

export default function Home() {
    return (
        <div className='h-full flex py-1'>
            <div className='px-1 flex flex-col justify-between h-full'>
                <Navbar />
            </div>
            <div className='w-full'>
                <MainContent />
            </div>
        </div>
    );
}
