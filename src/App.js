import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (

   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/inicio" element={<Home />} />
      <Route path="/series" element={<Series />} />
      <Route path="/comic" element={<Comic />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
