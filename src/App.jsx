import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ViewPanel from './views/ViewPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ViewPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
