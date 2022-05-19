import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Form } from './pages/Form';
import { Userlist } from './pages/Userlist';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const App = () => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);


  const navigate = useNavigate();
  const userSearch = (email, password) => {
    let userFilter = tasks.data.filter(user => user.email === email && user.first_name === password)

    if (userFilter.length !== 0) {
      toast.success(`Login successful.`)
      navigate("/pages/Userlist")
      setTasks([...tasks, {
        avatar: userFilter.avatar,
        email: userFilter.email,
        first_name: userFilter.first_name,
        last_name: userFilter.last_name,
      }]);
    } else {
      toast.error("Username or password is wrong.")
    }
  }


  return (
    <>
      <ToastContainer position='bottom-right' />
      <Routes>
        <Route path="/" element={<Form userSearch={userSearch} />} />
        <Route path="/pages/Userlist" element={<Userlist usersList={tasks.data} />} />
      </Routes>
    </>
  );
}

export default App;
