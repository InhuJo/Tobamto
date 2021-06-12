import React, { useState, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import { moment } from 'moment';
import axios from 'axios';

const { Title } = Typography;

function CompleteDiscussionPage() {

    const state = 'complete';
    const id = 'idvalue';
    const [Discussions, setDiscussions] = useState([]);

    useEffect(() => {

        /* 지난 토론 목록 불러오기 */
        axios.get('/api/discussion/complete')
            .then(response => {
                if (response.data.success) {
                    setDiscussions(response.data.list);
                } else {
                    alert('complete discussion list load fail')
                }
            })
        
        axios.post('/api/opinion/count')
            .then(response => {
                if(response.data.success) {

                } else {
                    alert('complete discussion opinion count load fail')
                }
            })
    }, [])

    const renderCard = Discussions.map((discussion, index) => {

        return <Col key={index} lg={4} md={6} xs={24}>
            <div className="discussion-card">
                <h3><strong><a href={`/discussion/${state}/${id}`}>안락사, 허용해야할까?</a></strong></h3>
                <br />
                <p className="discussion-date">2021-05-22 | 16개의 의견 </p>
            </div>
        </Col>
    })

    return (
        <div style={{width: '85%', margin: '4rem auto' }}>
            <Title level={2}>지난 토론</Title>
            <hr />
            <Row gutter={[16, 16]} style={{marginLeft: '3rem', marginTop: '1rem'}}>
                {renderCard}
            </Row>
        </div>
    )
}

export default CompleteDiscussionPage
