import React from 'react';
import { Table } from 'antd';
import './Discussion.css';

function DiscussionMorePage(props) {
    const data = [
        {
            key: '1',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19',
            
        },
        {
            key: '2',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        },
        {
            key: '3',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19'
        },
        {
            key: '4',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        },
        {
            key: '5',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19'
        },
        {
            key: '6',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        },
        {
            key: '7',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19'
        },
        {
            key: '8',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        },
        {
            key: '9',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19'
        },
        {
            key: '10',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        },
    ]

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: text => <a href ='/discussion/detail'>{text}</a>,
        },
        {
            title: '글쓴이',
            dataIndex: 'writer',
            key: 'writer'
        },
        {
            title: '날짜',
            dataIndex: 'data',
            key: 'date'
        },
    ];

    const routeChange = (e)=> {
        e.preventDefault();
        props.history.push('/discussion/apply');
    }

    return (
        <div>
            <div className="top">
                <h1 className="title" style={{ fontWeight: 700, marginLeft: '10%', fontSize: 40 }}>새로 올라온 주제</h1>
                <button className="writeBtn" onClick={routeChange}>주제 신청</button>
            </div>
            <div className="board">
                <Table
                    columns={columns}
                    dataSource={data}
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
