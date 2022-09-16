import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './components/usersData/Users';
import SingleUser from './components/userId/SingleUser';

function App() {

  return (
    <>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<SingleUser />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
