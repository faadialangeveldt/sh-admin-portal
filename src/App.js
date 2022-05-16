import SignIn from "./components/SignIn";
import AdminPage from "./components/Admin/Index"

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}/> 
        <Route path="admin" element={<AdminPage />}/> 
      
      
      </Routes>
     
    </div>
  );
}

export default App;
