import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Guesthome from './components/Guesthome';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Signup from './components/Signup';
import About from './components/About';
import Shop from './components/Shop';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Guesthome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/fpass" element={<ForgetPassword />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
