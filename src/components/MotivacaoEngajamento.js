import React, { useEffect, useState } from 'react';

const MotivacaoEngajamento = ({ data, updateData }) => {
  const [estrategias, setEstrategias] = useState(data.estrategias || [{ estrategia: '', metodo: '' }]);

  const handleChange = (index, field, value) => {
    const newEstrategias = [...estrategias];
    newEstrategias[index][field] = value;
    setEstrategias(newEstrategias);
  };

  const addEstrategia = () => {
    setEstrategias([...estrategias, { estrategia: '', metodo: '' }]);
  };

  useEffect(() => {
    // Evitar chamadas desnecessárias para updateData
    if (data.estrategias !== estrategias) {
      updateData({ estrategias });
    }
  }, [estrategias, data.estrategias, updateData]);

  return (
    <div className="section">
      <h2>Motivação e Engajamento</h2>
      {estrategias.map((e, index) => (
        <div key={index}>
          <label>Estratégia:</label>
          <textarea 
            value={e.estrategia} 
            onChange={(event) => handleChange(index, 'estrategia', event.target.value)} 
          />
          <label>Método de Reconhecimento/Recompensa:</label>
          <textarea 
            value={e.metodo} 
            onChange={(event) => handleChange(index, 'metodo', event.target.value)} 
          />
        </div>
      ))}
      <button onClick={addEstrategia}>Adicionar Estratégia</button>
      <div className="results">
        <h3>Motivação e Engajamento:</h3>
        {estrategias.map((r, index) => (
          <div key={index}>
            <p><strong>Estratégia:</strong> {r.estrategia}</p>
            <p><strong>Método de Reconhecimento/Recompensa:</strong> {r.metodo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MotivacaoEngajamento;
