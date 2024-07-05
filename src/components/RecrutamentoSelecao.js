import React, { useEffect, useState } from 'react';

const RecrutamentoSelecao = ({ data, updateData }) => {
  const [metodosRecrutamento, setMetodosRecrutamento] = useState(data.metodosRecrutamento || '');
  const [criteriosSelecao, setCriteriosSelecao] = useState(data.criteriosSelecao || '');
  const [processosEntrevista, setProcessosEntrevista] = useState(data.processosEntrevista || '');
  const [escolhaCandidatos, setEscolhaCandidatos] = useState(data.escolhaCandidatos || '');

  useEffect(() => {
    // Evitar chamadas desnecessárias para updateData
    if (data.metodosRecrutamento !== metodosRecrutamento ||
        data.criteriosSelecao !== criteriosSelecao ||
        data.processosEntrevista !== processosEntrevista ||
        data.escolhaCandidatos !== escolhaCandidatos) {
      updateData({ 
        metodosRecrutamento, 
        criteriosSelecao, 
        processosEntrevista, 
        escolhaCandidatos 
      });
    }
  }, [metodosRecrutamento, criteriosSelecao, processosEntrevista, escolhaCandidatos, data, updateData]);

  return (
    <div className="section">
      <h2>Recrutamento e Seleção</h2>

      <div>
        <label>Métodos de Recrutamento:</label>
        <input 
          type="text" 
          value={metodosRecrutamento} 
          onChange={(e) => setMetodosRecrutamento(e.target.value)} 
        />
      </div>

      <div>
        <label>Critérios de Seleção:</label>
        <textarea 
          value={criteriosSelecao} 
          onChange={(e) => setCriteriosSelecao(e.target.value)} 
        />
      </div>

      <div>
        <label>Processos de Entrevista:</label>
        <textarea 
          value={processosEntrevista} 
          onChange={(e) => setProcessosEntrevista(e.target.value)} 
        />
      </div>

      <div>
        <label>Escolha dos Candidatos:</label>
        <input 
          type="text" 
          value={escolhaCandidatos} 
          onChange={(e) => setEscolhaCandidatos(e.target.value)} 
        />
      </div>

      {/* Exibição dos dados */}
      <div className="results">
        <h3>Recrutamento e Seleção:</h3>
        <p>Métodos de Recrutamento: {metodosRecrutamento}</p>
        <p>Critérios de Seleção: {criteriosSelecao}</p>
        <p>Processos de Entrevista: {processosEntrevista}</p>
        <p>Escolha dos Candidatos: {escolhaCandidatos}</p>
      </div>
    </div>
  );
}

export default RecrutamentoSelecao;
