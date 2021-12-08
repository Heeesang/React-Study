import React, { useRef ,useState } from 'react';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: '노',
        email: 'dasdaad@gsm.hs.kr'
    },
    {
        id: 2,
        username: '곽',
        email: 'zmdas@gmail.com'
    },
    {
        id: 3,
        username: '진',
        email: 'lwladl@naver.com'
    }
]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      username:'',
      email:'',
    })

    console.log(nextId.current);
    nextId.current += 1;
  }
  return (
  <>
    <CreateUser 
        username={username}
        email={email} 
        onChange={onChange} 
        onCreate = {onCreate}
    />
    <UserList users={users}/>
  </>
  );
}

export default App;
