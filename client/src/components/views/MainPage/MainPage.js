import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios'
import Slider from 'react-slick'
import MainTopic from './Sections/MainTopic';
import './slick.css';
import './slick-theme.css';
import './main.css';

function MainPage() {
    const [Discussions, setDiscussions] = useState([]);
    const [maxIndex, setmaxIndex] = useState(0);

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

                    Axios.post('/api/opinion/count', response.data.discussions)
                        .then(res => {
                            if (res.data.success) {
                                let max = res.data.opinionCount[0];

                                for (let i = 1; i < res.data.opinionCount.length; i++) {
                                    if (max < res.data.opinionCount[i]) {
                                        max = res.data.opinionCount[i];
                                        setmaxIndex(i);
                                    }

                                    if (i === res.data.opinionCount.length - 1) {
                                        window.localStorage.setItem('hot', response.data.discussions[maxIndex]._id);
                                    }
                                }
                            } else {
                                alert('complete discussion opinion count load fail')
                            }
                        })
                } else {
                    alert('진행 중인 토론을 불러오는 데에 실패했습니다.')
                }
            })

    }, [])

    const sliderList = Discussions.map((discussion, index) => {
        return <div key={index} className="ongoing-content" >
            <div className="slide-subject">{discussion.subject}</div>
            <div className="slide-link"><a href={`/discussion/ongoing/${discussion._id}`}>지금 바로 토론하러 가기&#x27A1;</a></div>
        </div>
    })

    return (
        <div>
            { /* 현재 가장 뜨거운 토론 */}
            <MainTopic />


            { /* 진행 중인 토론 슬라이더 */}
            <div className="slide-box" >
                <div className="ongoing">
                    <div className="topic">현재 진행 중인 토론</div>
                    <br />
                    <div className="slide-area">
                        <Slider {...settings}>
                            {sliderList}
                        </Slider>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MainPage