import FeedbackCard from "../Components/Items/FeedbackCard"
import profile1 from '../../assets/Images/profile1.jpg'
import profile2 from '../../assets/Images/profile2.jpg'
import profile3 from '../../assets/Images/profile3.jpg'


export default function Feedbacks(){

    const FeedbackList = [
        {name:"Dhivagar Stanly",imgurl:profile1,title:"Technical Round", appId:"5675", exp:"2 yrs",skills:"React.js | Nodejs | React-native | mongoDB", status:0},
        {name:"Kirthishwaran",imgurl:profile2,title:"HR Assesment", appId:"5675", exp:"3.5 yrs",skills:"React.js | Nodejs | React-native | mongoDB | My-sql", status:2},
        {name:"Sathish kumar",imgurl:profile1,title:"Package discussion", appId:"5675", exp:"2 yrs",skills:"React.js | Nodejs | React-native | mongoDB", status:0},
        {name:"Ragu",imgurl:profile3,title:"Technical Round", appId:"5675", exp:"2 yrs",skills:"React.js | Nodejs | React-native | mongoDB", status:1},
      ]

    return(
        <main>
            <FeedbackCard data={FeedbackList}/>
        </main>
    )
}