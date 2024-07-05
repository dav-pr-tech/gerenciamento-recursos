import React, { useEffect, useState } from 'react';

const IdentificacaoRecursos = ({ data, updateData }) => {
  const [recursos, setRecursos] = useState(data || [{ papel: '', qualificacoes: '' }]);

  useEffect(() => {
    setRecursos(data);
  }, [data]);

  const handleChange = (index, field, value) => {
    const newRecursos = [...recursos];
    newRecursos[index][field] = value;
    setRecursos(newRecursos);
    updateData(newRecursos);
  };

  const addRecurso = () => {
    const newRecursos = [...recursos, { papel: '', qualificacoes: '' }];
    setRecursos(newRecursos);
    updateData(newRecursos);
  };

  return (
    <div className="section">
      <h2>Identificação de Recursos</h2>
      {recursos.map((r, index) => (
        <div key={index}>
          <label>Papel:</label>
          <input 
            type="text" 
            value={r.papel} 
            onChange={(e) => handleChange(index, 'papel', e.target.value)} 
          />
          <label>Qualificações:</label>
          <textarea 
            value={r.qualificacoes} 
            onChange={(e) => handleChange(index, 'qualificacoes', e.target.value)} 
          />
        </div>
      ))}
      <button onClick={addRecurso}>Adicionar Recurso</button>
      <div className="results">
        <h3>Recursos Identificados:</h3>
        {recursos.map((r, index) => (
          <div key={index}>
            <p><strong>Papel:</strong> {r.papel}</p>
            <p><strong>Qualificações:</strong> {r.qualificacoes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IdentificacaoRecursos;
