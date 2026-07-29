import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./invitation.css";
import ViewPanel from "./views/ViewPanel";
import ViewInvitation from "./views/ViewInvitation";
import Invitation from "./views/Invitation ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "./views/AudioContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <AudioProvider>
          <Routes>
            <Route path="/panel" element={<ViewPanel />} />
            <Route path="/ayb" element={<ViewInvitation />} />
            <Route path="/*" element={<Invitation />} />
            {/*     <Route path="/b" element={<Invitation />} />
             */}{" "}
            {/*   <Route path="/*" element={<Back />} />     */}
          </Routes>
        </AudioProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
