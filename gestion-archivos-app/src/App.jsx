import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent.jsx';
import SidebarComponent from './components/SidebarComponent.jsx';
import HomePage from './pages/HomePage.jsx';
import IngresarCuentaAnualPage from './pages/IngresarCuentaAnualPage.jsx';
import IngresarLegajoPage from './pages/IngresarLegajoPage.jsx';
import IngresarControlDocumentalPage from './pages/IngresarControlDocumentalPage.jsx';
import BuscarUbicacionPage from './pages/BuscarUbicacionPage.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile && sidebarOpen) {
        // Mantener sidebar abierto en desktop si ya lo estaba
      } else if (mobile && sidebarOpen) {
        // Opcional: cerrar sidebar en cambio a móvil si estaba abierto, o dejarlo como está
        // setSidebarOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama inicial para setear el estado

    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);
  
  // Cierra el sidebar al cambiar de ruta en móviles
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location, isMobile, sidebarOpen]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavbarComponent toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <SidebarComponent isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div 
          className={`main-content container mt-3 ${sidebarOpen && !isMobile ? 'sidebar-open' : ''}`}
          style={{ flexGrow: 1, paddingTop: '70px' /* Aprox 56px navbar + un poco de margen */, paddingBottom: '1rem' }}
          onClick={isMobile && sidebarOpen ? toggleSidebar : undefined} // Para cerrar con overlay
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ingresar-cuenta-anual" element={<IngresarCuentaAnualPage />} />
            <Route path="/ingresar-legajo" element={<IngresarLegajoPage />} />
            <Route path="/ingresar-control-documental" element={<IngresarControlDocumentalPage />} />
            <Route path="/buscar-ubicacion" element={<BuscarUbicacionPage />} />
          </Routes>
        </div>
        {isMobile && sidebarOpen && <div className="main-content-overlay" onClick={toggleSidebar}></div>}
      </div>
    </div>
  );
}

export default App;
