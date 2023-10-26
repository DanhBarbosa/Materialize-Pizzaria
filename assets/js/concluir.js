function concluir(id){

    //Buscar do localstorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    //Buscar a tarefa com o ID
    let tarefa = tarefas.find(t => t.id === id)

    //Alterar o estado da tarefa
    tarefa.concluida = true

    //Salvar no localstorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    atualizar()
    calcularEstatisticas()
}