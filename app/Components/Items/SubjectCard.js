import Image from "next/image";
import subCard from '../../../assets/Images/sub01.png';
import subCard02 from '../../../assets/Images/abst-subcard.jpg';
import subCard03 from '../../../assets/Images/sub03.jpg';
import Link from "next/link";

export default function SubjectCard({data}) {
  const img = [subCard,subCard02,subCard03]
  // {title:"React.js", category:"FrontEnd", department:"Technology", totalcount:102, expiredCount:40},
  return (
    <>
      <section className="grid grid-flow-row auto-rows-max gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded-t-lg" >
        {/* Card 1 */}
       {data?.map((items, index)=>(
        <Link key={index} href='resource/employees' className="flex flex-col  rounded-3xl shadow-3xl overflow-hidden hover:shadow-xl hover:scale-102 transition-all duration-300">
        <div className="w-full h-[140px] relative rounded-t-lg  overflow-hidden" >
          {/* Image with responsive sizing */}
          <Image 
            src={img[index] || img[Math.floor(Math.random() * img.length)]} 
            alt="Sub Card Image" 
            layout="responsive" 
            // layout="fill" 
              objectFit="cover"
            className="rounded-t-lg scale-100 bg-bottom" 
            
          />

          {/* Content overlay */}
          <div className="absolute flex inset-0 flex-row justify-between items-center py-10 px-6 bg-black bg-opacity-40 text-white">
            <div className="">
              <h1 className="text-2xl font-black text-white drop-shadow-xl">{items.title}</h1>
              <h4 className="text-sm text-gray-100 font-medium drop-shadow-xl">{items.category} | {items.department}</h4>
            </div>
            <div className="rounded-full w-14 h-14 bg-gray-900 flex justify-center items-center border border-gray-600" >
              <h1 className="text-lg font-bold ">{items.totalcount}</h1>
            </div>
          </div>
        </div>

<div className=" flex justify-between p-6 bg-[var(--card-bg)] ">
  <div>
    <h3 className="font-normal text-sm text-[var(--text-secondary)]">upto date Questions</h3>
    <h2 className="font-bold text-md text-[var(--text-primary)]">{items.totalcount - items.expiredCount }</h2>
  </div>
  <div>
    <h3 className="font-normal text-sm text-[var(--text-secondary)]">Expired Questions</h3>
    <h2 className="font-bold text-md text-[var(--text-primary)]">{items.expiredCount}</h2>
  </div>
</div>
</Link> 
       ))}
        





      </section>


    
    </>
  );
}
