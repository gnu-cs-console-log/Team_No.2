import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'

import logo from '../../assets/twitch-logo.svg'

export default function HeaderNav() {
    return (
        <header className="container">
            <nav className="headerNavLeft">
                <div className="imgArea">
                    <img className="twitchLogo" src={logo} alt="트위치 로고"/>
                </div>  
                <ul className="headerNavLeftUl">
                    <li className="headerNav"><a href="https://www.naver.com/" >팔로잉</a></li>
                    <li className="headerNav"><a href="https://www.naver.com/">탐색</a></li>
                    <li className="headerNav"><a href="https://www.naver.com/">e스포츠</a></li>
                    <li className="headerNav"><a href="https://www.naver.com/">음악</a></li>
                </ul> 
                <button className="moreBtn"><FontAwesomeIcon className="moreBtnIcon" icon="ellipsis-h"/></button>
            </nav>
            <div className="headerNavMiddle">
                <div className="searchBox">
                    <input type="text" className="searchInput" placeholder="검색"/>
                    <button className="searchBtn"><FontAwesomeIcon className="searchBtnIcon" icon="search" size="lg"/></button>
                </div>
            </div>
            <nav className="headerNavRight">
                <div className="rightBox">
                    <FontAwesomeIcon className="rightIcon" icon="crown" size="sm"/>
                    <FontAwesomeIcon className="rightIcon" icon="inbox" size="sm"/>
                    <FontAwesomeIcon className="rightIcon" icon={["far", "comment-alt"]} size="sm"/>
                    <button className="bitBtn">
                        <FontAwesomeIcon className="bitBtnIcon" icon={["far", "gem"]}/>
                        비트 구매
                    </button>
                </div>
            </nav>
        </header>
    )
}
