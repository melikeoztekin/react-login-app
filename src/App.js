import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Form } from './pages/Form';
import { Userlist } from './pages/Userlist';
import { useState } from 'react';

const App = () => {
  const [usersList, setUsersList] = useState([{
    id: 1,
    name_surname: "user 1",
    email: "user1@gmail.com",
    password: "123456"
  }, {
    id: 2,
    name_surname: "user 2",
    email: "user2@gmail.com",
    password: "123456"
  }, {
    id: 3,
    name_surname: "user 3",
    email: "user3@gmail.com",
    password: "123456"
  }, {
    id: 4,
    name_surname: "user 4",
    email: "user4@gmail.com",
    password: "123456"
  },])
  const navigate = useNavigate();
  const userSearch = (email, password) => {
    let userFilter = usersList.filter(user => user.email === email && user.password === password)
    if (userFilter.length !== 0) {
      alert("giriş başarılı")

      navigate("/pages/Userlist")
      setTimeout(() => {
        setUsersList([...usersList, {
          id: usersList.length + 1,
          name_surname: userFilter[0].name_surname,
          email: userFilter[0].email,
          password: userFilter[0].password
        }])
      }, 1000);

    } else {
      alert("kullanıcı adı şifre bulunamadı")
    }
  }



  return (
    <>
      <Routes>
        <Route path="/" element={<Form userSearch={userSearch} />} />
        <Route path="/pages/Userlist" element={<Userlist usersList={usersList} />} />
      </Routes>
    </>
  );
}

export default App;
