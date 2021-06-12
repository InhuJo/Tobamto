import React, { useState, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import { moment } from 'moment';
import axios from 'axios';

const { Title } = Typography;

function CompleteDiscussionPage() {

    const state = 'complete';
    const [Discussions, setDiscussions] = useState([]);
    const [OpinionCount, setOpinionCount] = useState([]);
    let opinionCount = [];

    useEffect(() => {

        /* 지난 토론 목록 및 의견 수 불러오기 */
        axios.get('/api/discussion/complete')
            .then(response => {
                if (response.data.success) {
                    setDiscussions(response.data.list);

                    for (let i = 0; i < response.data.list.length; i++) {
                        axios.post('/api/opinion/count', response.data.list[i])
                            .then(res => {
                                if (res.data.success) {
                                    opinionCount.push(res.data.count)

                                    if(i == response.data.list.length - 1) {
                                        setOpinionCount(opinionCount);
                                    }
                                } else {
                                    alert('complete discussion opinion count load fail')
                                }
                            })
                    }
                } else {
                    alert('complete discussion list load fail')
                }
            })
    }, [])

    const completeList = Discussions.map((discussion, index) => {
        return <div className="discussion-list-one" key={index}>
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {discussion.createdAt.substr(0, 10)} | {OpinionCount[index]}개의 의견 </p>
        </div>
    })

    return (
        <div className="discussion">
            <Title level={2}>지난 토론</Title>
            <hr />
            <div className="discussion-list">
                {completeList.reverse()}
            </div>
        </div>
    )
}

export default CompleteDiscussionPage
