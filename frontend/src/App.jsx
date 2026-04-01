import { useState, useEffect } from 'react';
import './App.css'; // <-- Importando o visual bonitão!

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('Pendente');
  const [dataVencimento, setDataVencimento] = useState('');
  const [idEmEdicao, setIdEmEdicao] = useState(null);

  const carregarTarefas = () => {
    fetch('http://localhost:8080/api/tarefas')
      .then(resposta => resposta.json())
      .then(dados => setTarefas(dados))
      .catch(erro => console.error("Erro ao buscar tarefas:", erro));
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const salvarTarefa = (evento) => {
    evento.preventDefault();
    const tarefaDados = { titulo, descricao, status, dataVencimento };
    const url = idEmEdicao ? `http://localhost:8080/api/tarefas/${idEmEdicao}` : 'http://localhost:8080/api/tarefas';
    const metodo = idEmEdicao ? 'PUT' : 'POST';

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefaDados)
    }).then(() => {
      carregarTarefas();
      limparFormulario();
    });
  };

  const limparFormulario = () => {
    setTitulo('');
    setDescricao('');
    setStatus('Pendente');
    setDataVencimento('');
    setIdEmEdicao(null);
  };

  const deletarTarefa = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      fetch(`http://localhost:8080/api/tarefas/${id}`, { method: 'DELETE' }).then(() => carregarTarefas());
    }
  };

  const editarTarefa = (tarefa) => {
    setTitulo(tarefa.titulo);
    setDescricao(tarefa.descricao);
    setStatus(tarefa.status);
    setDataVencimento(tarefa.dataVencimento);
    setIdEmEdicao(tarefa.id);
  };

  // Define a cor da etiquetazinha de status
  const getBadgeClass = (statusAtual) => {
    if (statusAtual === 'Concluída') return 'badge badge-concluida';
    if (statusAtual === 'Em Andamento') return 'badge badge-andamento';
    return 'badge badge-pendente';
  };

  return (
    <div className="container">
      <h1 className="titulo-principal">Gestão de Tarefas</h1>
      
      <div className="card-formulario">
        <h3>{idEmEdicao ? '✏️ Alterar Tarefa' : '✨ Nova Tarefa'}</h3>
        <form onSubmit={salvarTarefa}>
          <input type="text" className="input-estilizado" placeholder="Título da tarefa" value={titulo} onChange={e => setTitulo(e.target.value)} required />
          <textarea className="input-estilizado" placeholder="Descrição detalhada" value={descricao} onChange={e => setDescricao(e.target.value)} rows="3" />
          
          <div className="grupo-inputs">
            <select className="input-estilizado" value={status} onChange={e => setStatus(e.target.value)} style={{marginBottom: 0}}>
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
            <input type="date" className="input-estilizado" value={dataVencimento} onChange={e => setDataVencimento(e.target.value)} required style={{marginBottom: 0}} />
          </div>

          <div className="grupo-inputs" style={{ marginBottom: 0 }}>
            <button type="submit" className={`btn ${idEmEdicao ? 'btn-alerta' : 'btn-primario'}`}>
              {idEmEdicao ? 'Atualizar Tarefa' : 'Cadastrar Tarefa'}
            </button>
            {idEmEdicao && (
              <button type="button" onClick={limparFormulario} className="btn btn-secundario">Cancelar</button>
            )}
          </div>
        </form>
      </div>

      <h3>Minhas Tarefas</h3>
      <ul className="lista-tarefas">
        {tarefas.map(tarefa => (
          <li key={tarefa.id} className="item-tarefa">
            <div className="tarefa-info">
              <h4>
                {tarefa.titulo} 
                <span className={getBadgeClass(tarefa.status)}>{tarefa.status}</span>
              </h4>
              <p>{tarefa.descricao}</p>
              <small>📅 Vence em: {tarefa.dataVencimento.split('-').reverse().join('/')}</small>
            </div>
            <div className="acoes-tarefa">
              <button onClick={() => editarTarefa(tarefa)} className="btn btn-acao btn-editar">Editar</button>
              <button onClick={() => deletarTarefa(tarefa.id)} className="btn btn-acao btn-excluir">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      
      {tarefas.length === 0 && <p style={{ textAlign: 'center', color: '#6b7280' }}>Nenhuma tarefa cadastrada ainda. Que tal criar uma?</p>}
    </div>
  );
}

export default App;