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
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';

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
        <Route path="/*" element={<NotFound />} />

        {/* Private Routes */}
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/browse-tools' element={<RequireAuth><BrowseTools /></RequireAuth>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment /></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >

          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddAReview />}></Route>

          {/* Admin routes */}
          <Route path="make-admin" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddAProduct /></RequireAdmin>}></Route>
          <Route path="manage-tools" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path="manage-orders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>

        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
