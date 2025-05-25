import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de ejemplo (simulando lo que podría venir de un estado global o backend)
const datosAlmacenados = [
  { id: 'balanceGeneral', tipo: 'Cuenta Anual', nombre: 'Balance General Anual', ubicacion: { pasillo: 'A1', estante: '03', columna: '01', fila: 'B' } },
  { id: 'contratoTrabajo', tipo: 'Legajo', nombre: 'Contrato de Trabajo Firmado', ubicacion: { pasillo: 'B2', estante: '01', columna: '05', fila: 'A' } },
  { id: 'politicaCalidad', tipo: 'Control Documental', nombre: 'Política de Calidad Vigente', ubicacion: { pasillo: 'C3', estante: '02', columna: '02', fila: 'C' } },
  { id: 'memoriaAnual', tipo: 'Cuenta Anual', nombre: 'Memoria Anual Descriptiva', ubicacion: { pasillo: 'A1', estante: '03', columna: '01', fila: 'C' } },
];

const BuscarUbicacionPage = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const handleInputChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setBusquedaRealizada(true);
    if (!terminoBusqueda.trim()) {
      setResultados([]);
      return;
    }
    const busquedaLower = terminoBusqueda.toLowerCase();
    const filtrados = datosAlmacenados.filter(doc =>
      doc.nombre.toLowerCase().includes(busquedaLower) ||
      doc.id.toLowerCase().includes(busquedaLower) ||
      doc.tipo.toLowerCase().includes(busquedaLower)
    );
    setResultados(filtrados);
  };

  return (
    <div>
      <Link to="/" className="link-volver">‹ Volver a Inicio</Link>
      <h2 className="mb-4 mt-3">Buscar Ubicación de Documento</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group input-group-neumorphic"> {/* Clase contenedora para input group */}
          <input
            type="text"
            className="form-control form-control-neumorphic"
            placeholder="Ingrese nombre, ID o tipo de documento a buscar..."
            value={terminoBusqueda}
            onChange={handleInputChange}
          />
          <button className="btn btn-neumorphic btn-neumorphic-primary" type="submit">Buscar</button>
        </div>
      </form>

      {busquedaRealizada && (
        resultados.length > 0 ? (
          <div className="card"> {/* Envolver resultados en una card */}
            <div className="card-header">Resultados de la búsqueda:</div>
            <ul className="list-group list-group-flush"> {/* list-group-flush para quitar bordes dentro de la card */}
              {resultados.map(doc => (
                <li className="list-group-item" style={{backgroundColor: 'var(--neumorphism-bg-color)', color: 'var(--neumorphism-text-color)'}} key={doc.id + doc.tipo}>
                  <strong>{doc.nombre}</strong> (Tipo: {doc.tipo})
                  <br />
                  <small>Ubicación: Pasillo {doc.ubicacion.pasillo}, Estante {doc.ubicacion.estante}, Columna {doc.ubicacion.columna}, Fila {doc.ubicacion.fila}</small>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se encontraron documentos que coincidan con su búsqueda.</p>
        )
      )}
    </div>
  );
};

export default BuscarUbicacionPage;
