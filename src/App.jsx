import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Header from "./components/Header";
import Home from "./Pages/Home";
import CreateUser from "./Pages/CreateUser";
import EditUser from "./Pages/EditUser";
import UserDetails from "./Pages/UserDetails";


export default function App() {
return (
<BrowserRouter>
<Header />
<div className="max-w-5xl mx-auto p-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/create" element={<CreateUser />} />
<Route path="/edit/:id" element={<EditUser />} />
<Route path="/user/:id" element={<UserDetails />} />
</Routes>
</div>
</BrowserRouter>
);
}