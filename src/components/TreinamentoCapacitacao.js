import React, { useEffect, useState } from 'react';

const TreinamentoCapacitacao = ({ data, updateData }) => {
  const [programas, setProgramas] = useState(data.programas || [{ descricao: '', impacto: '' }]);

  const handleChange = (index, field, value) => {
    const newProgramas = [...programas];
    newProgramas[index][field] = value;
    setProgramas(newProgramas);
  };

  const addPrograma = () => {
    setProgramas([...programas, { descricao: '', impacto: '' }]);
  };

  useEffect(() => {
    // Evitar chamadas desnecessárias para updateData
    if (data.programas !== programas) {
      updateData({ programas });
    }
  }, [programas, data.programas, updateData]);

  return (
    <div className="section">
      <h2>Treinamento e Capacitação</h2>
      {programas.map((p, index) => (
        <div key={index}>
          <label>Descrição do Programa:</label>
          <textarea 
            value={p.descricao} 
            onChange={(e) => handleChange(index, 'descricao', e.target.value)} 
          />
          <label>Impacto Esperado:</label>
          <textarea 
            value={p.impacto} 
            onChange={(e) => handleChange(index, 'impacto', e.target.value)} 
          />
        </div>
      ))}
      <button onClick={addPrograma}>Adicionar Programa</button>
      <div className="results">
        <h3>Treinamento e Capacitação:</h3>
        {programas.map((r, index) => (
          <div key={index}>
            <p><strong>Descrição do Programa:</strong> {r.descricao}</p>
            <p><strong>Impacto Esperado:</strong> {r.impacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreinamentoCapacitacao;
