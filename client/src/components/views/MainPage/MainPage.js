import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios'
import Slider from 'react-slick'
import './slick.css';
import './slick-theme.css';
import './main.css';

function MainPage() {
    const [Discussions, setDiscussions] = useState([]);
    const [maxCount, setmaxCount] = useState(0);

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {

        Axios.get('/api/discussion/getOngoingDiscussions')
            .then(response => {
                if (response.data.success) {
                    setDiscussions(response.data.discussions)
                    console.log(Discussions)
                } else {
                    alert('진행 중인 토론을 불러오는 데에 실패했습니다.')
                }
            })

    }, [])

    const sliderList = Discussions.map((discussion, index) => {
        return <div className="ongoing-content" >
            <h1> <strong><i>{discussion.subject}</i></strong> </h1>
            <a href={`/discussion/ongoing/${discussion._id}`}><u>지금 바로 토론하러 가기</u> </a>
        </div>
    })

    return (
        <div>
            { /* 현재 가장 뜨거운 토론 */}
            <div className="hot-topic-box">
                <div className="hot-topic-area" >
                    <div className="title">&#x1F525; Hottest Discussion &#x1F525;</div>
                    <div className="topic"> &lt; 안락사, 허용해야 한다 &gt;</div>
                    <div className="opinion-area">
                        <div className="hottest-opinion" >
                            <p className="nickname"> &#x1F646; <strong>조궁뎅</strong> 님 </p>
                            <div>고통 없이 죽여준다고? 이거 완전 이득아님?</div>
                        </div>
                        <span className="vs">VS</span>
                        <div className="hottest-opinion" style={{ backgroundColor: '#fbe5d6' }}>
                            <p className="nickname"> &#x1F645; <strong>코뚱땡이</strong> 님 </p>
                            <div>솔직히 너네 중에 죽고싶은 사람 있냐고 ㅋㅋㅋ 아 어이없네 ㅋㅋ루삥뽕</div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <a>지금 바로 토론하러 가기&#x27A1;</a>
                </div>
            </div>


            { /* 진행 중인 토론 슬라이더 */}
            <div className="slide-box" >
                <div className="ongoing">
                    <h3><strong> 현재 진행 중인 토론 </strong></h3>
                    <br />
                    <Slider {...settings}>
                        {sliderList}
                    </Slider>
                </div>
            </div>

        </div>

    )
}

export default MainPage