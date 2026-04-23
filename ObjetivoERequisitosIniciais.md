# Gestão de Tarefas – Objetivo do Sistema e Requisitos Iniciais
Documento complementar à história do problema

**Finalidade do documento:**  
Registrar, após a etapa da história, o objetivo geral do sistema e um primeiro conjunto de requisitos funcionais, não funcionais, operacionais e de dados para um sistema de gestão de tarefas em equipes acadêmicas e profissionais.

---

## 1. Premissas adotadas

- O sistema será pensado para equipes que coordenam múltiplas tarefas em projetos pequenos ou médios.
- O uso principal será por pessoas com pouca familiaridade com ferramentas de gestão complexas.
- O projeto acadêmico poderá ser implementado com interface em React, backend em Java e persistência de dados em PostgreSQL.
- Os requisitos abaixo servem como ponto de partida e sofrerão refinamento posterior, conforme regras e particularidades das equipes.

---

## 2. Objetivo geral do sistema

Desenvolver um sistema de gestão de tarefas para pequenas equipes/projetos, capaz de organizar o registro, atribuição, acompanhamento e conclusão de atividades, facilitando o trabalho colaborativo, a visibilidade do andamento e a redução de esquecimentos/atrasos.

---

## 3. Objetivos específicos

- Permitir a criação, consulta e atualização de tarefas individuais e de grupo.
- Registrar responsáveis, prazos, prioridades e status para cada tarefa.
- Facilitar a atribuição de tarefas a membros específicos com rastreamento claro.
- Notificar responsáveis sobre prazos, alterações ou novas tarefas.
- Registrar comentários, anexos e histórico de alterações em cada tarefa.
- Viabilizar visão consolidada do andamento dos projetos para todos os envolvidos.
- Permitir ao responsável maior controle sobre atribuições e acompanhamento.
- Registrar tarefas concluídas e gerar relatórios simples de andamento e produtividade.

---

## 4. Escopo inicial do sistema

| Faixa de escopo           | Descrição                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------|
| Incluído no escopo        | Cadastro de usuários, projetos e tarefas; atribuição de responsabilidades; controle de status e prazos; comentários; notificações simples; relatório gerencial básico. |
| Incluído de forma simplificada | Anexo de arquivos, filtros por prioridade/status/projeto, exportação de relatório.      |
| Fora do escopo inicial    | Integração com outros sistemas corporativos, automações externas, BI avançado, controles financeiros detalhados. |

---

## 5. Requisitos funcionais iniciais

| Código | Descrição do requisito funcional                                                                              |
|--------|--------------------------------------------------------------------------------------------------------------|
| RF01   | O sistema deve permitir cadastrar projetos, tarefas e usuários da equipe.                                    |
| RF02   | O sistema deve permitir atribuir tarefas a um ou mais responsáveis.                                          |
| RF03   | O sistema deve registrar prazo, status, prioridade e descrição detalhada para cada tarefa.                   |
| RF04   | O sistema deve permitir consultar tarefas por projeto, responsável, status e data de entrega.                |
| RF05   | O sistema deve enviar notificações aos responsáveis ao receber nova tarefa ou ao se aproximar o prazo.       |
| RF06   | O sistema deve permitir comentários anexados a tarefas para comunicação interna.                             |
| RF07   | O sistema deve manter histórico de criação, alteração de status e conclusão de cada tarefa.                  |
| RF08   | O sistema deve gerar relatórios simples sobre tarefas em aberto, concluídas, atrasadas, por usuário/projeto. |
| RF09   | O sistema deve permitir anexar, de forma opcional, arquivos/documentos às tarefas.                           |
| RF10   | O sistema deve permitir visualizar o progresso geral de cada projeto/equipe.                                 |

---

## 6. Requisitos não funcionais iniciais

| Código | Descrição do requisito não funcional                                                                           |
|--------|---------------------------------------------------------------------------------------------------------------|
| RNF01  | A interface deve ser simples, clara e de fácil leitura, com botões visuais e poucos passos por operação.      |
| RNF02  | O sistema deve ser utilizável por pessoas com pouca experiência em software de gestão.                        |
| RNF03  | O sistema deve oferecer autenticação por usuário e senha, com perfis de acesso distintos onde necessário.     |
| RNF04  | Operações importantes devem ser registradas para auditoria básica.                                            |
| RNF05  | Deve garantir persistência das informações via banco de dados PostgreSQL e backup periódico.                  |
| RNF06  | O tempo de resposta das operações deve ser compatível com uso cotidiano, evitando lentidão significativa.     |
| RNF07  | Deve permitir expansão futura para adicionar novos módulos sem grandes alterações na estrutura.               |
| RNF08  | As mensagens devem ser compreensíveis para o público leigo e não apenas técnicas.                             |
| RNF09  | O sistema deve ser responsivo, acessível por computador e celular.                                            |

---

## 7. Requisitos operacionais e de uso

- Deve ser possível acessar o sistema pela internet, em diversos dispositivos.
- O painel inicial deve permitir visão rápida das tarefas atribuídas, pendentes e atrasadas.
- Alterações nos projetos devem ser visíveis, com registro do usuário, data e motivo/descrição.
- O registro de tarefas concluídas não deve ser apagado, para fins de análise posterior.
- A interface deve ser testada com usuários reais para garantir a adoção fácil da equipe.

---

## 8. Perguntas de levantamento que ainda precisam ser respondidas

- Quantos membros, em média, cada equipe terá?
- Caso um usuário esqueça a senha, quem poderá redefinir?
- As tarefas sempre terão um prazo ou a maioria será “contínua”?
- Existirá mais de um projeto sendo controlado ao mesmo tempo?
- A equipe deseja integração futura com calendários eletrônicos?
- Quem será responsável por criar usuários e projetos no sistema?
- O sistema será utilizado também em celulares pessoais?

---

## 9. Sugestão de organização modular para implementação acadêmica

| Módulo                   | Conteúdo principal                                  |
|--------------------------|-----------------------------------------------------|
| Módulo 1 – Cadastros     | Usuários, equipes, projetos                         |
| Módulo 2 – Tarefas       | Cadastro, atribuição, status, prazo e prioridade    |
| Módulo 3 – Comunicação   | Comentários, anexos, notificações                   |
| Módulo 4 – Relatórios    | Consolidação de andamento, produtividade, atrasos   |

---

## 10. Encerramento

Este documento serve para consolidar, de forma acadêmica, a transição entre a compreensão da história do problema e a especificação inicial do sistema, dando base para futuras fases de modelagem, implementação e decisões de arquitetura.
