import React from 'react';
import {Table} from 'antd';
import './Discussion.css';

function SubjectApplyPage() {
    const subjectList = [
        {
            key: '1',
            title: '겨울에 얼어 죽어도 아아인가?',
            writer: '엔젤빌',
            date: '2021-05-25 21:19'
        },
        {
            key: '2',
            title: '롤할 쮸들 괌',
            writer: '이누',
            date: '2021-05-25 17:11'
        }
    ]

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title'
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
        }
    ]

    return (
        <div>
            <div className="top">
                <h1 className="title" style={{ fontWeight: 600, marginLeft: 50 }}>새로 올라온 주제</h1>
                <button className="writeBtn">주제 신청</button>
            </div>
            <div className="board">
                <Table dataSource={subjectList} columns={columns} />
            </div>
        </div>
    )
}

export default SubjectApplyPage
