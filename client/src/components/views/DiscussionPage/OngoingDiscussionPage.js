import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios';
import './Discussion.css'
const { Title } = Typography;

function OngoingDiscussionPage() {
    const [Discussions, setDiscussions] = useState([]);
    const [Pros, setPros] = useState([]);
    const [Cons, setCons] = useState([]);
    const state = 'ongoing';
    const id = 'idvalue';

    useEffect(() => {
        
        Axios.get('/api/discussion/getOngoingDiscussions')
        .then(response => {
            if (response.data.success) {
                setDiscussions(response.data.discussions);
                console.log(Discussions);
            } else {
                alert('진행중인 불러오는 데에 실패했습니다.')
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