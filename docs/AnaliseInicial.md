# Levantamento inicial do sistema de controle para gestão de tarefas
## História do problema, perguntas de operabilidade e respostas sugeridas

**Contexto:**  
Ambiente acadêmico ou profissional, tipicamente com equipes (ou estudantes) em projetos que exigem a organização, distribuição, acompanhamento e conclusão de tarefas, atualmente controladas de modo informal ou disperso (anotações, conversas, planilhas variadas).

**Finalidade do documento:**  
Registrar a história do problema e apoiar as etapas seguintes do curso sem pular diretamente para a implementação.

**Base de elaboração:**  
Informações sobre a realidade comum em equipes de trabalho, ampliadas por situações típicas de quem sofre para controlar tarefas sem sistema dedicado.

**Observação:**  
Formato de apoio acadêmico, linguagem direta, rigor de organização e foco no entendimento do problema antes da modelagem técnica.

---

## 1. História narrativa do problema

Minha equipe participa de diversos projetos, tanto na faculdade quanto em estágios e trabalhos colaborativos. Até hoje, o controle das tarefas é feito, principalmente, por meio de conversas em grupos de WhatsApp, anotações em cadernos pessoais, quadros brancos na sala e, ocasionalmente, alguma planilha compartilhada.

No começo, quando a quantidade de atividades era pequena e existia bastante proximidade entre o grupo, esse modelo improvisado funcionava. Cada pessoa lembrava do que precisava fazer, combinava prazos oralmente ou por mensagem, e a coordenação das entregas acontecia quase na base da confiança e da memória dos participantes.

Com o tempo, porém, os projetos aumentaram de complexidade, o número de tarefas simultâneas cresceu, prazos ficaram mais apertados, membros do grupo começaram a se dividir em horários diferentes e novos participantes surgiram. Isso trouxe dificuldades importantes: esquecimentos de tarefas, falta de transparência sobre o que está pendente ou já foi feito, dúvidas sobre quem ficou com qual responsabilidade, tarefas duplicadas e problemas na entrega, perda de prazos e, muitas vezes, cobrança (às vezes injusta) entre colegas.

Situações comuns incluem: alguém achando que outra pessoa faria determinada tarefa; prazos sendo perdidos por falta de aviso ou esquecimento; etapas importantes sendo realizadas de modo incompleto porque uma dependência não ficou clara; confusão ao tentar dividir tarefas em reuniões apressadas; e problemas sérios para saber o progresso geral dos projetos.

Além disso, as tentativas de usar planilhas esbarraram em dificuldades: nem todos atualizam, o arquivo se perde, há dúvidas sobre onde está a versão mais recente, e muitas informações acabam não sendo registradas.

O grupo percebeu a necessidade de criar um sistema de gestão de tarefas centralizado, fácil de usar e adaptado à rotina de quem não tem familiaridade técnica avançada ou tempo para treinamento extensivo. A demanda pelo sistema não surgiu por luxo ou modernidade, mas sim para solucionar dores reais: melhorar organização, reduzir retrabalho, registrar históricos, facilitar a comunicação e tornar o andamento dos projetos claro para todos.

Antes de definir telas ou escolher linguagens, ficou evidente que é preciso compreender o cotidiano dos usuários — seus desafios ao tentar coordenar e acompanhar tarefas, distribuir atividades entre membros, controlar prazos, monitorar progresso e concluir projetos de maneira eficiente.

---

## 2. Quadro consolidado dos problemas observados

| Área             | Problema observado                                                                  | Impacto prático                                         |
|------------------|------------------------------------------------------------------------------------|---------------------------------------------------------|
| Organização      | Tarefas dispersas entre cadernos, conversas e planilhas                            | Esquecimentos, retrabalho, falta de controle            |
| Distribuição     | Dúvidas quanto ao responsável ou tarefas não atribuídas claramente                  | Conflitos no grupo, sobrecarga ou tarefas sem dono      |
| Prazo            | Perda de prazos por esquecimento, falta de avisos ou registros                     | Entregas atrasadas e desempenho comprometido            |
| Progresso        | Dificuldade de visualizar o andamento ou as pendências dos projetos                 | Falta de visibilidade, planejamento ineficaz            |
| Comunicação      | Falhas na troca de informações sobre status, novos ajustes ou obstáculos            | Equívocos, retrabalho e desalinhamento do grupo         |
| Histórico        | Ausência de registro sobre execução anterior, lições aprendidas e soluções dadas    | Repetição de erros e dificuldades de aprendizado        |
| Dependências     | Tarefas que dependem de outras executadas sem ordem ou sem registro claro           | Resultados incoerentes e atrasos em fases críticas      |
| Documentação     | Falta de anexos, instruções ou registros de decisões importantes                    | Desgaste do conhecimento coletivo, transições difíceis  |
| Uso da tecnologia| Resistência ao uso de planilhas e softwares complexos                               | Baixa adesão, desatualização de dados e frustração      |

---

## 3. Perguntas de operabilidade com respostas sugeridas

### 3.1 Infraestrutura e uso do sistema

| Pergunta                                                   | Resposta sugerida/Orientação inicial                      |
|------------------------------------------------------------|-----------------------------------------------------------|
| Quantos dispositivos acessarão o sistema?                  | Sugestão: Pelo menos um computador por equipe, mas permitir acesso simultâneo via navegador (desktop e celular). |
| Será necessário acesso remoto, fora da rede local?         | Sugestão: Sim, estudantes e membros podem acessar de casa, logo o sistema deve funcionar na internet.            |
| Há usuários com dificuldade de informática?                 | Sugestão: Sim, priorizar interface simples, visual, intuitiva e com poucas etapas por operação.                  |
| Perfis de usuário serão necessários?                       | Sim: por exemplo, responsável do projeto, membro comum, professor/orientador.                                   |

### 3.2 Tarefas, responsáveis e acompanhamento

| Pergunta                                                   | Resposta sugerida/Orientação inicial                      |
|------------------------------------------------------------|-----------------------------------------------------------|
| Como as tarefas serão cadastradas e distribuídas?          | Cada tarefa poderá ser criada no sistema, atribuída a um ou mais responsáveis.                                    |
| Como membros serão avisados de tarefas atribuídas?         | O sistema pode exibir notificações ou destacar tarefas novas na interface principal de cada usuário.              |
| Será possível visualizar todas as tarefas do grupo?        | Sim, deve haver um painel/visão geral por projeto e por responsável.                                              |
| Como serão definidos prazos e prioridades?                 | Ao cadastrar ou editar tarefa, permitir entrada de data de entrega e definição de prioridade.                     |
| Como saber se uma tarefa está parada ou atrasada?          | O sistema deve sinalizar tarefas com status "em andamento", "atrasada", "concluída" e permitir filtros por situação.|

### 3.3 Histórico, registros e arquivos

| Pergunta                                                   | Resposta sugerida/Orientação inicial                      |
|------------------------------------------------------------|-----------------------------------------------------------|
| O sistema deve guardar histórico de alterações de tarefas? | Sim, registrar criação, atribuição e conclusão, identificado por usuário e data.                                 |
| É possível anexar arquivos ou comentários?                 | Idealmente sim — para facilitar compartilhamento de instruções e materiais de apoio.                              |
| Quem pode alterar ou excluir tarefas?                      | Somente o responsável pela equipe/projeto e o criador da tarefa, ou mediante permissão atribuída.                |
| Será importante consultar tarefas já concluídas?           | Sim, para aprender com o andamento passado e analisar produtividade do grupo.                                     |

### 3.4 Notificações e relatórios

| Pergunta                                                   | Resposta sugerida/Orientação inicial                      |
|------------------------------------------------------------|-----------------------------------------------------------|
| Quem será notificado de prazos próximos ou tarefas atrasadas?| O membro responsável, opcionalmente o professor/líder.                                         |
| Como acompanhar o progresso geral dos projetos?            | Por meio de relatórios/resumos com gráficos simples e filtragem por status, responsável ou data.|
| O sistema precisa exportar relatórios?                     | Exportação básica em PDF ou planilha pode ser desejável, principalmente para prestação de contas.|

### 3.5 Usabilidade e apoio à equipe

| Pergunta                                                   | Resposta sugerida/Orientação inicial                      |
|------------------------------------------------------------|-----------------------------------------------------------|
| Com qual frequência as pessoas deverão acessar o sistema?  | O ideal é acesso a cada nova tarefa ou atualização de status, mas o sistema deve ser fácil de consultar rapidamente.|
| Haverá treinamento para uso?                               | Simples apresentação em reunião; interface precisa ser autoexplicativa para facilitar adoção geral.|
| Pode usar celular para acessar?                            | Sim, o sistema deve ser responsivo/adaptável para mobiles.|

---
