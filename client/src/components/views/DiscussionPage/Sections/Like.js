import React, { useEffect, useState } from 'react'
import { Tooltip, Icon } from 'antd';
import Axios from 'axios';

function Like(props) {
    
    const [Likes, setLikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)

    let variable = { userId: props.userId, ConsId: props.ConsId, ProsId: props.ProsId}


    useEffect(() => {

        Axios.post('/api/saveOpinionRecommend', variable) 
        .then(response => {
            if(response.data.success) {
                
                // 얼마나 많은 좋아요를 받았는지
                setLikes(response.data.likes.length)

                // 내가 이미 그 좋아요를 눌렀는지
                response.data.likes.map(like => {
                    // userId는 localStorage.getItem('userId'), 즉 나 자신
                    // like를 누른 많은 유저 정보들 중 나 자신이 있다면
                    if(like.userId === props.userId) {
                        setLikeAction('liked')
                    }
                })
            } else {
                alert('Likes에 대한 정보를 가져오지 못했습니다. ')
            }
        })


    }, [])


    const onLike = () => {

        if(LikeAction === null) {
            
            Axios.post('/api/opinionrecommend/recommend', variable)
            .then(response => {
                if(response.data.success) {

                    setLikes(Likes + 1)
                    setLikeAction('liked')

                }else {
                    alert('Like를 올리지 못했습니다.')
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
                        theme={LikeAction === 'liked' ? 'filled' : 'outlined'}
                        onClick={onLike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto'}} > {Likes} </span>
            </span>&nbsp;&nbsp;


        </div>
    )
}

export default Like