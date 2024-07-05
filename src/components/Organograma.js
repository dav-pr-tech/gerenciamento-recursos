import React, { useEffect, useState } from 'react';

const Organograma = ({ data = [], updateData }) => {
  const initialNodes = data.length > 0 ? data : [{ id: 1, name: '', parent: null }];
  const [nodes, setNodes] = useState(initialNodes);
  const [counter, setCounter] = useState(initialNodes.length + 1);

  useEffect(() => {
    // Atualiza os dados no pai quando houver mudanças em `nodes`
    updateData(nodes);
  }, [nodes, updateData]);

  const handleChange = (id, field, value) => {
    const newNodes = nodes.map(node => node.id === id ? { ...node, [field]: value } : node);
    setNodes(newNodes);
  };

  const addNode = () => {
    const newNode = { id: counter, name: '', parent: null };
    setNodes([...nodes, newNode]);
    setCounter(counter + 1);
  };

  const renderTree = (parentId) => {
    const children = nodes.filter(node => node.parent === parentId);
    if (children.length === 0) return null;

    return (
      <ul>
        {children.map(child => (
          <li key={child.id}>
            <div className="node">
              {child.name}
            </div>
            {renderTree(child.id)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="section">
      <h2>Estrutura Organizacional do Projeto</h2>
      <h3>Organograma Hierárquico</h3>
      {nodes.map((node, index) => (
        <div key={node.id} className="input-group">
          <label>Nome:</label>
          <input 
            type="text" 
            value={node.name} 
            onChange={(e) => handleChange(node.id, 'name', e.target.value)} 
          />
          <label>Superior:</label>
          <select 
            value={node.parent || ''} 
            onChange={(e) => handleChange(node.id, 'parent', e.target.value ? parseInt(e.target.value) : null)}
          >
            <option value="">Nenhum</option>
            {nodes.filter(n => n.id !== node.id).map(n => (
              <option key={n.id} value={n.id}>{n.name || `Node ${n.id}`}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={addNode}>Adicionar Cargo</button>
      <h3>Organograma:</h3>
      <div className="organograma">
        {renderTree(null)}
      </div>
    </div>
  );
}

export default Organograma;
