import React, { useEffect, useState } from 'react'
import { Tooltip, Icon } from 'antd';
import Axios from 'axios';

function Recommend(props) {
    
    const [Recommend, setRecommend] = useState(0)
    const [RecommendAction, setRecommendAction] = useState(null)

    let variable = { } 

    if(props.Pros) {
        variable = { userId: props.userId, ProsId: props.ProsId } 
    } else if(props.Cons) {
        variable = { userId: props.userId, ConsId: props.ConsId } 
    } else if(props.Discussion) {
        variable = { userId: props.userId, discussionId: props.discussionId } 
    }

    useEffect(() => {

        if(props.Discussion) {
            Axios.post('/api/recommend/getDiscussionRecommend', variable) 
            .then(response => {
                if(response.data.success) {
                    setRecommend(response.data.recommend.length)
    
                    response.data.recommend.map(recommend => {
                        if(recommend.userId === props.userId) {
                            setRecommendAction('recommend')
                        }
                    })
                } else {
                    alert('Recommend 대한 정보를 가져오지 못했습니다. ')
                }
            })
        } else {
            Axios.post('/api/recommend/getOpinionRecommend', variable) 
            .then(response => {
                if(response.data.success) {
                    setRecommend(response.data.recommend.length)
    
                    response.data.recommend.map(recommend => {
                        if(recommend.userId === props.userId) {
                            setRecommendAction('recommend')
                        }
                    })
                } else {
                    alert('Recommend 대한 정보를 가져오지 못했습니다. ')
                }
            })
    
        }
        

    }, [])


    const onRecommend = () => {

        if(RecommendAction === null) {
            if(props.Discussion) {

                Axios.post('/api/recommend/saveDiscussionRecommend', variable)
                .then(response => {
                    if(response.data.success) {
                        setRecommend(Recommend + 1)
                        setRecommendAction('recommend')
    
                    }else {
                        alert('추천하지 못했습니다.')
                    }
                })
    
            } else {

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
            
        } else {
            if(props.Discussion) {

                Axios.post('/api/recommend/unDiscussionRecommend', variable)
                .then(response => {
                if(response.data.success) {

                    setRecommend(Recommend - 1)
                    setRecommendAction(null)

                }else {
                    alert('추천을 취소하지 못했습니다.')
                }
            })

            } else {

                Axios.post('/api/recommend/unOpinionRecommend', variable)
                .then(response => {
                if(response.data.success) {

                    setRecommend(Recommend - 1)
                    setRecommendAction(null)

                }else {
                    alert('추천을 취소하지 못했습니다.')
                }
            })

            }
            

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