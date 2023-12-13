import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';



const List = () => {
    const [postList, setPostList] = useState([]); //리스트이기 때문에 배열로 설정


    useEffect(() => {
        axios
            .post('/api/post/list') // 작성된 경로로 보내기
            .then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    setPostList([...response.data.postList]); //postlist에 저장
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <div className="login__header">
                <h3>List</h3>
                <p>글을 봅시다📋</p>
            </div>

            <div className='list__wrap'>
                {postList.map((post, key) => ( //postlist로 뿌려주기
                    <div className='list' key={key}>
                        <span className='cate'>교육</span>
                        <Link to={`/detail/${post.postNum}`}><h3 className='title'>{post.title}</h3></Link>
                        <Link to={`/detail/${post.postNum}`}><p className='desc'>{post.content}</p></Link>
                        <div className='author'>작가</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List