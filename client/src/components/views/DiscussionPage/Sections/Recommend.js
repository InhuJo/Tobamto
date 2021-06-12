import React, { useEffect, useState } from 'react'
import { Tooltip, Icon } from 'antd';
import Axios from 'axios';

function Recommend(props) {
    
    const [Recommend, setRecommend] = useState(0)
    const [RecommendAction, setRecommendAction] = useState(null)

    let variable = { } 

    if(props.Pros) {
        variable = { userId: props.userId, ProsId: props.ProsId } 
    } else {
        variable = { userId: props.userId, ConsId: props.ConsId } 
    }

    useEffect(() => {

        Axios.post('/api/recommend/getOpinionRecommend', variable) 
        .then(response => {
            if(response.data.success) {
                
                // 얼마나 많은 좋아요를 받았는지
                setRecommend(response.data.recommend.length)

                // 내가 이미 그 좋아요를 눌렀는지
                response.data.recommend.map(recommend => {
                    // userId는 localStorage.getItem('userId'), 즉 나 자신
                    // like를 누른 많은 유저 정보들 중 나 자신이 있다면
                    if(recommend.userId === props.userId) {
                        setRecommendAction('recommend')
                    }
                })
            } else {
                alert('Recommend 대한 정보를 가져오지 못했습니다. ')
            }
        })


    }, [])


    const onRecommend = () => {

        if(RecommendAction === null) {
            
            Axios.post('/api/recommend/saveOpinionRecommend', variable)
            .then(response => {
                if(response.data.success) {
                    setRecommend(Recommend + 1)
                    setRecommendAction('recommend')

                }else {
                    alert('추천하지 못했습니다.')
                }
            })

        }

    }



    return (
        <div>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                        style={{ fontSize: "200%", color: "#f4bf4e" }}
                        theme={RecommendAction === 'recommend' ? 'filled' : 'outlined'}
                        onClick={onRecommend}
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto'}} > {Recommend} </span>
            </span>&nbsp;&nbsp;


        </div>
    )
}

export default Recommend