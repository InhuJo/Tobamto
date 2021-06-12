import React from 'react';

function Footer() {
    return (
        <div style={{
            height: '50px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'0.8rem',
            backgroundColor: 'lightgray'
        }}>
           <p style={{paddingTop: '10px'}}> Copyrights © Advanced Web Programming Team Projcet Tobamto  </p>
        </div>
    )
}

export default Footer