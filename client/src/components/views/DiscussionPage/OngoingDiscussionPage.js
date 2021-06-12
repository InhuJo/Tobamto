import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Axios from 'axios';
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

        return <div className="ongoing-discussion" style={{ display: 'flex', alignItems: 'center', width: '200px', height:'150px', background: '#F0F0F0', padding: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'}}>
            <h3><strong><a href={`/discussion/${state}/${discussion._id}`}>{discussion.subject}</a></strong></h3>
            <br />
            <p> {discussion.createdAt.substr(0, 10)} | 개의 의견 </p>
        </div>
    })


     return (
        <div style={{ textAlign: 'center', marginTop: '100px', marginBottom: '50px' }}>
            <Title level={3} style={{ width: '100%' }}> 현재 진행중인 토론
            </Title>
            <div className="ongoing-discussion-lists" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', width: '100%', minWidth: '60%', paddingLeft: '100px', paddingRight: '100px'}}>
                {ongoingList.reverse()}
            </div>
        </div>
    )
}

export default OngoingDiscussionPage
