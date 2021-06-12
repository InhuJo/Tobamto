import React, { useState, useEffect } from 'react';
import { Typography, Divider } from 'antd';
import Axios from 'axios';
import Like from './Sections/Like';
const { Title } = Typography;

function DiscussionSubjectDetailPage(props) {
    const [UserName, setUserName] = useState("")
    const [Subject, setSubject] = useState("")
    const [Content, setContent] = useState("")
    const id = window.location.pathname.substr(20, 24);
    const variable = { _id: id };

    useEffect(() => {
        Axios.post('/api/discussion/getTopicDetail', variable)
            .then(response => {
                if (response.data.success) {
                    setUserName(response.data.discussion.userId.name)
                    setSubject(response.data.discussion.subject)
                    setContent(response.data.discussion.content);
                } else {
                    alert('데이터를 불러오는 데에 실패했습니다.')
                }
            })
    }, [])


    return (
        <div style={{ marginTop:'120px' }}>
            <div style={{ width: '90%', height: '100%', margin: '0 auto', textAlign: 'center', border: '1px solid lightgrey', padding: '4rem' }}>
                <Title level={3}>
                    {Subject}
                </Title>
                <p> written by. <strong>{UserName}</strong> </p>
                <Divider />
                <div style={{ height: '100px', textAlign: 'center'}}>
                    <p>{Content}</p>
                </div>
                <br />
                <div style={{ fontSize: '80%', color: 'grey', marginTop: '2rem', marginBottom: '1rem' }}>
                    <i>
                        이 주제로 토론하고 싶으신가요?
                        <br />
                        좋아요 수가 일정 수를 넘기면 다음 토론 주제로 채택됩니다!
                    </i>
                </div>
                <Like />
            </div>
        </div>
    )
}

export default DiscussionSubjectDetailPage
