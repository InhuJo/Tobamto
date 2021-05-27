import React, { Component } from 'react';
import { Typography } from 'antd';
import Slider from 'react-slick'
import './slick.css';
import './slick-theme.css';
const { Title } = Typography;

function MainPage() {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

     return (
        <div>
            { /* 현재 가장 뜨거운 토론 */}
            <div class="hot-topic" style={{ width: '85%', margin: '6rem auto', textAlign: 'center'}}>
                <Title level={2} > &#x1F525; 현재 가장 뜨거운 토론 &#x1F525; </Title>
                <h2> <strong>안락사, 허용해야 한다</strong> </h2>
                <span style={{backgroundColor: 'lightgray'}}>코뚱땡이님</span>
                <strong> VS </strong>
                <span style={{backgroundColor: 'lightgray'}}>궁뎅이님</span>
                <br/>
                <br/>
                <a> &#x27A1; 지금 바로 토론하러 가기 </a>
            </div>

            { /* 진행 중인 토론 슬라이더 */}
            <div class="ongoing" style={{ width: '50%', margin: '6rem auto', textAlign: 'center' }}>
                <Title level={2} > 현재 진행 중인 토론 </Title>
                <Slider {...settings}>
                    <div>
                        <h2 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>1인 미디어, 규제해야 한다</i></strong> </h2>
                        <a href='http://www.naver.com' target="_blank"> <u>지금 바로 토론하러 가기</u> </a>-
                    </div>
                    <div>
                        <h2 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>코뚱땡이는 바보다</i></strong> </h2>
                        <a href='http://www.naver.com' target="_blank"> <u>지금 바로 토론하러 가기</u> </a>-
                    </div>
                    <div>
                        <h2 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>조궁뎅이는 궁뎅이다</i></strong> </h2>
                        <a href='http://www.naver.com' target="_blank"> <u>지금 바로 토론하러 가기</u> </a>-
                    </div>
                </Slider>
            </div>
        </div>
                
    )
}

export default MainPage
