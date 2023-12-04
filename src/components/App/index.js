import './index.css';
import Navbar from '../../common/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import Rooms from '../Rooms';
import Login from '../Login';
import Signup from '../Signup';
// import Admin from '../UpdateRooms';
import NoFound from '../NoFound';
import AddRoom from '../AddRoom';
import UpdateRooms from '../UpdateRooms';
import UpdateRoom from '../UpdateRoom';
import Bookings from '../Bookings';
// import Footer from '../Footer';
import About from '../About';
import ContactUs from '../ContactUs';

function App() {

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='app-container'>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {isLoggedIn === 'admin' && (
              <>
                <Route path="/addroom" element={<AddRoom />} />
                <Route path="/updateroom" element={<UpdateRooms />} />
                <Route path="/update/:roomId" element={<UpdateRoom />} />
                <Route path="/bookings" element={<Bookings />} />
              </>
            )}
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NoFound />}></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
