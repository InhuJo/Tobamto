import React, { useEffect } from "react";

function MyOpinionList() {
    return (
        <div className="myopnion" style={{border: '2px solid lightgray', width:'80%',borderRadius:'20px', marginTop:'3%', padding:'2%'}}>
            <div>
                <h4 style={{display:'inline'}}>토론 주제 : </h4>
                <p style={{display:'inline',paddingLeft:'10px'}}>딱딱한 복숭아(딱복)이 물렁한 복숭아(물복)보다 더 낫다.</p>
                <p></p>
            </div>
            <div>
                <h4 style={{display:'inline'}}>내 입장 : </h4>
                <p style={{display:'inline',paddingLeft:'25px'}}>찬성</p>
                <p></p>
            </div>
            <div>
                <h4 style={{display:'inline' }}>내 의견 : </h4>
                <p style={{display:'inline',paddingLeft:'25px'}}>딱딱한 복숭아는 위급시 흉기로 사용 가능하다.</p>
            </div>
        </div>
    )
}

export default MyOpinionList
