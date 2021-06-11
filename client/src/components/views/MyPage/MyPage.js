import React, { useEffect } from "react";
import { Button } from 'antd';
import axios from 'axios';
import MyOpinion from './MyOpinionList';

function MyPage(props) {
    const userId = localStorage.getItem('userId');
    const variable = { userId:userId };

    useEffect(() => {
        axios.post('/api/opinion/myopinion', variable)
        .then(response => {
            if(response.data.success) {
                console.log(response.data);
            } else {
                alert('fail to load opinions');
            }
        });
    }, [])

    return (
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

            <MyOpinion></MyOpinion>

            <div className="myopnion" style={{border: '2px solid lightgray', width:'80%',borderRadius:'20px', marginTop:'3%', padding:'2%',marginBottom:'8%'}}>
                <div>
                <h4 style={{display:'inline'}}>토론 주제 : </h4>
                <p style={{display:'inline',paddingLeft:'10px'}}>1인 미디어는 규제되어야 하는가</p>
                <p></p>
                </div>
                <div>
                <h4 style={{display:'inline'}}>내 입장 : </h4>
                <p style={{display:'inline',paddingLeft:'25px'}}>찬성</p>
                <p></p>

                </div>
                <div>
                <h4 style={{display:'inline' }}>내 의견 : </h4>
                <p style={{display:'inline',paddingLeft:'25px'}}>현재 유튜브에서 연령제한이나 청소년에게 적합하지 않는 영상들이 제재없이 무분별하게 업로드 되고 있습니다.</p>

                </div>
            </div>
        </div>
    )
}

export default MyPage
