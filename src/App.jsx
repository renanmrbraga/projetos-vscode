import React, { useEffect, useState } from 'react';

function App() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    window.api.getProjetos().then(setProjetos).catch(console.error);
  }, []);

  const abrirProjeto = (nome) => {
    window.api.abrirProjeto(nome)
      .then((res) => {
        if (!res.success) alert(`Erro ao abrir: ${res.error}`);
      })
      .catch(console.error);
  };

  return (
    <div className="container">
      <h1>Projetos Locais</h1>
      <div className="grid">
        {projetos.map((nome) => (
          <button key={nome} onClick={() => abrirProjeto(nome)}>
            {nome}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
