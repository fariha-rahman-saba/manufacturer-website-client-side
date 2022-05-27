import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
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
import NotFound from './Pages/NotFound';
import MyPortfolio from './Pages/MyPortfolio';
import BrowseTools from './Pages/BrowseTools';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import Payment from './Pages/Dashboard/Payment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/addProduct" element={<AddAProduct />}></Route>
        <Route path="/*" element={<NotFound />} />

        {/* Private Routes */}
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/browse-tools' element={<RequireAuth><BrowseTools /></RequireAuth>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment /></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddAReview />}></Route>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>

        </Route>

        {/* Admin Routes */}
        {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> */}
        {/* <Route path="users" element={<RequireAdmin><></RequireAdmin>}></Route> */}
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
