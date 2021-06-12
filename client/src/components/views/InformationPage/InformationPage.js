import React from 'react'
import { Divider } from 'antd'
import './information.css'

function InformationPage() {
    return (
        <div class="information">
            <h1> <strong>이용 안내</strong> </h1>
            <Divider />
            <img alt="img-concert" src="Tobamto_logo.png" width="500"></img>
            <br/>
            <br/>
            <h4>'토요일 밤에는 토론’(이하 토밤토)은 건전한 인터넷 토론 문화 정착을 위한 커뮤니티 사이트입니다.</h4>
            <h4>매주 토요일 저녁 여러분의 신청으로 선별된 새로운 토론 주제가 공개됩니다.</h4>
            <h4>일주일간 자유롭게 토론하며, 다양한 사고를 넓혀보세요.</h4>
        <br/>
    </div>
    )
}

export default InformationPage
