package com.faculdade.gestaotarefas.repository;

import com.faculdade.gestaotarefas.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Essa interface herda do JpaRepository, o que nos dá os métodos de
// salvar, listar, deletar e buscar sem precisarmos digitar nenhum comando SQL
@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}