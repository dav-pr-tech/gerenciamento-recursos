import React, { useState } from 'react';
import './App.css';

import AvaliacaoDesempenho from './components/AvaliacaoDesempenho';
import FuncoesResponsabilidades from './components/FuncoesResponsabilidades';
import GerenciamentoEquipe from './components/GerenciamentoEquipe';
import IdentificacaoRecursos from './components/IdentificacaoRecursos';
import MotivacaoEngajamento from './components/MotivacaoEngajamento';
import Organograma from './components/Organograma';
import RecrutamentoSelecao from './components/RecrutamentoSelecao';
import TreinamentoCapacitacao from './components/TreinamentoCapacitacao';

function App() {
  const [escopo, setEscopo] = useState({
    organograma: [],
    funcoesResponsabilidades: [],
    identificacaoRecursos: [],
    recrutamentoSelecao: [],
    treinamentoCapacitacao: [],
    motivacaoEngajamento: [],
    gerenciamentoEquipe: [],
    avaliacaoDesempenho: []
  });

  const salvarJSON = () => {
    const jsonEscopo = JSON.stringify(escopo);
    const blob = new Blob([jsonEscopo], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gerenciamento-de-recursos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const carregarJSON = (event) => {
    const file = event.target.files[0];
    if (!file) return; // Caso nenhum arquivo seja selecionado, não faz nada

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setEscopo(content);
      } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
        alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
      }
    };
    fileReader.readAsText(file);
  };

  const handleUpdate = (section, data) => {
    setEscopo(prevEscopo => ({
      ...prevEscopo,
      [section]: data
    }));
  };

  return (
    <div className="App">
      <h1>Projeto de Gerenciamento de Recursos</h1>
      <Organograma
        data={escopo.organograma}
        updateData={data => handleUpdate('organograma', data)}
      />
      <FuncoesResponsabilidades
        data={escopo.funcoesResponsabilidades}
        updateData={data => handleUpdate('funcoesResponsabilidades', data)}
      />
      <IdentificacaoRecursos
        data={escopo.identificacaoRecursos}
        updateData={data => handleUpdate('identificacaoRecursos', data)}
      />
      <RecrutamentoSelecao
        data={escopo.recrutamentoSelecao}
        updateData={data => handleUpdate('recrutamentoSelecao', data)}
      />
      <TreinamentoCapacitacao
        data={escopo.treinamentoCapacitacao}
        updateData={data => handleUpdate('treinamentoCapacitacao', data)}
      />
      <MotivacaoEngajamento
        data={escopo.motivacaoEngajamento}
        updateData={data => handleUpdate('motivacaoEngajamento', data)}
      />
      <GerenciamentoEquipe
        data={escopo.gerenciamentoEquipe}
        updateData={data => handleUpdate('gerenciamentoEquipe', data)}
      />
      <AvaliacaoDesempenho
        data={escopo.avaliacaoDesempenho}
        updateData={data => handleUpdate('avaliacaoDesempenho', data)}
      />
      <div>
        <button onClick={salvarJSON}>Salvar como JSON</button>
        <label htmlFor="uploadJson">
          <input
            id="uploadJson"
            type="file"
            style={{ display: 'none' }}
            onChange={carregarJSON}
          />
          <button type="button" onClick={() => document.getElementById('uploadJson').click()}>
            Carregar JSON
          </button>
        </label>
      </div>
    </div>
  );
}

export default App;
