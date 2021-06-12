import React, { useEffect, useState } from "react";
import axios from 'axios';
import MyOpinion from './Sections/MyOpinion';
import MyPageMenu from './Sections/MyPageMenu';

function MyOpinionPage(props) {
    const userId = localStorage.getItem('userId');
    const variable = { userId:userId };
    const [MyPros, setMyPros] = useState([]);
    const [MyCons, setMyCons] = useState([]);

    useEffect(() => {
        axios.post('/api/opinion/myopinion', variable)
        .then(response => {
            if(response.data.success) {
                setMyPros(response.data.pros);
                setMyCons(response.data.cons);
            } else {
                alert('fail to load opinions');
            }
        });
    }, []);

    const mypros = MyPros.map((pros, index) => {
        console.log(pros);
        return <MyOpinion key={index} subject={pros.discussionId.subject} side="찬성" content={pros.content}/>
    })

    const mycons = MyCons.map((cons, index) => {
        return <MyOpinion key={index} subject={cons.discussionId.subject} side="반대" content={cons.content}/>
    })

    return (
        <div style={{ width: '85%', margin: '0 auto' }}>
            <div style={{ marginTop: '100px', textAlign: 'left', marginBottom: '8%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
            
            <MyPageMenu opinion></MyPageMenu>

            {mypros}
            {mycons}
            
            </div>
        </div>
        
    )
}

export default MyOpinionPage
