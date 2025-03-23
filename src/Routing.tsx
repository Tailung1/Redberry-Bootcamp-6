import { Route, Routes } from "react-router-dom";
import App from "./App";
import Personal from "./components/Personal";
import Experince from "./components/Experince";
import Education from "./components/Education";
import Cv from "./components/Cv";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/personal' element={<Personal />} />
      <Route path='/personal/experince' element={<Experince />} />
      <Route path='/personal/experince/education' element={<Education />} />
      <Route path='/personal/experince/education/cv' element={<Cv />} />
    </Routes>
  );
}
