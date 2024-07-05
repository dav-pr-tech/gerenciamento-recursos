import React, { useEffect, useState } from 'react';

const AvaliacaoDesempenho = ({ data, updateData }) => {
  const [criterios, setCriterios] = useState(data.criterios || '');
  const [processoFeedback, setProcessoFeedback] = useState(data.processoFeedback || '');

  const handleCriteriosChange = (e) => {
    setCriterios(e.target.value);
  };

  const handleProcessoFeedbackChange = (e) => {
    setProcessoFeedback(e.target.value);
  };

  useEffect(() => {
    // Evitar chamadas desnecessárias para updateData
    if (data.criterios !== criterios ||
        data.processoFeedback !== processoFeedback) {
      updateData({ 
        criterios, 
        processoFeedback 
      });
    }
  }, [criterios, processoFeedback, data, updateData]);


  return (
    <div className="section">
      <h2>Avaliação de Desempenho</h2>

      <div>
        <label>Critérios de Avaliação:</label>
        <textarea 
          value={criterios} 
          onChange={handleCriteriosChange} 
        />
      </div>

      <div>
        <label>Processo de Feedback:</label>
        <textarea 
          value={processoFeedback} 
          onChange={handleProcessoFeedbackChange} 
        />
      </div>

      <div className="results">
        <h3>Avaliação de Desempenho:</h3>
        <p>Critérios de Avaliação: {criterios}</p>
        <p>Processo de Feedback: {processoFeedback}</p>
      </div>
    </div>
  );
}

export default AvaliacaoDesempenho;
