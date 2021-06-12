import React, { useEffect, useState } from 'react';
import '../slick.css';
import '../slick-theme.css';
import './main.css';
import Axios from 'axios';

function MainTopic() {
    const topicId = localStorage.getItem('hot');
    const [HotTopic, setHotTopic] = useState({});
    const [HotPros, setHotPros] = useState({});
    const [HotCons, setHotCons] = useState({});
    const [ProsName, setProsName] = useState('');
    const [ConsName, setConsName] = useState('');
    const variable = { '_id':topicId };

    useEffect(() => {
        Axios.post('/api/discussion/getSubjectDetail', variable)
        .then(response => {
            if(response.data.success) {
                setHotTopic(response.data.discussion);

            } else {
                alert('fail to load hot topic');
            }
        })

        Axios.post('/api/opinion/hotPros', variable)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.pros);
                setHotPros(response.data.pros);
                setProsName(response.data.pros.writer.name);
            } else {
                alert('fail to load pros')
            }
        })

        Axios.post('/api/opinion/hotCons', variable)
        .then(response => {
            if(response.data.success) {
                setHotCons(response.data.cons);
                setConsName(response.data.cons.writer.name);
            } else {
                alert('fail to load cons')
            }
        })
    }, [])

    return (
        <div className="hot-topic-box">
            <div className="hot-topic-area" >
                <div className="title">&#x1F525; Hottest Discussion &#x1F525;</div>
                <div className="topic"> {HotTopic.subject} </div>
                <div className="opinion-area">
                    <div className="hottest-opinion" >
                        <p className="nickname"> &#x1F646; <strong>{ProsName}</strong> 님 </p>
                        <div>{HotPros.content}</div>
                    </div>
                    <span className="vs">VS</span>
                    <div className="hottest-opinion" style={{ backgroundColor: '#fbe5d6' }}>
                        <p className="nickname"> &#x1F645; <strong>{ConsName}</strong> 님 </p>
                        <div>{HotCons.content}</div>
                    </div>
                </div>
                <br />
                <br />
                <div><a href={`/discussion/ongoing/${topicId}`}>지금 바로 토론하러 가기&#x27A1;</a></div>
            </div>
        </div>
    )
}

export default MainTopic
