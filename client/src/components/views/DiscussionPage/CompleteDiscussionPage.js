import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import axios from 'axios';
import moment from 'moment';

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

                                    if(i === response.data.list.length - 1) {
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
        const date = moment(discussion.createdAt).format('YYYY-MM-DD');

        return <div className="discussion-list-one" key={index}>
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {date} | {OpinionCount[index]}개의 의견 </p>
        </div>
    })

    return (
        <div className="discussion">
            <Title level={2} style={{display: 'flex'}}>지난 토론</Title>
            <hr />
            <div className="discussion-list">
                {completeList.reverse()}
            </div>
        </div>
    )
}

export default CompleteDiscussionPage
