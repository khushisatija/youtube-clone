import React from 'react'
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
   <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>Filter</h2>
        </div>
        <hr/>


        <ChannelRow 
        image = "https://yt3.googleusercontent.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s160-c-k-c0x00ffffff-no-rj"
        channel= "GeeksforGeeks"
        verified
        subs= "710K"
        noOfVideos= "2.9K"
        description="Welcome to the Official Channel of GeekforGeeks, your one-stop destination for diverse tech education!"
        />


        <hr/>

        <VideoRow 
        views ="10K"
        subs="710K"
        c_img="	https://yt3.ggpht.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s68-c-k-c0x00ffffff-no-rj"
        description="Join us for an in-depth session on System Design Fundamentals with our expert mentor, Richa Pandey! This comprehensive.. "
        timestamp="2 Days Ago"
        channel="GeeksforGeeks"
        title="System Design Fundamentals"
        image="https://i.ytimg.com/vi/nTunKnI8l5c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeyGlBnvLlVYZ46TKQaNwQ0eUyNQ"
        />

        
        <VideoRow 
        views ="15K"
        subs="710K"
        c_img="	https://yt3.ggpht.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s68-c-k-c0x00ffffff-no-rj"
        description="Conquer Your Data Like a Pro: Mastering #merge #sort Tired of messy data? This video dives deep into Merge Sort, a.. "
        timestamp="5 Days Ago"
        channel="GeeksforGeeks"
        title="Merge Sorting Algorithm with @SandeepJainGfG"
        image="https://i.ytimg.com/vi/ehvHKzU5Pcg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOyxO1p2GZXTlMRVu3ZgiD0flRdQ"
        />

        
<VideoRow 
        views ="10K"
        subs="710K"
        c_img="	https://yt3.ggpht.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s68-c-k-c0x00ffffff-no-rj"
        description="GeeksforGeeks brings for you an all new complete preparation program- DSA To Development!.. "
        timestamp="1 Year Ago"
        channel="GeeksforGeeks"
        title="DSA To Development: A Complete Coding Guide"
        image="https://i.ytimg.com/vi/phr8lXH2Ee0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCIFHtO90_tVjmkvY40lQQpGgy1A"
        />

        
<VideoRow 
        views ="840K"
        subs="710K"
        c_img="	https://yt3.ggpht.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s68-c-k-c0x00ffffff-no-rj"
        description="In this Video, we will learn about all the strategies that are needed to follow to get the most out of ... "
        timestamp="2 Years Ago"
        channel="GeeksforGeeks"
        title="How to use GeeksForGeeks for practicing Coding 🔥"
        image="https://i.ytimg.com/vi/07QCAJYolaE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKP2LEcRKzo2F2aNu352j8gijjaw"
        />

        
<VideoRow 
        views ="5K"
        subs="710K"
        c_img="	https://yt3.ggpht.com/ytc/AIdro_mwk86kTItOIeHPW4laW7bA5iOSchp_v5G6bIYgsKzGcpc=s68-c-k-c0x00ffffff-no-rj"
        description="Join us for an exclusive 'Ask Me Anything' session with Ajit Jha, Senior Talent Partner at Adobe.. "
        timestamp="2 Days Ago"
        channel="GeeksforGeeks"
        title="Ask Me Anything Session | GeeksforGeeks X Adobe"
        image="https://i.ytimg.com/vi/acF9P_TyXhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA7I8rjwye0Mv-fyc0aJsDDNkKkA"
        />

   </div>
  )
}

export default SearchPage
