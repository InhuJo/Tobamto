import React from 'react'
import { Button } from 'antd';

function MyPage() {
    return (
        <div style={{ marginTop: '100px', textAlign: 'left', marginLeft: '100px'}}>
            
            <div className='welcome'>
                <span>
                    <strong>{localStorage.getItem('userName')}</strong>님, 환영합니다.
                </span>
                <Button type="primary" style={{ marginLeft: '10px', backgroundColor:"#1f294f", borderColor:"#1f294f"}} href="/mypage/edit">
                    개인 정보 수정
                </Button>
            </div>

            <div className="mylist">

            </div>
        </div>
    )
}

export default MyPage
