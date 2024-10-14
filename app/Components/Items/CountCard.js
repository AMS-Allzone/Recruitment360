import { RiUserReceived2Fill } from "react-icons/ri";
import { RiFileList3Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
export default function CountCard(){
    return(
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
            <div className="p-3 rounded-2xl flex justify-start items-center gap-2 lg:gap-5 bg-[var(--card-bg)] border border-[var(--card-stroke)] shadow-3xl" >
                <div className="bg-gray-400 p-2 lg:p-4 ml-0 lg:ml-3 rounded-full flex justify-center items-center bg-gradient-to-br from-[#18ABF8] to-[#0E6592]">
                <RiUserReceived2Fill className="text-white w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"/> 
                </div>
                <div className="">
                    <h1 className="lg:text-3xl text-md font-bold text-[var(--text-primary)]">80</h1>
                    <p className="lg:text-md text-xs lg:text-lg font-small text-[var(--text-secondary)]">Total request</p>
                </div>
            </div>

            <div className="p-3 rounded-2xl flex justify-start items-center gap-2 lg:gap-5 bg-[var(--card-bg)] border border-[var(--card-stroke)] shadow-3xl" >
                <div className="bg-gray-400 p-2 lg:p-4 ml-0 lg:ml-3 rounded-full flex justify-center items-center bg-gradient-to-br from-[#6161FF] to-[#343499]">
                <RiFileList3Fill className="text-white w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"/> 
                </div>
                <div className="">
                    <h1 className="lg:text-3xl text-md font-bold text-[var(--text-primary)]">89</h1>
                    <p className="lg:text-md text-xs lg:text-lg font-small text-[var(--text-secondary)]">Total Evaluation</p>
                </div>
            </div>

            <div className="p-3 rounded-2xl flex justify-start items-center gap-2 lg:gap-5 bg-[var(--card-bg)] border border-[var(--card-stroke)] shadow-3xl" >
                <div className="bg-gray-400 p-2 lg:p-4 ml-0 lg:ml-3 rounded-full flex justify-center items-center bg-gradient-to-br from-[#4FD1C5] to-[#286B65]">
                <MdVerified className="text-white w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"/> 
                </div>
                <div className="">
                    <h1 className="lg:text-3xl text-md font-bold text-[var(--text-primary)]">123</h1>
                    <p className="lg:text-md text-xs lg:text-lg font-small text-[var(--text-secondary)]">Completed</p>
                </div>
            </div>

            <div className="p-3 rounded-2xl flex justify-start items-center gap-2 lg:gap-5 bg-[var(--card-bg)] border border-[var(--card-stroke)] shadow-3xl" >
                <div className="bg-gray-400 p-2 lg:p-4 ml-0 lg:ml-3 rounded-full flex justify-center items-center bg-gradient-to-br from-[#FF8E29] to-[#995519]">
                <RxLapTimer className="text-white w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"/> 
                </div>
                <div className="">
                    <h1 className="lg:text-3xl text-md font-bold text-[var(--text-primary)]">023</h1>
                    <p className="lg:text-md text-xs lg:text-lg font-small text-[var(--text-secondary)]">Pending</p>
                </div>
            </div>
            

            

            

           
            
        </div>
    )
}