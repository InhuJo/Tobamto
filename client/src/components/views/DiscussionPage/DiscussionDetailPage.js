import React, { useEffect, useState } from 'react';
import { Typography, Divider } from 'antd';
import Axios from 'axios';
import Recommend from './Sections/Recommend';
import './Discussion.css'

const { Title } = Typography;

function DiscussionDetailPage(props) {

    const [Subject, setSubject] = useState("")
    const [Opinion, setOpinion] = useState("");
    const [Pros, setPros] = useState([]);
    const [Cons, setCons] = useState([]);
    const state = props.match.params.state;
    const discussionId =  props.match.params._id;
    var swearWord = new Array("ㅅㅂ", "씨발", "시발", "병신", "존나", "ㅈㄴ", "미친", "ㅁㅊ");

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

    /* 욕설 검사 */
    const checkSwearWord =() => {
        for(var i=0; i<swearWord.length; i++) {
            if(Opinion.indexOf(swearWord[i]) !== -1) {
                alert('욕설이 담긴 의견은 등록하실 수 없습니다.');
                return 1;
            }
        }

        return 0;
    }

    /* 찬성 의견 제출 */
    const onProsSubmit = (event) => {
        if(Opinion=="") {
            alert("의견을 입력해주세요.");
            return;
        }
        if(checkSwearWord() == 1) return;

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

    /* 반대 의견 제출 */
    const onConsSubmit = (event) => {
        if(Opinion=="") {
            alert("의견을 입력해주세요.");
            return;
        }
        if(checkSwearWord() == 1) return;

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

    /* 신고하기 */
    const onReport = (writer, flag, opinionId) => {
         const user = localStorage.getItem('userId');

         if(user=="") {
             alert('로그인 후 이용해주세요.');
         }
        
        const whyReport = prompt(`${writer.name}님을 신고하시겠습니까? 신고 이유를 작성해 주세요.`, '욕설/비방글 사용');

        if(whyReport==null) {
            alert("신고가 취소되었습니다.");
        } else {
            
            let reportVariables = {}

            if(flag==0) {
                reportVariables = {
                    writer: writer,
                    reporter: user,
                    ProsId: opinionId,
                    content: whyReport,
                }
            } else {
                reportVariables = {
                    writer: writer,
                    reporter: user,
                    ConsId: opinionId,
                    content: whyReport,
                }
            }

            Axios.post('/api/report/onReport', reportVariables)
            .then(response => {
                if (response.data.success) {
                    alert('신고되었습니다.');
                } else {
                    alert('신고에 실패했습니다.');
                }
            })
        }
    }

    const prosList = Pros.map((pros, index) => {

        return <div className="opinion">
        <div className="name" >
            <p>{pros.writer.name}</p>
            <img 
                src={require("./alarm.png")} 
                width="20" 
                onClick={() => onReport(pros.writer, 0, pros._id)} />
            </div>
        <div className="content" >
            <p>{pros.content}</p>
            <Recommend Pros userId={localStorage.getItem('userId')} ProsId={pros._id} />
        </div>
    </div>

    })

    const consList = Cons.map((cons, index) => {

        return <div className="opinion" style={{ marginBottom: '1rem'}}>
        <div className="name" >
            <p>{cons.writer.name}</p>
            <img 
                src={require("./alarm.png")} 
                width="20"
                onClick={() => onReport(cons.writer, 1, cons._id)} />
            </div>
        <div className="content">
            <p>{cons.content}</p>
            <Recommend Cons userId={localStorage.getItem('userId')} ConsId={cons._id}/>
        </div>
    </div>

    })

    return (
        <div>
            <div className="complete">
                <p>토론 주제</p>
                <Title level={2}>  
                    {Subject}
                </Title>
                    <br />
                    <Divider />
                <div className="agree-disagree">
                    <h2>찬성 </h2>
                    <h2>  VS  </h2>
                    <h2> 반대</h2>
                </div>
            </div>


            <div className="chat">
                <div className="agree">
                    <div>
                        {prosList}
                    </div>
                </div>

                <div className="disagree">
                    <div>
                        {consList}
                    </div>
                
                </div>
            </div>

            {
                state == 'ongoing' &&
                <div className="comment-ongoing">
                    <h2>의견 남기기</h2>
                    <form >
                        <div className="comment-write">
                            <textarea
                                value={Opinion}
                                onChange={handleChange}
                            />
                            <div className="buttons">
                                <button 
                                    className="button-pros"
                                    onClick={onProsSubmit}>
                                    <strong>찬성</strong>
                                </button>
                                <button
                                    className="button-cons"
                                    onClick={onConsSubmit} >
                                    <strong>반대</strong>
                                </button>
                            </div>
                        </div>
                        <br />
                        <p>* ‘토밤토’는 건전한 토론 문화를 지향합니다. 다른 사람을 향한 지나친 비방이나 욕설은 제재될 수 있습니다.</p>
                    </form>
                </div>
            }

            {
                state == 'complete' &&
                <div className="comment-complete">
                    <h2>종료된 토론입니다.</h2>
                </div>
            }

        </div>

    )
}

export default DiscussionDetailPage
