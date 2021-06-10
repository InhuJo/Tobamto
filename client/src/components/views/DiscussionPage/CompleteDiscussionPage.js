import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function CompleteDiscussionPage() {

     return (
        <div class="complete" style={{ width: '85%', margin: '6rem auto', textAlign: 'center' }}>
        <h1> <strong>지난 토론</strong> </h1>
        <br/>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong> 안락사, 허용해야 한다 </strong></h3>
                <br />
                <p>2021-05-22 | 17개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong> 인터넷 실명제를 도입해야 한다. </strong></h3>
                <br />
                <p>2021-05-22 | 29개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>게임 중독은 질병일까?</strong></h3>
                <br />
                <p>2021-05-22 | 21개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>낙태죄 폐지는 옳은 것이다.</strong></h3>
                <br />
                <p>2021-05-22 | 50개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>남북통일은 필수적일까?</strong></h3>
                <br />
                <p>2021-05-22 | 22개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>노키즈 존은 정당할까??</strong></h3>
                <br />
                <p>2021-05-22 | 21개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>동성 결혼을 합법화해야 한다.</strong></h3>
                <br />
                <p>2021-05-22 | 12개의 의견 </p>
            </div>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '2%', padding: '1rem' }}>
                <h3><strong>재난 지원금은 전 국민에게 지급되어야 할까?</strong></h3>
                <br />
                <p>2021-05-22 | 34개의 의견 </p>
            </div>
        </div>
    )
}

export default CompleteDiscussionPage
