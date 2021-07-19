import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./ChannelCard.css"

interface ChannelCardType {
    thumnail?: string;
    profile: string;
    title?: string;
    name: string;
    ID: string;
    category: string;
    listener?: number;
    tags?: string[];
}

export const SmallChannelCard = ({profile, name, ID, category, listener}: ChannelCardType) => {
    return (
        <div className="channelListBox">
            <img className="channelProfileImg" src={profile} alt="프사"/>
            <div className="channelContents">
                <p className="channelName">{name} ({ID})</p>
                <p className="channelCategory">{category}</p>
            </div>
            <div className="listenerBox">
                   <span className="onAir"></span>
                <span className="listener">{listener}</span>
            </div>
        </div>
    )
}

export const PriviewChannelCard = (channelCard: ChannelCardType) => {
    return (
        <div className="channelContainer">
            <img className="channelThumbnail" src={channelCard.thumnail} alt="썸네일"/>
            <div className="recommendChannelContents">
                <img className="recommendChannelProfileImg" src={channelCard.profile} alt="프사"/>
                <div className="recommendChannelText">
                    <p className="channelTitle">{channelCard.title}</p>
                    <p className="recommendChannelName">{channelCard.name} ({channelCard.ID})</p>
                    <p className="channelCategory">{channelCard.category}</p>
                    {channelCard.tags?.map((tag) => {
                        return (
                            <span className="channelTag">{tag}</span>
                        )
                    })}  
                </div>
                <button className="smallIconBtn"><FontAwesomeIcon className="iconFont" icon="ellipsis-v"/></button>
            </div>
        </div>
    )
}

