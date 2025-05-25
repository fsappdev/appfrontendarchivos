import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const cardBodyStyle = { // Renombrado para claridad
    minHeight: '120px', // Ajustado
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem' // Añadido padding
  };
  
  const cardFooterStyle = {
    background: 'transparent', // Para que tome el fondo de la card
    borderTop: '1px solid rgba(0,0,0,0.05)',
    padding: '1rem',
  }

  return (
    <div>
      <h1 className="mb-5 text-center display-5">Sistema de Gestión Documental</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title mb-0">Ingresar Archivos de Cuenta Anual</h5>
            </div>
            <div className="card-footer text-center" style={cardFooterStyle}>
              <Link to="/ingresar-cuenta-anual" className="btn btn-neumorphic btn-neumorphic-primary w-100">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title mb-0">Ingresar Archivos de Legajo</h5>
            </div>
            <div className="card-footer text-center" style={cardFooterStyle}>
              <Link to="/ingresar-legajo" className="btn btn-neumorphic btn-neumorphic-primary w-100">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title mb-0">Ingresar Archivos de Control Documental</h5>
            </div>
            <div className="card-footer text-center" style={cardFooterStyle}>
              <Link to="/ingresar-control-documental" className="btn btn-neumorphic btn-neumorphic-primary w-100">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title mb-0">Buscar Ubicación</h5>
            </div>
            <div className="card-footer text-center" style={cardFooterStyle}>
              <Link to="/buscar-ubicacion" className="btn btn-neumorphic btn-neumorphic-light w-100">Acceder</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
