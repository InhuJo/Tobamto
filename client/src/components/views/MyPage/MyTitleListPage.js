import React from 'react'
import { Button } from 'antd';

function MyPage() {
    return (
        <div style={{ marginTop: '100px', textAlign: 'left', marginLeft: '10%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
            
            <div className='welcome'>
                <span>
                    <strong>{localStorage.getItem('userName')}</strong>님, 환영합니다.
                </span>
                <Button type="primary" style={{ marginLeft: '3%', backgroundColor:"#1f294f", borderColor:"#1f294f"}} href="/mypage/edit">
                개인 정보 수정
                </Button>
            </div>

            <div className="mylist" style={{ marginTop: '3%'}}>
                <div>
                    <a href="/mypage">
                        <h2 style={{ display: 'inline' }}> <strong>작성한 의견</strong> </h2>
                    </a>   
                    <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%'}}> | </h2>
                    <a href="/mypage/title">
                        <h2 style={{ display: 'inline' }}> <strong>작성한 주제</strong> </h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MyPage
