import React from 'react'
import { FaCode } from "react-icons/fa";

function Developer() {
    return (

        <div>
            <div class="Dev-info" style={{ marginTop: '100px', textAlign: 'center' }}>
                <h1> <strong>개발자 소개</strong> </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div class="juyoung" style={{ display: 'inline-block', textAlign: 'center' }} >
                    <img src={require("./Dev_juyoung.jpg")} width="250" />
                    <p></p>
                    <h4>경북대학교 컴퓨터학부</h4>
                    <h4>2018113910</h4>
                    <h4>김주영</h4>
                    <h4>nulling@gmail.com</h4>
                </div>

                <div class="juyeong" style={{ display: 'inline-block', textAlign: 'center', margin: '80px' }}>
                    <img src={require("./Dev_juyeong.jpg")} width="250" />
                    <p></p>

                    <h4>경북대학교 컴퓨터학부</h4>
                    <h4>2018110931</h4>
                    <h4>오주영</h4>
                    <h4>wakemeup@knu.ac.kr</h4>
                </div>

                <div class="inhu" style={{ display: 'inline-block', textAlign: 'center' }}>
                    <img src={require("./Dev_inhu.jpg")} width="250" />
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

export default Developer
