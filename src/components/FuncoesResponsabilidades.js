import React, { useEffect, useState } from 'react';

const FuncoesResponsabilidades = ({ data, updateData }) => {
  const [funcoes, setFuncoes] = useState(data || [{ funcao: '', responsabilidade: '' }]);

  useEffect(() => {
    setFuncoes(data);
  }, [data]);

  const handleChange = (index, field, value) => {
    const newFuncoes = [...funcoes];
    newFuncoes[index][field] = value;
    setFuncoes(newFuncoes);
    updateData(newFuncoes);
  };

  const addFuncao = () => {
    const newFuncoes = [...funcoes, { funcao: '', responsabilidade: '' }];
    setFuncoes(newFuncoes);
    updateData(newFuncoes);
  };

  return (
    <div className="section">
      <h2>Funções e Responsabilidades</h2>
      {funcoes.map((f, index) => (
        <div key={index}>
          <label>Função:</label>
          <input 
            type="text" 
            value={f.funcao} 
            onChange={(e) => handleChange(index, 'funcao', e.target.value)} 
          />
          <label>Responsabilidade:</label>
          <textarea 
            value={f.responsabilidade} 
            onChange={(e) => handleChange(index, 'responsabilidade', e.target.value)} 
          />
        </div>
      ))}
      <button onClick={addFuncao}>Adicionar Função</button>
      <div className="results">
        <h3>Funções e Responsabilidades Adicionadas:</h3>
        {funcoes.map((f, index) => (
          <div key={index}>
            <p><strong>Função:</strong> {f.funcao}</p>
            <p><strong>Responsabilidade:</strong> {f.responsabilidade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FuncoesResponsabilidades;
