import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function DiscussionDetail() {

    return (
        <div>
            <div class="complete" style={{ width: '85%', margin: '6rem auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', margin: '2%', padding: '1rem' }}>
                    <h1><strong>안락사 허용해야 할까? </strong></h1>
                    <br />
                    <h2 style={{ display: 'inline' }}><strong>63%</strong></h2>
                    <h1 style={{ display: 'inline' }}><strong>  VS  </strong></h1>
                    <h2 style={{ display: 'inline' }}><strong>37%</strong></h2>

                </div>
            </div>
            <h4 style={{ display: 'inline-block', float:'left', marginLeft: '10%' }}> 찬성 (안락사 허용) </h4>
            <h4 style={{ display: 'inline-block', float: 'right', marginRight: '10%' }}> 반대 (안락사 금지) </h4>


            <div calss="chat" style={{ display: 'inline-block' }}>
                <div class="agree" style={{ float: 'left', width: '45%', background: ' #b4c7e7', textAlign: 'left', padding: '2%', marginLeft: '5%', marginTop: '2%' }}>

                    <div class="opnion">
                        <div class="name" >
                            <p style={{ display: 'inline', marginRight: '2%' }}>공대가 미래다</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>내가 태어나고 싶어서 태어난것도 아니고 죽을 권리정도는 사람한테 있지 ㅋㅋㅋ</p>
                            <p style={{ color: 'red' }}>♡ 55</p>
                        </div>
                    </div>

                    <div class="opnion2" style={{ marginTop: '5%' }}>
                        <div class="name">
                            <p style={{ display: 'inline', marginTop: '5%', marginRight: '2%' }}>코딩 조아</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>제발 안락사 합법화 부탁드립니다..</p>
                            <p style={{ color: 'red' }}>♥ 38</p>
                        </div>
                    </div>

                    <div class="opnion3" style={{ marginTop: '5%' }}>
                        <div class="name">
                            <p style={{ display: 'inline', marginTop: '5%', marginRight: '2%' }}>우리정글뭐해</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>죽는 게 사는 것보다 낫다니까</p>
                            <p style={{ color: 'red' }}>♥ 12</p>
                        </div>
                    </div>
                </div>


                <div class="disagree" style={{ float: 'right', width: '45%', background: ' #fbe5d6', textAlign: 'right', padding: '2%', marginLeft: '5%', marginTop: '2%' }}>

                    <div class="opnion">
                        <div class="name" >
                            <p style={{ display: 'inline', marginRight: '2%' }}>공대가 미래다</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>내가 태어나고 싶어서 태어난것도 아니고 죽을 권리정도는 사람한테 있지 ㅋㅋㅋ</p>
                            <p style={{ color: 'red' }}>♡ 55</p>
                        </div>
                    </div>

                    <div class="opnion2" style={{ marginTop: '5%' }}>
                        <div class="name">
                            <p style={{ display: 'inline', marginTop: '5%', marginRight: '2%' }}>코딩 조아</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>제발 안락사 합법화 부탁드립니다..</p>
                            <p style={{ color: 'red' }}>♥ 38</p>
                        </div>
                    </div>

                    <div class="opnion3" style={{ marginTop: '5%' }}>
                        <div class="name">
                            <p style={{ display: 'inline', marginTop: '5%', marginRight: '2%' }}>우리정글뭐해</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>죽는 게 사는 것보다 낫다니까</p>
                            <p style={{ color: 'red' }}>♥ 12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DiscussionDetail
