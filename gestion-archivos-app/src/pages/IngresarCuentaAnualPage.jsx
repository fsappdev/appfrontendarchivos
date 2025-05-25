import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IngresarCuentaAnualPage = () => {
  const tiposDocumento = [
    { id: 'balanceGeneral', label: 'Balance General Anual' },
    { id: 'estadoResultados', label: 'Estado de Resultados' },
    { id: 'memoriaAnual', label: 'Memoria Anual Descriptiva' },
    { id: 'informeAuditoria', label: 'Informe de Auditoría Externa' },
    { id: 'actaDirectorio', label: 'Acta de Directorio (Aprobación Cuentas)' }
  ];

  const [documentosSeleccionados, setDocumentosSeleccionados] = useState({});
  const [ubicacion, setUbicacion] = useState({
    pasillo: '',
    estante: '',
    columna: '',
    fila: ''
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDocumentosSeleccionados(prev => ({ ...prev, [name]: checked }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUbicacion(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const documentosGuardar = Object.entries(documentosSeleccionados)
      .filter(([, value]) => value) // Solo necesitamos 'value' aquí
      .map(([key]) => key); // Solo necesitamos 'key' aquí

    if (documentosGuardar.length === 0) {
      alert('Por favor, seleccione al menos un documento.');
      return;
    }
    if (!ubicacion.pasillo || !ubicacion.estante || !ubicacion.columna || !ubicacion.fila) {
      alert('Por favor, complete todos los campos de ubicación.');
      return;
    }

    console.log('Guardando documentos de Cuenta Anual:');
    console.log('Documentos:', documentosGuardar);
    console.log('Ubicación:', ubicacion);
    alert('Documentos de Cuenta Anual guardados (ver consola para detalles).');
    // Aquí iría la lógica para enviar al backend o almacenar localmente
    setDocumentosSeleccionados({});
    setUbicacion({ pasillo: '', estante: '', columna: '', fila: '' });
  };

  return (
    <div>
      <Link to="/" className="link-volver">‹ Volver a Inicio</Link>
      <h2 className="mb-4 mt-3">Ingresar Archivos de Cuenta Anual</h2>
      <form onSubmit={handleSubmit}>
        <div className="card mb-4">
          <div className="card-header">
            Seleccione los documentos recibidos:
          </div>
          <div className="card-body">
            {tiposDocumento.map(doc => (
              <div className="form-check mb-3" key={doc.id}> {/* Aumentado mb */}
                <input
                  className="form-check-input-neumorphic"
                  type="checkbox"
                  name={doc.id}
                  id={`doc-${doc.id}`}
                  checked={!!documentosSeleccionados[doc.id]}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label-neumorphic ms-2" htmlFor={`doc-${doc.id}`}> {/* Añadido ms-2 */}
                  {doc.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            Ubicación de Archivo Físico:
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="pasillo" className="form-label">Pasillo</label>
                <input type="text" className="form-control form-control-neumorphic" id="pasillo" name="pasillo" value={ubicacion.pasillo} onChange={handleInputChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="estante" className="form-label">Estante</label>
                <input type="text" className="form-control form-control-neumorphic" id="estante" name="estante" value={ubicacion.estante} onChange={handleInputChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="columna" className="form-label">Columna</label>
                <input type="text" className="form-control form-control-neumorphic" id="columna" name="columna" value={ubicacion.columna} onChange={handleInputChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="fila" className="form-label">Fila</label>
                <input type="text" className="form-control form-control-neumorphic" id="fila" name="fila" value={ubicacion.fila} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-neumorphic btn-neumorphic-primary">Guardar Entrada</button>
      </form>
    </div>
  );
};

export default IngresarCuentaAnualPage;
