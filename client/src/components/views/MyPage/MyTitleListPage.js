import React from 'react'
import { Button } from 'antd';
import './Discussion.css';
import { Table } from 'antd';

function MyPage(props) {
    const data = [
        {
            key: '1',
            title: '겨울에 얼어 죽어도 아아인가?',
            date: '2021-05-25 21:19',
            render: text => <a href ></a>,
        },
        {
            key: '2',
            title: '롤할 쮸들 괌',
            date: '2021-05-25 17:11'
        },
        {
            key: '3',
            title: '겨울에 얼어 죽어도 아아인가?',
            date: '2021-05-25 21:19'
        },
        {
            key: '4',
            title: '롤할 쮸들 괌',
            date: '2021-05-25 17:11'
        },
        {
            key: '5',
            title: '겨울에 얼어 죽어도 아아인가?',
            date: '2021-05-25 21:19'
        },
        {
            key: '6',
            title: '롤할 쮸들 괌',
            date: '2021-05-25 17:11'
        },
        {
            key: '7',
            title: '겨울에 얼어 죽어도 아아인가?',
            date: '2021-05-25 21:19'
        },
        {
            key: '8',
            title: '롤할 쮸들 괌',
            date: '2021-05-25 17:11'
        },
        {
            key: '9',
            title: '겨울에 얼어 죽어도 아아인가?',
            date: '2021-05-25 21:19'
        },
        {
            key: '10',
            title: '롤할 쮸들 괌',
            date: '2021-05-25 17:11'
        },
    ]

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '날짜',
            dataIndex: 'data',
            key: 'date'
        },
    ];

    const routeChange = (e) => {
        e.preventDefault();
        props.history.push('/discussion/apply');
    }

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
                        <a href="/mypage">
                            <span style={{ fontSize: '21px', color: '#b3b3b3' }}>작성한 의견</span>
                        </a>
                        <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%' }}> | </h2>
                        <a href="/mypage/title">
                            <span style={{ fontSize: '21px', color: '#1f294f', fontWeight: '750' }}>작성한 의견</span>
                        </a>
                    </div>
                </div>


            </div>


            <div className="board" style={{ marginLeft: '10%' }}>
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

export default MyPage
