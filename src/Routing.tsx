import { Route, Routes } from "react-router-dom";
import App from "./App";
import Personal from "./components/Personal";
import Experince from "./components/Experince";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/personal' element={<Personal />} />
      <Route path="/personal/experince" element ={<Experince/>} />
    </Routes>
  );
}
