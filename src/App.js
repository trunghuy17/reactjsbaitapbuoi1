import logo from './logo.svg';
import './App.css';
import DemoFunction from './Components/DemoComponent/DemoFunction';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './Components/Databinding/Databinding';
import BaiTapThucHanhLayout from './Components/BaiTapLayoutComponent/BaiTapThucHanhLayout';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout/> */}
    {/* <Databinding/> */}
    <BaiTapThucHanhLayout/>
    </div>
  );
}

export default App;
