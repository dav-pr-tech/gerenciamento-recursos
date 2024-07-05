import React, { useEffect, useState } from 'react';

const GerenciamentoEquipe = ({ data, updateData }) => {
  const [comunicacao, setComunicacao] = useState(data.comunicacao || '');
  const [frequenciaReunioes, setFrequenciaReunioes] = useState(data.frequenciaReunioes || '');

  useEffect(() => {
    // Evitar chamadas desnecessárias para updateData
    if (data.comunicacao !== comunicacao ||
        data.frequenciaReunioes !== frequenciaReunioes) {
      updateData({ 
        comunicacao, 
        frequenciaReunioes 
      });
    }
  }, [comunicacao, frequenciaReunioes, data, updateData]);

  return (
    <div className="section">
      <h2>Gerenciamento da Equipe</h2>

      <div>
        <label>Canais e Métodos de Comunicação:</label>
        <textarea 
          value={comunicacao} 
          onChange={(e) => setComunicacao(e.target.value)} 
        />
      </div>

      <div>
        <label>Frequência das Reuniões de Equipe:</label>
        <textarea 
          value={frequenciaReunioes} 
          onChange={(e) => setFrequenciaReunioes(e.target.value)} 
        />
      </div>

      <div className="results">
        <h3>Gerenciamento da Equipe:</h3>
        <p>Canais e Métodos de Comunicação: {comunicacao}</p>
        <p>Frequência das Reuniões de Equipe: {frequenciaReunioes}</p>
      </div>
    </div>
  );
}

export default GerenciamentoEquipe;
