import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import './MyPage.css';
import { Table } from 'antd';
import axios from 'axios';

function MyTitleListPage(props) {
    const userId = localStorage.getItem('userId');
    const variable = { userId:userId };
    const [MySubject, setMySubject] = useState([]);
    const [SubjectCount, setSubjectCount] = useState(0);

    useEffect(() => {
        axios.post('/api/discussion/mydiscussion', variable)
        .then(response => {
            if(response.data.success) {
                setMySubject(response.data.discussions);
                setSubjectCount(response.data.discussions.length);
            } else {
                alert('my discussion load fail')
            }
        })
    }, []);

    const data = MySubject.map((subject, index) => ({
        key: index,
        title: subject.subject,
        date: subject.createdAt.substr(0, 10),
        discussionId: subject._id,
    }))

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, record, index) => {
                var id =  data[index].discussionId;
                return <a href={`/discussion/more/${id}`}>{text}</a>
            }
        },
        {
            title: '날짜',
            dataIndex: 'date',
            key: 'date'
        },
    ];

    return (
        <div>
            <div style={{ marginTop: '100px', textAlign: 'left', marginLeft: '13%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>

                <div className='welcome'>
                    <span style={{fontSize: '20px'}}><strong>{localStorage.getItem('userName')}</strong>님, 환영합니다.</span>
                    <Button 
                        type="primary" 
                        style={{ marginLeft: '1.5%', backgroundColor: "#1f294f", borderColor: "#1f294f" }} 
                        href="/mypage/edit">
                        개인 정보 수정
                    </Button>
                </div>

                <div className="mylist" style={{ marginTop: '3%' }}>
                    <div>
                        <a href="/mypage/opinion">
                            <span style={{ fontSize: '21px', color: '#b3b3b3' }}>작성한 의견</span>
                        </a>
                        <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%' }}> | </h2>
                        <a href="/mypage/title">
                            <span style={{ fontSize: '21px', color: '#1f294f', fontWeight: '750' }}>작성한 주제</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="board" style={{ marginLeft: '13%' }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        total: {SubjectCount},
                        pageSize: 6,
                        hideOnSinglePage: true,
                        //position: ['none', 'bottomCenter']
                    }}
                />
            </div>
        </div>

    )
}

export default MyTitleListPage
