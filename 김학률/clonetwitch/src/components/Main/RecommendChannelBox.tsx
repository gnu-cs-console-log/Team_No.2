import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PriviewChannelCard } from '../common/ChannelCard/ChannelCard'

interface channelCardType {
    thumnail: string;
    src: string;
    title: string;
    name: string;
    ID: string;
    category: string;
    tag: string[];
}
interface channelListType {
    headerName: string;
    channelList: Array<channelCardType>;
}

export default function RecommendChannelBox ({headerName, channelList}: channelListType) {
    return (
        <section className="recommendChannelContainer">
            <header className="recommendChannelListTitle">{headerName}</header>
            <article className="recommendChannelListContainer">
                {channelList.map((channel) => {
                    return (
                        <PriviewChannelCard
                            thumnail={channel.thumnail}
                            profile={channel.src}
                            title={channel.title}
                            name={channel.name}
                            ID={channel.ID}
                            category={channel.category}
                            tags={channel.tag}
                        />
                    )
                })}
            </article>
                <footer className="moreLineContainer">
                    <div className="moreLineBox">
                        <hr color="#29292e" className="moreLine"></hr>
                    </div>
                    <div className="recommendChannelMoreBtn">더 보기 <FontAwesomeIcon icon="chevron-down"/></div>
                    <div className="moreLineBox">
                        <hr color="#29292e" className="moreLine"></hr>
                    </div>
                </footer>
        </section>
    )
}
