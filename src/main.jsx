import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";;
import App from './App.jsx'
import Homepage from "../src/component/Main/Homepage/Homepage.jsx"
import Control from "../src/component/Main/Control/Control.jsx"
import Infor from "../src/component/Main/Infor/Infor.jsx"
import Contact from "../src/component/Main/Contact/Contact.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="control" element={<Control />} />
        <Route path="infor" element={<Infor />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
