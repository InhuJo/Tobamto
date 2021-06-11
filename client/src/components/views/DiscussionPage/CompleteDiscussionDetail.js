import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function CompleteDiscussionDetail() {

    return (
        <div>
            <div class="complete" style={{ width: '85%', margin: '3rem auto', textAlign: 'center' }}>
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


            <div calss="chat" style={{ display: 'inline-block', width: '100%'}}>
                <div class="agree" style={{ overflow:'auto',width:'40%',height:'500px', float: 'left',  background: ' #b4c7e7', textAlign: 'left', padding: '2%', marginLeft: '5%', marginTop: '2%' }}>

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


                <div class="disagree" style={{ overflow:'auto',width:'40%',height:'500px',float: 'right', background: ' #fbe5d6', textAlign: 'right', padding: '2%', marginRight: '5%', marginTop: '2%' }}>

                    <div class="opnion">
                        <div class="name" >
                            <p style={{ display: 'inline', marginRight: '2%' }}>문과붐은 온다</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>님들 자식들이 안락사 시킨다고 할 때 괜찮은 사람들만 찬성에 있는 거 맞죠?</p>
                            <p style={{ color: 'red' }}>♡ 55</p>
                        </div>
                    </div>

                    

                    <div class="opnion2" style={{ marginTop: '5%' }}>
                        <div class="name">
                            <p style={{ display: 'inline', marginTop: '5%', marginRight: '2%' }}>게임중독맞습니다</p>
                            <img src={require("./alarm.png")} width="20" />
                        </div>
                        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
                            <p>공대가 미래다님 사람한테 죽을 권리가 대체 어딨는데요? ㅋㅋ 님 이과죠?</p>
                            <p style={{ color: 'red' }}>♥ 38</p>
                        </div>
                    </div>

                
                    
                </div>
            </div>

            <div className="comment" style={{margin:'5%'}}>
                <h2 style={{marginLeft:'5%', textAlign:'center',color:'gray'}}>종료된 토론입니다.</h2>
                 </div>

        </div>

    )
}

export default CompleteDiscussionDetail