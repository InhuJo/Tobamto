import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios';
import './Discussion.css'
import moment from 'moment';
const { Title } = Typography;

function OngoingDiscussionPage() {

    const state = 'ongoing';
    const [Discussions, setDiscussions] = useState([]);
    const [OpinionCount, setOpinionCount] = useState([]);

    useEffect(() => {
        
        Axios.get('/api/discussion/getOngoingDiscussions')
        .then(response => {
            if (response.data.success) {
                setDiscussions(response.data.discussions);
                
                Axios.post('/api/opinion/count', response.data.discussions)
                        .then(res => {
                            if (res.data.success) {
                                setOpinionCount(res.data.opinionCount);
                            } else {
                                alert('complete discussion opinion count load fail')
                            }
                        })
            } else {
                alert('진행중인 불러오는 데에 실패했습니다.')
            }
        })

    }, [])

    
    const ongoingList = Discussions.map((discussion, index) => {
        const date = moment(discussion.createdAt).format('YYYY-MM-DD');

        return <div className="discussion-list-one">
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {date} | {OpinionCount[index]}개의 의견 </p>
        </div>
    })


     return (
        <div className="discussion">
            <div className="discussion-page-title" style={{ fontSize: '40px', display: 'flex' }}>진행 중인 토론</div>
            <hr />
            <div className="discussion-list">
                {ongoingList.reverse()}
            </div>
        </div>
    )
}

export default OngoingDiscussionPage