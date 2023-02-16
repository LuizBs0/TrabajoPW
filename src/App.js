import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./vistas/inicio.jsx";
import Categorias from "./vistas/categorias.jsx";
import Carrito from "./vistas/carrito.jsx";
import { useState } from "react";
import Platos from "./vistas/platos.jsx";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio/" element={<Inicio currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex}/>} />
        <Route path="/categorias/" element={<Categorias currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex}/>} />
        <Route path="/carrito/" element={<Carrito currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex}/>} />
        <Route path="/platos/:nombre/:resId" element={<Platos currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex}/>} />
        <Route path="*" element={<Navigate to="/inicio/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
