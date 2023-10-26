function calcularEstatisticas(){
    
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const itensPendente = pendentes.length
    document.querySelector("#itens-pendente").innerHTML = itensPendente


    const concluidas = tarefas.filter(t => t.concluida == true)
    const itensAceitos = concluidas.length
    document.querySelector("#itens-concluida").innerHTML = itensAceitos

    const valorTotalCardapio = tarefas.reduce((total, t) => total += +t.pontos, 0)
    document.querySelector("#total-cardapio").innerHTML = valorTotalCardapio

    const valorTotalCardapioAceito = concluidas.reduce((total, t) => total += +t.pontos, 0)
    document.querySelector("#total-aceito").innerHTML = valorTotalCardapioAceito
}

calcularEstatisticas()
