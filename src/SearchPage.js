import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="search__page">
        <div className="searchPage__filter">
         <TuneOutlinedIcon/>
         <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow 
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="899K"
        noOfVideos={592}
        description="You can find awesome programming lessons here! Also expect Programming tips and tricks that will take your coding skills to the."
        />  
        <hr/>
        <VideoRow views="10K" subs="899K" timetamp="1 day ago" description="Pinterest clone React" channel="Clever Programmer" 
        title="Building the Pinterest React Clone"
        image="https://i.ytimg.com/an_webp/wV734HJbrpc/mqdefault_6s.webp?du=3000&sqp=CPWcxYEG&rs=AOn4CLCbrLG9dxsHW_Mk8xXB6Gw_R0z7xQ"/>

        <VideoRow views="20K" subs="899K" timetamp="1 week ago" description="Gmail clone React" channel="Clever Programmer" 
        title="Building the Google Drive React Clone"
        image="https://i.ytimg.com/an_webp/b1x8mVCjGwE/mqdefault_6s.webp?du=3000&sqp=CJerxYEG&rs=AOn4CLACGuZkDqCOntHnamkqnJJojJvz5A"/>

        <VideoRow views="19K" subs="899K" timetamp="9 days ago" description="PayPal clone React" channel="Clever Programmer" 
        title="Getting Started with Online Payments : Building a PayPal Checkouts"
        image="https://i.ytimg.com/an_webp/NlGXFRpP5So/mqdefault_6s.webp?du=3000&sqp=CKKcxYEG&rs=AOn4CLBf2Mfkv7V2-Jzn2PQ5eP4zHgh9rg"/>

        <VideoRow views="100K" subs="899K" timetamp="7 months ago" description="Amazon clone React" channel="Clever Programmer" 
        title="Building the Amazon React Clone"
        image="https://i.ytimg.com/an_webp/RDV3Z1KCBvo/mqdefault_6s.webp?du=3000&sqp=CLLYxYEG&rs=AOn4CLATytzukqUaAPN2ZHa1ouhde5Xy9Q"/>

        <VideoRow views="79K" subs="899K" timetamp="1 year ago" description="Time Stamp...Face Detector" channel="Clever Programmer" 

        title="Python Artificial Intelligence"
        image="https://i.ytimg.com/an_webp/XIrOM9oP3pA/mqdefault_6s.webp?du=3000&sqp=CODGxYEG&rs=AOn4CLB6fTW55uS0FGzFs7x_dsfwLd8QZQ"/>

        <VideoRow views="170K" subs="899K" timetamp="2 years ago" description="Connect with Me!!" channel="Clever Programmer" 

        title="How to think and Problem Solve in Coding"
        image="https://i.ytimg.com/an_webp/Hb9WUEXdkCE/mqdefault_6s.webp?du=3000&sqp=CI61xYEG&rs=AOn4CLBWArVbdZO7jyu9sFRTH8XLrx7BMg"/>
        </div>
        
    )
}

export default SearchPage
