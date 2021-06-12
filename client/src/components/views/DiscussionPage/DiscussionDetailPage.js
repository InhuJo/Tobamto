import React, { useEffect, useState } from 'react';
import { Tooltip, Icon, Typography } from 'antd';
import Axios from 'axios';
import Recommend from './Sections/Recommend';

const { Title } = Typography;

function DiscussionDetailPage(props) {

    const [Subject, setSubject] = useState("")
    const [Opinion, setOpinion] = useState("");
    const [Pros, setPros] = useState([]);
    const [Cons, setCons] = useState([]);
    const state = props.match.params.state;
    const discussionId =  props.match.params._id;

    const variable = { _id: discussionId };


    useEffect(() => {
        
        Axios.post('/api/discussion/getSubjectDetail', variable)
        .then(response => {
            if (response.data.success) {
                setSubject(response.data.discussion.subject)
            } else {
                alert('토론 주제를 불러오는 데에 실패했습니다.')
            }
        })

            Axios.post('/api/discussion/getProsOpinions', variable)
            .then(response => {
                if (response.data.success) {
                    setPros(response.data.pros)
                } else {
                    alert('찬성 의견을 불러오는 데에 실패했습니다.')
                }
            })

            Axios.post('/api/discussion/getConsOpinions', variable)
            .then(response => {
                if (response.data.success) {
                    setCons(response.data.cons)
                } else {
                    alert('반대 의견을 불러오는 데에 실패했습니다.')
                }
            })

    }, [])

    const handleChange = (event) => {
        setOpinion(event.currentTarget.value);
    }

    const onProsSubmit = (event) => {

        const variables = {
            writer: localStorage.getItem('userId'),
            discussionId: discussionId,
            content: Opinion,
        }

        Axios.post('/api/opinion/savePros', variables)
            .then(response => {
                if (response.data.success) {
                    alert('의견이 등록되었습니다.');
                    setOpinion("");
                } else {
                    alert('의견 등록에 실패했습니다.');
                }
            })
    }

    const onConsSubmit = (event) => {

        const variables = {
            writer: localStorage.getItem('userId'),
            discussionId: discussionId,
            content: Opinion,
        }

        Axios.post('/api/opinion/saveCons', variables)
            .then(response => {
                if (response.data.success) {
                    alert('의견이 등록되었습니다.');
                    setOpinion("");
                } else {
                    alert('의견 등록에 실패했습니다.');
                }
            })
    }

    const prosList = Pros.map((pros, index) => {

        return <div className="opinion" style={{ marginBottom: '1rem'}}>
        <div className="name" >
            <p style={{ display: 'inline', marginRight: '2%' }}>{pros.writer.name}</p>
            <img src={require("./alarm.png")} width="20" />
            </div>
        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
            <p>{pros.content}</p>
            <Recommend Pros userId={localStorage.getItem('userId')} ProsId={pros._id} />
        </div>
    </div>

    })

    const consList = Cons.map((cons, index) => {

        return <div className="opinion" style={{ marginBottom: '1rem'}}>
        <div className="name" >
            <p style={{ display: 'inline', marginRight: '2%' }}>{cons.writer.name}</p>
            <img src={require("./alarm.png")} width="20" />
            </div>
        <div style={{ width: '80%', height: '10%', background: '#FFF2CC', display: 'inline-block', padding: '3%' }}>
            <p>{cons.content}</p>
            <Recommend Cons userId={localStorage.getItem('userId')} ConsId={cons._id}/>
        </div>
    </div>

    })

    return (
        <div>
            <div className="complete" style={{ width: '85%', margin: 'auto', textAlign: 'center' }}>
                <Title level={2} style={{ marginTop: '100px'}}>  
                    {Subject}
                </Title>
                    <br />
                <div style={{ display: 'inline-block', padding: '1rem' }}>
                    <h1 style={{ display: 'inline' }}><strong>찬성 63%</strong></h1>
                    <h2 style={{ display: 'inline' }}><strong><i>  VS  </i></strong></h2>
                    <h1 style={{ display: 'inline' }}><strong>37% 반대</strong></h1>
                </div>
            </div>


            <div className="chat" style={{ display: 'inline-block', width: '100%' }}>
                <div className="agree" style={{ overflow: 'auto', width: '44%', height: '500px', float: 'left', background: ' #b4c7e7', textAlign: 'left', padding: '2%', marginLeft: '5%', marginTop: '2%' }}>
                    <div>
                        {prosList}
                    </div>
                </div>

                <div className="disagree" style={{ overflow: 'auto', width: '44%', height: '500px', float: 'right', background: ' #fbe5d6', textAlign: 'right', padding: '2%', marginRight: '5%', marginTop: '2%' }}>
                    <div>
                        {consList}
                    </div>
                
                </div>
            </div>

            {
                state == 'ongoing' &&
                <div className="comment" style={{ margin: '5%' }}>
                    <h2 style={{ marginLeft: '2%', marginRight: '3%', marginBottom: '1%' }}>의견 남기기</h2>
                    <form >
                        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <textarea
                                value={Opinion}
                                onChange={handleChange}
                                style={{ width: '80%', height: '150px', resize: 'none', borderRadius: '5px', textAlign: 'center' }}
                            />

                            <button
                                onClick={onProsSubmit}
                                style={{ ackground: '#b4c7e7', color: 'black', width: '100px', height: '100px', marginTop: '2%', borderRadius: '10px', margin: '2%' }} >
                                찬성
                            </button>
                            <button
                                onClick={onConsSubmit}
                                style={{ background: '#fbe5d6', color: 'black', width: '100px', height: '100px', marginTop: '2%', borderRadius: '10px' }} >
                                반대
                            </button>
                        </div>
                        <br />
                        <p style={{ color: 'red', marginLeft: '2%' }}>* ‘토밤토’는 건전한 토론 문화를 지향합니다. 다른 사람을 향한 지나친 비방이나 욕설은 제재될 수 있습니다.</p>
                    </form>
                </div>
            }

            {
                state == 'complete' &&
                <div className="comment" style={{ margin: '5%' }}>
                    <h2 style={{ marginLeft: '5%', textAlign: 'center', color: 'gray' }}>종료된 토론입니다.</h2>
                </div>
            }

        </div>

    )
}

export default DiscussionDetailPage
