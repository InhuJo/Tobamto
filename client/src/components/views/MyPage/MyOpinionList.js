import React, { useEffect } from "react";

function MyOpinionList(props) {
    return (
        <div className="myopnion" style={{border: '2px solid lightgray', width:'80%',borderRadius:'20px', marginTop:'3%', padding:'2%'}}>
            <div>
                <h4 style={{display:'inline'}}>토론 주제 : </h4>
                <p style={{display:'inline',paddingLeft:'10px'}}>{props.subject}</p>
                <p></p>
            </div>
            <div>
                <h4 style={{display:'inline'}}>내 입장 : </h4>
                <p style={{display:'inline',paddingLeft:'10px'}}>{props.side}</p>
                <p></p>
            </div>
            <div>
                <h4 style={{display:'inline' }}>내 의견 : </h4>
                <p style={{display:'inline',paddingLeft:'10px'}}>{props.content}</p>
            </div>
        </div>
    )
}

export default MyOpinionList
