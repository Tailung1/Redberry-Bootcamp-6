import { Route, Routes } from "react-router-dom";
import App from "./App";
import Personal from "./components/Personal";
import Experince from "./components/Experince";
import Education from "./components/Education";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/personal' element={<Personal />} />
      <Route path='/personal/experince' element={<Experince />} />
      <Route path='/personal/experince/education' element={<Education />} />
    </Routes>
  );
}
