
import React from 'react';
import Landing from "./pages/landing";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard  from "./components/recruiter/pages/dashboard";
import Uploadresumes from "./components/recruiter/pages/uploadresumes";
import Resumelist from "./components/recruiter/pages/resumelist";
import Myaccount from "./components/recruiter/pages/myaccount";
import Subscriptions from "./components/recruiter/pages/subscriptions";
import Findtalents from "./components/recruiter/pages/findtalents";


const App = () => {
   return <div>
      <BrowserRouter>
        <Routes>
         <Route path="/">
            <Route index element={<Landing/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="uploadresumes" element={<Uploadresumes/>} />
            <Route path="resumelist" element={<Resumelist/>} />
            <Route path="myaccount" element={<Myaccount/>} />
            <Route path="subscriptions" element={<Subscriptions/>} />
            <Route path="findtalents" element={<Findtalents/>} />
         </Route>
       </Routes>
      </BrowserRouter>
   </div>
};
export default App;