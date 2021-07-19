import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import styles from '../style.module.css'
import './LeftChannelList.css'

import { SmallChannelCard } from '../common/ChannelCard/ChannelCard';

export default function LeftNav() {
    return (
        <aside className="channelListNavs">
            <section className="leftChannelContainer">
                <div className="channelListHeader">
                    팔로우 중인 채널
                    <button className="bigIconBtn"><FontAwesomeIcon className="iconFont" icon="arrow-left" size="1x"/></button>
                </div>
                {followChannelList.map((followChannel) => {
                    return (<SmallChannelCard 
                        key={followChannel.name}
                        profile={followChannel.src}
                        name={followChannel.name}
                        ID={followChannel.ID}
                        category={followChannel.category}
                        listener={followChannel.listener}
                    />)
                })}    
                <button className="channelMoreBtn">더 보기</button>   
            </section>
            <section className="leftChannelContainer">
                <div className="channelListHeader">
                    추천 채널
                </div>
                {recommendChannelList.map((recommendChannel) => {
                    return (<SmallChannelCard 
                        key={recommendChannel.name}
                        profile={recommendChannel.src}
                        name={recommendChannel.name}
                        ID={recommendChannel.ID}
                        category={recommendChannel.category}
                        listener={recommendChannel.listener}
                    />)
                })}    
                <button className="channelMoreBtn">더 보기</button> 
            </section>
        </aside>
    )
}

const followChannelList = [
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/45059e9b-4b1e-4387-ba14-9a78477e6ca9-profile_image-70x70.png",
        name: "꽃핀",
        ID: "cherrypach",
        category: "Just Chatting",
        listener: 4885
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/0bd71b32-6417-471c-8196-d58df1a0105d-profile_image-70x70.jpg",
        name: "오킹",
        ID: "obm1025",
        category: "먹방",
        listener: 3463
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/207caf4b-94a5-418e-a9fa-40cc1fb4a8c2-profile_image-70x70.png",
        name: "견자희",
        ID: "wkgml",
        category: "Just Chatting",
        listener: 3169
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/48f97eef-77c3-454f-9bf6-2d0748779a26-profile_image-70x70.png",
        name: "실프_",
        ID: "silphtv",
        category: "League of Legends",
        listener: 2232
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/fe75f0b7-a0a2-4dc0-bde1-edcb7a4fd32e-profile_image-70x70.png",
        name: "강지",
        ID: "rkdwl12",
        category: "음악",
        listener: 2032
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/d48767c9-fef7-48cf-9e10-e3baffefbb19-profile_image-70x70.png",
        name: "김진우",
        ID: "jinu6734",
        category: "TETR.IO",
        listener: 1770
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/21af3d33e8fdcfe9-profile_image-70x70.jpeg",
        name: "이춘향",
        ID: "leechunhyang",
        category: "Just Chatting",
        listener: 1318
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/0f58f668-574f-4118-b1f2-ad88699da68d-profile_image-70x70.png",
        name: "코렛트",
        ID: "collet11",
        category: "Just Chatting",
        listener: 1123
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/ca8c078c-bb3a-4971-86ed-b720f16e82bf-profile_image-70x70.png",
        name: "끠끼",
        ID: "kuiki771",
        category: "Just Chatting",
        listener: 928
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/1036ee28-332b-49cf-b794-e810c37e2a34-profile_image-70x70.png",
        name: "아구이뽀",
        ID: "agueppo",
        category: "Just Chatting",
        listener: 614
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/72165aa7-59d7-4231-8d8a-5cfa75db747a-profile_image-70x70.png",
        name: "푸린",
        ID: "rngudwnswkd",
        category: "PLAYERUNKNOWN'S BATTLEGROUNDS",
        listener: 548
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/8b90062fe78bd28b-profile_image-70x70.jpeg",
        name: "와나나",
        ID: "box930205",
        category: "Just Chatting",
        listener: 354
    },
]

const recommendChannelList = [
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/5d0bf11e-aad0-486d-bcbf-45a3e9045a0d-profile_image-70x70.png",
        name: "앵그리보이",
        ID: "twangryboy",
        category: "음악",
        listener: 88
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/516d5bde-581d-4527-9c8d-2d131f2433ee-profile_image-70x70.png",
        name: "강소연",
        ID: "rkdthdus930",
        category: "StarCraft",
        listener: 1666
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/909cced3-4d36-4b39-8d52-9dea4b2d52fa-profile_image-70x70.png",
        name: "플레임__",
        ID: "flamekr",
        category: "StarCraft",
        listener: 546
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/7a701887-d5fa-4ee8-b277-766d37d3df4b-profile_image-70x70.png",
        name: "LCK_Korea",
        ID: "",
        category: "League of Legends",
        listener: 31000
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/137f89a8-1dbc-418c-a916-0e35ca9f77a5-profile_image-70x70.png",
        name: "새옴",
        ID: "om0322",
        category: "Just Chatting",
        listener: 534
    },
    {
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/957eb92b5d2ecee6-profile_image-70x70.png",
        name: "김블루",
        ID: "rainblue37",
        category: "PLAYERUNKNOWN'S BATTLEGROUNDS",
        listener: 909
    },
]