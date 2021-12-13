import React, { useState } from 'react';

const EventPractice = () => {
    const [ message, setMessage ] = useState('');
    const [ user, setUser ] = useState('');
    const onChangeMessage = e => setMessage(e.target.value);
    const onChangeUser = e => setUser(e.target.value);

    const onClickRe = () => {
        alert(user+": "+message);
        setMessage('');
        setUser('');
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter')
            onClickRe();
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="user"
                placeholder="아무거나 입력해 보세요"
                value={user}
                onChange={onChangeUser}
                />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
                />

            <button onClick={onClickRe}>확인</button>

        </div>
    )
}

export default EventPractice;