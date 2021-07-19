import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CategoryCard from '../common/CategoryCard/CategoryCard'

interface categoryCardType {
    thumnail: string;
    category: string;
    listener: number;
    tag: string[];
}
interface categoryListType {
    headerName: string;
    categoryList: Array<categoryCardType>;
}

export default function RecommendCategoryBox ({headerName, categoryList}: categoryListType) {
    return (
        <section className="recommendCategoryContainer">
            <header className="recommendCategoryListTitle">{headerName}</header>
            <article className="recommendCategoryListContainer">
                {categoryList.map((category) => {
                    return (
                        <CategoryCard
                            thumnail={category.thumnail}
                            category={category.category}
                            listener={category.listener}
                            tags={category.tag}
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