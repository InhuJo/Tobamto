import React, { useState, useEffect } from 'react';
import { Typography, Divider } from 'antd';
import Axios from 'axios';
import Like from './Like';
const { Title } = Typography;

function DiscussionMoreDetailPage(props) {
    const [UserName, setUserName] = useState("")
    const [Subject, setSubject] = useState("")
    const [Content, setContent] = useState("")
    const id = window.location.pathname.substr(17, 24);
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
        <div style={{ marginTop:'150px' }}>
            <div style={{ width: '90%', height: '100%', margin: '0 auto', textAlign: 'center' }}>
                <Title level={3}>
                    {Subject}
                </Title>
                <p> written by. <strong>{UserName}</strong> </p>
                <Divider />
                <p>
                    {Content}
                </p>
                <br />
                <Like />
            </div>
        </div>
    )
}

export default DiscussionMoreDetailPage
