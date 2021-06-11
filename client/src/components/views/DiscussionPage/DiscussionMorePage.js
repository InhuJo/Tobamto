import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import './Discussion.css';
import Axios from 'axios';

function DiscussionMorePage(props) {
    const user = useSelector(state => state.user);

    const [Discussions, setDiscussions] = useState([])

    useEffect(() => {
        Axios.get('/api/discussion/getDiscussions')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.discussions)
                    setDiscussions(response.data.discussions)
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
                var id = data[index].discussionId;
                return <a href={`/discussion/more/${id}`}>{text}</a>
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
        date: discussion.createdAt.substr(0, 10),
        discussionId: discussion._id,
    }))

    return (
        <div>
            <div className="top">
                <h1 className="title" style={{ fontWeight: 700, marginLeft: '10%', fontSize: 40 }}>새로 올라온 주제</h1>
                <button className="writeBtn" onClick={routeChange}>주제 신청</button>
            </div>
            <div className="board">
                <Table
                    columns={columns}
                    dataSource={data.reverse()}
                    pagination={{
                        total: 100,
                        pageSize: 7,
                        hideOnSinglePage: true,
                        //position: ['none', 'bottomCenter']
                    }}
                />
            </div>
        </div>
    )
}

export default DiscussionMorePage
