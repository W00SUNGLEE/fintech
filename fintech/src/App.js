import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArrayMap from './components/ArrayMap'
import AxiosTest from './page/AxiosTest';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Welcome/>}></Route>
        <Route path="/b" element={<ArrayMap/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
