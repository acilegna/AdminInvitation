import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './invitation.css'
  import ViewPanel from './views/ViewPanel';  
import ViewInvitation from './views/ViewInvitation'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
         {/*   <Route path="/*" element={<ViewPanel />} />   */}
       <Route path="/*" element={<ViewInvitation />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
