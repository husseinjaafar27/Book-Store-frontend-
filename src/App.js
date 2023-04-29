import { Routes, Route } from "react-router-dom";

import AddBook from "./components/Books/AddBook";
import Navbar from "./components/NavBar/NavBar";
import Books from "./components/Books/Books";
import RegisterUser from "./components/users/RegisterUser";
import LoginUser from "./components/users/LoginUser";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Users from "./components/users/Users";
import BookDetail from "./components/Books/BookDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginUser />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/user-update" element={<UpdateProfile />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/book/:id" element={<BookDetail />} />
        <Route exact path="/addbook" element={<AddBook />} />
        <Route exact path="/register" element={<RegisterUser />} />
      </Routes>
    </>
  );
}

export default App;
