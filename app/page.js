"use client"

import CountCard from "./Components/Items/CountCard";
import FeedbackCard from "./Components/Items/FeedbackCard";
import SubjectCard from "./Components/Items/SubjectCard";
import OnprocessCarosal from "./Components/Layouts/OnprocessCarosal";




export default function Home() {
  // const items = [
  //   {
  //     label: 'Dashboard',
  //   },
  //   {
  //     label: 'Settings',
  //     submenu: [
  //       { label: 'Profile' },
  //       { label: 'Security' },
  //       { label: 'Notifications' },
  //     ],
  //   },
  //   {
  //     label: 'Reports',
  //     submenu: [
  //       { label: 'Sales' },
  //       { label: 'Users' },
  //     ],
  //   },
  // ];
 
  const subjectCardData = [
    {title:"React.js", category:"FrontEnd", department:"Technology", totalcount:102, expiredCount:40},
    {title:"Aptitude", category:"common", department:"HR Asessment", totalcount:75, expiredCount:2},
    {title:"Medical Billing", category:"Billing", department:"Operation", totalcount:102, expiredCount:40},
    {title:"Node.js", category:"Backend", department:"FrontEnd", totalcount:102, expiredCount:40},
    {title:"Language", category:"common", department:"HR Assessment", totalcount:102, expiredCount:40},
    {title:"comprehension", category:"common", department:"HR Assessment", totalcount:102, expiredCount:40}
  ]

  const FeedbackList = [
    {name:"Dhivagar Stanly",title:"Technical Round", appId:"5675", exp:"2 years",skills:"React.js | Nodejs | React-native | mongoDB", status:0},
    {name:"Kirthishwaran",title:"HR Assesment", appId:"5675", exp:"3.5 years",skills:"React.js | Nodejs | React-native | mongoDB | My-sql", status:2},
    {name:"Sathish kumar",title:"Package discussion", appId:"5675", exp:"2 years",skills:"React.js | Nodejs | React-native | mongoDB", status:0},
    {name:"Ragu",title:"Technical Round", appId:"5675", exp:"2 years",skills:"React.js | Nodejs | React-native | mongoDB", status:1},
  ]


  return (
    <main>
      <div className="mb-5" ><CountCard/></div>

     <div className="p-5 border border-[--main-stroke] rounded-2xl mb-5" ><SubjectCard data={subjectCardData}/></div>
     
      <FeedbackCard data={FeedbackList}/>
      

    </main>
  );
}
