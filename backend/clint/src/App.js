
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './component/Navbar';
import AddSales from './component/AddSales';
import TotalRevenue from './component/TotalRevenue';
import TopSales from './component/TopSales';
import Login from './component/Login';
import Register from './component/Register'
import PrivateCommponet from './component/PrivateCommponet';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<PrivateCommponet/>}>
    
        <Route path="/" element={<AddSales/>}/>
        <Route path="/top_5_sales" element={<TopSales/>}/>
       <Route path="/today_total_revanue" element={<TotalRevenue/>}/>
        
      
        </Route>
     <Route path="/register" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
