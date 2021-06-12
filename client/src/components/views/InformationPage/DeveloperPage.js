import React from 'react'
import { Divider } from 'antd'

function DeveloperPage() {
    return (

        <div class="dev-info">
            <h1> <strong>개발자 소개</strong> </h1>
            <Divider />
            <div class="developers">
                <div class="developer-one" style={{  }} >
                    <img alt="img-concert" src={require("./Dev_juyoung.jpg")} width="250" />
                    <p></p>
                    <h4>경북대학교 컴퓨터학부</h4>
                    <h4>2018113910</h4>
                    <h4>김주영</h4>
                    <h4>nullyng@gmail.com</h4>
                </div>

                <div class="developer-one" style={{ margin: '2rem' }}>
                    <img alt="img-concert" src={require("./Dev_juyeong.jpg")} width="250" />
                    <p></p>

                    <h4>경북대학교 컴퓨터학부</h4>
                    <h4>2018110931</h4>
                    <h4>오주영</h4>
                    <h4>wakemeup@knu.ac.kr</h4>
                </div>

                <div class="developer-one">
                    <img alt="img-concert" src={require("./Dev_inhu.jpg")} width="250" />
                    <p></p>
                    <h4>경북대학교 컴퓨터학부</h4>
                    <h4>2018110861</h4>
                    <h4>조인후</h4>
                    <h4> inhudev@gmail.com</h4>
                </div>
            </div>
        </div>

    )
}

export default DeveloperPage
