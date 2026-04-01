package com.faculdade.gestaotarefas.controller;

import com.faculdade.gestaotarefas.model.Tarefa;
import com.faculdade.gestaotarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas") // Define o endereço da API na web
@CrossOrigin(origins = "*")     // Libera o acesso para o React (Frontend) não ser bloqueado
public class TarefaController {

    // Injeta o repositório para usarmos o banco de dados aqui dentro
    @Autowired
    private TarefaRepository repository;

    // 1. LISTAGEM: Devolve todas as tarefas do banco
    @GetMapping
    public List<Tarefa> listarTodas() {
        return repository.findAll();
    }

    // 2. CONSULTA: Devolve uma única tarefa buscando pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(tarefa -> ResponseEntity.ok().body(tarefa))
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. CADASTRAMENTO: Recebe os dados e salva uma nova tarefa
    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return repository.save(tarefa);
    }

    // 4. ALTERAÇÃO: Busca pelo ID, altera os dados antigos e salva de novo
    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> atualizar(@PathVariable Long id, @RequestBody Tarefa tarefaAtualizada) {
        return repository.findById(id)
                .map(tarefa -> {
                    tarefa.setTitulo(tarefaAtualizada.getTitulo());
                    tarefa.setDescricao(tarefaAtualizada.getDescricao());
                    tarefa.setStatus(tarefaAtualizada.getStatus());
                    tarefa.setDataVencimento(tarefaAtualizada.getDataVencimento());
                    Tarefa atualizada = repository.save(tarefa);
                    return ResponseEntity.ok().body(atualizada);
                }).orElse(ResponseEntity.notFound().build());
    }

    // 5. EXCLUSÃO: Deleta a tarefa baseada no ID informado
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        return repository.findById(id)
                .map(tarefa -> {
                    repository.delete(tarefa);
                    return ResponseEntity.ok().<Void>build();
                }).orElse(ResponseEntity.notFound().build());
    }
}