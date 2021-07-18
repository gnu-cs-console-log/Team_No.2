import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PreviewImg1 from '../../assets/추천 방송 미리보기 1.png'
import PreviewImg2 from '../../assets/추천 방송 미리보기 2.png'
import PreviewImg3 from '../../assets/추천 방송 미리보기 3.png'
import thumnail1 from '../../assets/썸네일1.png'
import thumnail2 from '../../assets/썸네일2.png'
import thumnail3 from '../../assets/썸네일3.png'
import thumnail4 from '../../assets/썸네일4.png'
import thumnail5 from '../../assets/썸네일5.png'

import styles from '../style.module.css'
import './Main.css'

import { RecommendChannelBox } from '../common/ChannelCard/ChannelCard'

export default function Main() {
    return (
        <main className="recommendChannelBody">
            <header className="recommendChannelHeader">
                <button className={styles.bigIconBtn}>
                    <FontAwesomeIcon className={styles.iconFont} icon="chevron-left" size="lg"/>
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
                <button className={styles.bigIconBtn}>
                    <FontAwesomeIcon className={styles.iconFont} icon="chevron-right" size="lg"/>
                </button>
            </header>
            <RecommendChannelBox
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
]