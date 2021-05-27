import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor: 'lightgray'
        }}>
           <p> Copyrights © Advanced Web Programming Team Projcet Tobamto </p>
        </div>
    )
}

export default Footer
