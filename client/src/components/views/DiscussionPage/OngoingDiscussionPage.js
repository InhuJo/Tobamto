import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios';
import './Discussion.css'
const { Title } = Typography;

function OngoingDiscussionPage() {

    const state = 'ongoing';
    const [Discussions, setDiscussions] = useState([]);
    const [OpinionCount, setOpinionCount] = useState([]);
    let opinionCount = [];

    useEffect(() => {
        
        Axios.get('/api/discussion/getOngoingDiscussions')
        .then(response => {
            if (response.data.success) {
                setDiscussions(response.data.discussions);
                
                for (let i = 0; i < response.data.discussions.length; i++) {
                    Axios.post('/api/opinion/count', response.data.discussions[i])
                        .then(res => {
                            if (res.data.success) {
                                opinionCount.push(res.data.count)

                                if(i == response.data.discussions.length - 1) {
                                    setOpinionCount(opinionCount);
                                }
                            } else {
                                alert('complete discussion opinion count load fail')
                            }
                        })
                }
            } else {
                alert('진행중인 불러오는 데에 실패했습니다.')
            }
        })

    }, [])

    
    const ongoingList = Discussions.map((discussion, index) => {
        return <div className="discussion-list-one">
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {discussion.createdAt.substr(0, 10)} | {OpinionCount[index]}개의 의견 </p>
        </div>
    })


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

export default OngoingDiscussionPage