import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function OngoingDiscussionPage() {

     return (
        <div style={{ textAlign: 'center' }}>
            <Title level={3}> 현재 진행중인 토론
            </Title>
            <div style={{ width: '20%', height:'10%', background: '#F0F0F0', display: 'inline-block', margin: '0 auto', padding: '1rem' }}>
                <h3><strong> 안락사, 허용해야 한다 </strong></h3>
                <br />
                <p>2021-05-22 | 16개의 의견 </p>
            </div>
        </div>
    )
}

export default OngoingDiscussionPage
