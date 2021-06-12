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

    const ongoingList = Discussions.map((discussion, index) => {
        
        const variable =  { _id: discussion._id };

        // Axios.post('/api/discussion/getProsOpinions', variable)
        // .then(response => {
        //     if (response.data.success) {
        //         setPros(response.data.pros)
        //     } else {
        //         alert('찬성 의견을 불러오는 데에 실패했습니다.')
        //     }
        // })

        // Axios.post('/api/discussion/getConsOpinions', variable)
        // .then(response => {
        //     if (response.data.success) {
        //         setCons(response.data.cons)
        //     } else {
        //         alert('반대 의견을 불러오는 데에 실패했습니다.')
        //     }
        // })

        return <div className="discussion-list-one">
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {discussion.createdAt.substr(0, 10)} | 개의 의견 </p>
        </div>
    })

    // const renderCard = Discussions.map((discussion, index) => {

    //     return <Col key={index} lg={4} md={6} xs={24}>
    //         <div className="discussion-card">
    //             <h3><strong><a href={`/discussion/${state}/${id}`}>안락사, 허용해야할까?</a></strong></h3>
    //             <br />
    //             <p className="discussion-date">2021-05-22 | 16개의 의견 </p>
    //         </div>
    //     </Col>
    // })

    return (
        <div className="discussion">
            <Title level={2}>현재 진행중인 토론</Title>
            <hr />
            <div className="discussion-list">
                {ongoingList.reverse()}
            </div>
        </div>
    )
}

export default CompleteDiscussionPage
