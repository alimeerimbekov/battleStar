import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import './styles/styles.scss'
import Streams from "./pages/Streams/Streams";
import Lending from "./pages/Lending/Lending";
import Support from "./pages/Support/Support";
import StreamView from "./pages/Streams/StreamView/StreamView";
import Cabinet from "./pages/Cabinet/Cabinet";
import UserCabinet from "./pages/UserCabinet/UserCabinet";
import Teams from "./pages/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/streams'} element={<Streams/>}/>
          <Route path={'/support'} element={<Support/>}/>
          <Route path={'/streamView'} element={<StreamView/>}/>
          <Route path={'/cabinet'} element={<Cabinet/>}/>
          <Route path={'/userCabinet'} element={<UserCabinet/>}/>
          <Route path={'/teams'} element={<Teams/>}/>
        </Route>
        <Route path={'/lending'} element={<Lending/>}/>
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/login'} element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
