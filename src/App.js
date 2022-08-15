import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import Reviews from './Pages/Dashboard/Reviews/Reviews';

function App() {
  return (
    <div className="App px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='/dashboard/review' element={<Reviews></Reviews>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
