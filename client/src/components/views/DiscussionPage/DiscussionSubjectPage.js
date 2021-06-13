import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import './Discussion.css';
import Axios from 'axios';
import moment from 'moment';

function DiscussionSubjectPage(props) {

    const [Discussions, setDiscussions] = useState([]);
    const [SubjectCount, setSubjectCount] = useState(0);

    useEffect(() => {
        Axios.get('/api/discussion/getSubjects')
            .then(response => {
                if (response.data.success) {
                    setDiscussions(response.data.discussions)
                    setSubjectCount(response.data.discussions.length);
                } else {
                    alert('목록을 불러오는 데에 실패했습니다.')
                }
            })
    }, [])

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, record, index) => {
                var _id = data[index].discussionId;
                return <a href={`/discussion/subject/${_id}`}>{text}</a>
            }
        },
        {
            title: '글쓴이',
            dataIndex: 'writer',
            key: 'writer'
        },
        {
            title: '날짜',
            dataIndex: 'date',
            key: 'date'
        },
    ];

    const routeChange = (e)=> {
        e.preventDefault();
        props.history.push('/discussion/apply');
    }

    const data = Discussions.map((discussion, index) => ({
        key: index,
        title: discussion.subject,
        writer: discussion.userId.name,
        date: moment(discussion.createdAt).format('YYYY-MM-DD'),
        discussionId: discussion._id,
    }))

    const onTableChange = () => {

    }

    return (
        <div>
            <div className="top">
                <div className="discussion-page-title" style={{ marginLeft: '10%', fontSize: '40px' }}>새로 올라온 주제</div>
                <button className="writeBtn" onClick={routeChange} style={{ marginRight: '1%'}}>주제 신청</button>
            </div>
            <div className="subject-board">
                <Table
                    columns={columns}
                    dataSource={data.reverse()}
                    pagination={{
                        total: 30,
                        pageSize: 7,
                        hideOnSinglePage: true,
                        //position: ['none', 'bottomCenter']
                        
                    }}
                />
            </div>
        </div>
    )
}

export default DiscussionSubjectPage
