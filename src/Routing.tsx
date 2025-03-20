import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Personal from "./components/Personal";
import Experince from "./components/Experince";

export default function Routing() {
    
    const [image, setImage] = useState<null | string>(null);
    const [counter,setCounter]=useState<number>(0)
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route
        path='/personal'
        element={
          <Personal
            image={image}
            setImage={setImage}
            counter={counter}
            setCounter={setCounter}
          />
        }
      />
      <Route
        path='/personal/experince'
        element={<Experince image={image} counter={counter} setCounter={setCounter} />}
      />
    </Routes>
  );
}
