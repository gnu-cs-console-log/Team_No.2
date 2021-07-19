import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CategoryCard.css'

interface CategoryCardType {
    thumnail: string;
    category: string;
    listener: number;
    tags: string[];
}

export default function CategoryCard(categoryCard: CategoryCardType) {
    return (
        <div className="categoryContainer">
            <img className="categoryThumbnail" src={categoryCard.thumnail} alt="썸네일"/>
                <div className="recommendCategoryContents">
                    <div className="recommendCategoryText">
                        <p className="categoryTitle">{categoryCard.category}</p>
                        <p className="categoryListener">시청자 {categoryCard.listener}</p>
                        {categoryCard.tags.map((tag) => {
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
