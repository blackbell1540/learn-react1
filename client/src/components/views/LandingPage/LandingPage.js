import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

function LandingPage(props) {
    const onClickHandler = (event) => {
        axios.get('/api/users/logout').then(response => {
            if(response.data.success) {
                props.history.push('/login')
            } else {
                alert('로그아웃 실패');
            }
        })
    };
    useEffect(() => {
        axios.get('/api/hello').then(response => {console.log(response)} )
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage)