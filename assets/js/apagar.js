const botoes = document.querySelectorAll(".btn-apagar")


function apagar(id){
    console.log("apagar tarefa", id)

    //Buscar os dados
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    //Remover a tarefa
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)

    //Salvar o localstorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtradas))

    atualizar()
}
