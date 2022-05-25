import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Private Routes */}
        <Route path="purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders />}></Route>
          <Route path="add-a-review" element={<AddAReview />}></Route>
          <Route path="my-profile" element={<MyProfile />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
