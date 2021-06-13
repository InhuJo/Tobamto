import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment';
import MyPageMenu from './Sections/MyPageMenu';
import './Sections/MyPage.css';

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
        date: moment(subject.createdAt).format('YYYY-MM-DD'),
        discussionId: subject._id,
    }))

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, record, index) => {
                var id =  data[index].discussionId;
                return <a href={`/discussion/subject/${id}`}>{text}</a>
            }
        },
        {
            title: '날짜',
            dataIndex: 'date',
            key: 'date'
        },
    ];

    return (
        <div style={{ width: '85%', margin: '0 auto' }}>
            <div style={{ marginTop: '100px', textAlign: 'left',marginBottom: '30px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
            
            <MyPageMenu title></MyPageMenu>

            </div>

            <div className="board" style={{ width: '100%' }}>
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
