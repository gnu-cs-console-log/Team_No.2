import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PreviewImg1 from '../../assets/추천 방송 미리보기 1.png'
import PreviewImg2 from '../../assets/추천 방송 미리보기 2.png'
import PreviewImg3 from '../../assets/추천 방송 미리보기 3.png'
import thumnail1 from '../../assets/썸네일1.png'
import thumnail2 from '../../assets/썸네일2.png'
import thumnail3 from '../../assets/썸네일3.png'
import thumnail4 from '../../assets/썸네일4.png'
import thumnail5 from '../../assets/썸네일5.png'

import './Main.css'

import RecommendChannelBox from './RecommendChannelBox'
import RecommendCategoryBox from './RecommendCategoryBox'

export default function Main() {
    return (
        <main className="recommendChannelBody">
            <header className="recommendChannelHeader">
                <button className="bigIconBtn">
                    <FontAwesomeIcon className="iconFont" icon="chevron-left" size="lg"/>
                </button>
                <div className="channelPreview">
                    <div className="channelPreviewFront">
                        <img src={PreviewImg1} alt="썸네일"/>
                    </div>
                    <div className="channelPreviewFrontLeft">
                        <img src={PreviewImg2} alt="썸네일"/>
                    </div>
                    <div className="channelPreviewBackLeft">
                        <img src={PreviewImg3} alt="썸네일"/>
                    </div>
                    <div className="channelPreviewFrontRight">
                        <img src={PreviewImg3} alt="썸네일"/>
                    </div>
                    <div className="channelPreviewBackRight">
                        <img src={PreviewImg2} alt="썸네일"/>
                    </div>
                </div>
                <button className="bigIconBtn">
                    <FontAwesomeIcon className="iconFont" icon="chevron-right" size="lg"/>
                </button>
            </header>
            <RecommendChannelBox
                headerName="취향 저격 생방송 채널"
                channelList={recommendChannelList}
            />
            <RecommendCategoryBox
                headerName="취향 저격 카테고리"
                categoryList={recommendCategoryList}
            />
            <RecommendChannelBox
                headerName="쫀득이_님이 오프라인일 때 살펴볼 곳 추천"
                channelList={recommendChannelList}
            />
            <RecommendChannelBox
                headerName="추천 소규모 채널"
                channelList={recommendChannelList}
            />
            <RecommendChannelBox
                headerName="추천 Just Chatting 채널"
                channelList={recommendChannelList}
            />
        </main>
    )
}

const recommendChannelList = [
    {   
        thumnail: thumnail1,
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/0516dd15-5341-440b-ad6a-0ce15939f9cf-profile_image-50x50.png",
        name: "쫀득이_",
        ID: "pjs9073",
        title: "쫀득) 소통",
        category: "Skul: The Hero Slayer",
        tag: [
            "한국어"
        ]
    },
    {   
        thumnail: thumnail2,
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/45059e9b-4b1e-4387-ba14-9a78477e6ca9-profile_image-70x70.png",
        name: "꽃핀",
        ID: "cherrypach",
        title: "스타허접대회 ʕ̢̣̣·͡˔·Ɂ̡̣̣✧",
        category: "Just Chatting",
        tag: [
            "한국어"
        ]
    },
    {   
        thumnail: thumnail3,
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/4223ce80-605e-4cf6-81db-bdb19b92c35a-profile_image-70x70.png",
        name: "탬탬버린",
        ID: "2chamcham2",
        title: "일찍켜서 할건없는데 일단 키는방송 ٩(●'▿'●)۶ *",
        category: "StarCraft",
        tag: [
            "한국어"
        ]
    },
    {   
        thumnail: thumnail4,
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/207caf4b-94a5-418e-a9fa-40cc1fb4a8c2-profile_image-70x70.png",
        name: "견자희",
        ID: "wkgml",
        title: "허접대전 ㄷㄷㄷㄷ —̳͟͞💜",
        category: "League of Legends",
        tag: [
            "한국어"
        ]
    },
    {   
        thumnail: thumnail5,
        src: "https://static-cdn.jtvnw.net/jtv_user_pictures/abcbd111-cb6c-4436-a04f-15bd8f515ea3-profile_image-70x70.png" ,
        name: "카라멜",
        ID: "ca_ramel",
        title: "월요일 방송",
        category: "Just Chatting",
        tag: [
            "한국어",
            "소통"
        ]
    },
]

const recommendCategoryList = [
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg",
        category: "Just Chatting",
        listener: 471000,
        tag: [
            "리얼라이프"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/Agrou-188x250.jpg",
        category: "Agrou",
        listener: 19,
        tag: [
            "전략",
            "인디 게임"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft-188x250.jpg",
        category: "StarCraft",
        listener: 22000,
        tag: [
            "RTS",
            "전략"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-188x250.jpg",
        category: "League of Legend",
        listener: 207000,
        tag: [
            "MOBA",
            "액션"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-188x250.jpg",
        category: "PLAYERUNKNOWN'S BATTLEGROUNDS",
        listener: 12000,
        tag: [
            "슈팅 장르",
            "FPS"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/Doki%20Doki%20Literature%20Club%20Plus%21-188x250.jpg",
        category: "Doki Doki Literature Club Plus!",
        listener: 1160,
        tag: [
            "시뮬레이션"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/LOST%20ARK-188x250.jpg",
        category: "LOST ARK",
        listener: 15000,
        tag: [
            "RPG",
            "액션"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/Games%20+%20Demos-188x250.jpg",
        category: "Games + Demos",
        listener: 1648,
        tag: [
            "퍼즐",
            "액션"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/TETR.IO-188x250.jpg",
        category: "TETR.IO",
        listener: 4637,
        tag: [
            "퍼즐",
            "인디 게임"
        ]
    },
    {
        thumnail: "https://static-cdn.jtvnw.net/ttv-boxart/Music-188x250.jpg",
        category: "음악",
        listener: 26000,
        tag: [
            "리얼라이프"
        ]
    },
]