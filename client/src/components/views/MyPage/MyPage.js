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

            <div className="myopnion" style={{border: '2px solid lightgray', width:'80%',borderRadius:'20px', marginTop:'3%', padding:'2%'}}>
                <div>
                <h4 style={{display:'inline'}}>토론 주제 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>딱딱한 복숭아(딱복)이 물렁한 복숭아(물복)보다 더 낫다.</p>
                <p></p>
                </div>
                <div>
                <h4 style={{display:'inline'}}>내 입장 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>찬성</p>
                <p></p>

                </div>
                <div>
                <h4 style={{display:'inline' }}>내 의견 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>딱딱한 복숭아는 위급시 흉기로 사용 가능하다.</p>

                </div>
            </div>

            <div className="myopnion" style={{border: '2px solid lightgray', width:'80%',borderRadius:'20px', marginTop:'3%', padding:'2%',marginBottom:'8%'}}>
                <div>
                <h4 style={{display:'inline'}}>토론 주제 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>1인 미디어는 규제되어야 하는가</p>
                <p></p>
                </div>
                <div>
                <h4 style={{display:'inline'}}>내 입장 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>찬성</p>
                <p></p>

                </div>
                <div>
                <h4 style={{display:'inline' }}>내 의견 : </h4>
                <p style={{display:'inline',paddingLeft:'2%'}}>현재 유튜브에서 연령제한이나 청소년에게 적합하지 않는 영상들이 제재없이 무분별하게 업로드 되고 있습니다.</p>

                </div>
            </div>
        </div>
    )
}

export default MyPage
