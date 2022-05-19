import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArrayMap from './components/ArrayMap'
import AxiosTest from './page/AxiosTest';
import NewsApiPage from './page/NewsApiPage';
import AuthPage from './page/AuthPage';
import AuthResultPage from './page/AuthResultPage';
import MainPage from './page/MainPage';
import BalancePage from './page/BalancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Welcome/>}></Route>
        <Route path="/b" element={<ArrayMap/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
        <Route path='/newsApiPage' element={<NewsApiPage/>}></Route>
        <Route path='' element={<AuthPage/>}></Route>
        <Route path='/authResult' element={<AuthResultPage/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path="balance" element={<BalancePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
