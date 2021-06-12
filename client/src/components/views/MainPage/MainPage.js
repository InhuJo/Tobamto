import React from 'react';
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
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            { /* 현재 가장 뜨거운 토론 */}
            <div className="box" style={{ border: '1px solid lightgrey', margin: '6rem'}}>
                <div className="hot-topic" style={{ margin: '3rem auto', textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem' }}>
                <h3><strong> &#x1F525; 현재 가장 뜨거운 토론 &#x1F525; </strong></h3>
                <Title level={1}> <i>안락사, 허용해야 한다</i> 
                </Title>
                <div className="opinion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '30%', backgroundColor: '#B4C7E7', display: 'inline-block', padding: '2rem', margin: '2rem' }}>
                        <p><strong> &#x1F646; 조궁뎅 님 </strong></p>
                        <p>고통 없이 죽여준다고? 이거 완전 이득아님?</p>
                    </div>
                    <h1 style={{ display: 'inline'}}><strong><i> VS </i></strong></h1>
                    <div style={{ width: '30%', backgroundColor: '#FBE5D6', display: 'inline-block', padding: '2rem', margin: '2rem' }}>
                        <p className="main-cons"><strong> &#x1F645; 코뚱땡이 님 </strong></p>
                        <p>솔직히 너네 중에 죽고싶은 사람 있냐고 ㅋㅋㅋ 아 어이없네 ㅋㅋ루삥뽕</p>
                    </div>
                </div>
                <br/>
                <br/>
                <a> &#x27A1; 지금 바로 토론하러 가기 </a>
                </div>
            </div>
           

            { /* 진행 중인 토론 슬라이더 */}
            <div className="box" style={{ border: '1px solid lightgrey', margin: '6rem'}}>
                <div className="ongoing" style={{ width: '50%', margin: '3rem auto', textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem'  }}>
                <h3><strong> 현재 진행 중인 토론 </strong></h3>
                <br/>
                <Slider {...settings}>
                    <div>
                        <h1 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>1인 미디어, 규제해야 한다</i></strong> </h1>
                        <a href='http://www.naver.com' target="_blank"><u>지금 바로 토론하러 가기</u> </a>
                    </div>
                    <div>
                        <h1 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>코뚱땡이는 바보다</i></strong> </h1>
                        <a href='http://www.naver.com' target="_blank"> <u>지금 바로 토론하러 가기</u> </a>
                    </div>
                    <div>
                        <h1 style={{ textAlign: 'center', margin: '2rem auto' }}> <strong><i>조궁뎅이는 궁뎅이다</i></strong> </h1>
                        <a href='http://www.naver.com' target="_blank"> <u>지금 바로 토론하러 가기</u> </a>
                    </div>
                </Slider>
                </div>
            </div>
            
        </div>
                
    )
}

export default MainPage
