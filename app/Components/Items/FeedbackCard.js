import Image from "next/image";
import Img from "../../../assets/Images/feedback-card.jpg";
import profile from "../../../assets/Images/hr-profile.jpg";
import profile02 from "../../../assets/Images/profile-new.jpg";
import { MdModeEditOutline } from "react-icons/md";
import Link from "next/link";
import { Pointer } from "lucide-react";

export default function FeedbackCard({data}) {
  const appStatus=(code)=>{
    switch(code){
      case 0:
        return "Draft";
      case 1:
        return "Pending";
      case 2:
        return "Submitted";
    }

  }
  return (
    <section className=" w-full h-full grid grid-flow-row auto-rows-max gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded-t-lg ">
      {data?.map((items, index)=>(
        <div key={index} className="w-full h-full  bg-[var(--card-bg)] rounded-lg shadow-3xl hover:shadow-xl flex border border-[var(--card-stroke)]" style={{cursor:"pointer"}}>
          <Link href="/" passHref className="flex">
        <div >
          <div  className="w-28 h-full rounded-lg p-2 flex justify-center items-center" >
            <div className="w-full h-full relative flex justify-center items-center">
              <Image
                src={Img}
                alt="Sub Card Image"
                // layout="responsive"
                objectFit="cover"
                className="rounded-lg scale-100 bg-bottom w-36 h-full"
              />

              <div className="w-20 h-20  rounded-full absolute top8 left-14 mt-0 flex justify-center items-center">
                <Image
                  src={profile02}
                  alt="Sub Card Image"
                  // layout="responsive"
                  objectFit="cover"
                  className=" w-20 h-20 rounded-full border-4 border-[var(--card-bg)]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-7 p-3">
          <div>
            <div className="flex justify-end items-center"> <MdModeEditOutline className="hover:scale-150 ease-in-out duration-300" /> </div>
            <h1 className="font-medium text-sm text-[var(--text-secondary)]"> {items.name} </h1>
            <h1 className="font-bold text-md text-[var(--text-heading)]"> {items.title} </h1>
          </div>

          <div className="font-regular text-xs text-[var(--text-secondary)]">
           <span className="font-regular text-xs text-[var(--text-secondary)]">App.ID : {items.appId}</span>  <span className="font-regular text-xs text-[var(--text-secondary)]">Exp : {items.exp} </span> <span className="font-regular text-xs text-[var(--text-secondary)]">experience : {items.skills}</span> 
          </div>
          <div className="flex justify-end items-center"><span className={`${ items.status === 0 ? 'bg-zinc-500' : items.status === 1 ? 'bg-amber-500' : 'bg-green-500' } min-w-20 text-center text-white text-xs font-semibold px-3 py-2 rounded-lg `} >{appStatus(items.status)}</span></div>
        </div>
        </Link>
      </div>
      ))}
      
    </section>
  );
}
