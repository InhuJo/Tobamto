import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import axios from 'axios';
import MyOpinion from './MyOpinionList';

function MyPage(props) {
    const userId = localStorage.getItem('userId');
    const variable = { userId:userId };
    const [MyPros, setMyPros] = useState([]);
    const [MyCons, setMyCons] = useState([]);

    useEffect(() => {
        axios.post('/api/opinion/myopinion', variable)
        .then(response => {
            if(response.data.success) {
                setMyPros(response.data.pros);
                setMyCons(response.data.cons);
            } else {
                alert('fail to load opinions');
            }
        });
    }, []);

    const mypros = MyPros.map((pros, index) => {
        console.log(pros);
        return <MyOpinion key={index} subject={pros.discussionId.subject} side="찬성" content={pros.content}></MyOpinion>
    })

    const mycons = MyCons.map((cons, index) => {
        return <MyOpinion key={index} subject={cons.discussionId.subject} side="반대" content={cons.content}></MyOpinion>
    })

    return (
        <div style={{ marginTop: '100px', textAlign: 'left', marginLeft: '13%', marginBottom: '8%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
            
            <div className='welcome'>
            <span style={{fontSize: '20px'}}><strong>{localStorage.getItem('userName')}</strong>님, 환영합니다.</span>
                <Button 
                    type="primary" 
                    style={{ marginLeft: '1.5%', backgroundColor: "#1f294f", borderColor: "#1f294f" }} 
                    href="/mypage/edit">
                    개인 정보 수정
                </Button>
            </div>

            <div className="mylist" style={{ marginTop: '3%'}}>
                <div>
                    <a href="/mypage">
                        <span style={{fontSize: '21px', color: '#1f294f', fontWeight: '750'}}>작성한 의견</span>
                    </a>   
                    <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%'}}> | </h2>
                    <a href="/mypage/title">
                        <span style={{fontSize: '21px', color: '#b3b3b3'}}>작성한 의견</span>
                    </a>
                    
                </div>
            </div>

            {mypros}
            {mycons}
            
        </div>
    )
}

export default MyPage
