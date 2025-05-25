import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const cardStyle = {
    minHeight: '150px', // Para asegurar que todas las cards tengan una altura similar
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <div>
      <h1 className="mb-4 text-center">Sistema de Gestión Documental</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardStyle}>
              <h5 className="card-title">Ingresar Archivos de Cuenta Anual</h5>
            </div>
            <div className="card-footer text-center">
              <Link to="/ingresar-cuenta-anual" className="btn btn-primary">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardStyle}>
              <h5 className="card-title">Ingresar Archivos de Legajo</h5>
            </div>
            <div className="card-footer text-center">
              <Link to="/ingresar-legajo" className="btn btn-primary">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardStyle}>
              <h5 className="card-title">Ingresar Archivos de Control Documental</h5>
            </div>
            <div className="card-footer text-center">
              <Link to="/ingresar-control-documental" className="btn btn-primary">Acceder</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body" style={cardStyle}>
              <h5 className="card-title">Buscar Ubicación</h5>
            </div>
            <div className="card-footer text-center">
              <Link to="/buscar-ubicacion" className="btn btn-secondary">Acceder</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
