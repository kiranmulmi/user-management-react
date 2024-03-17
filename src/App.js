import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import UserManagement from "./pages/UserManagement";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/user-management" element={<UserManagement/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
