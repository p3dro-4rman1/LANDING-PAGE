/* Envio da Proposta para o Banco de Dados */
$("#formulario").submit(function() {
    /* Previne o evento padrão */
    event.preventDefault();

    $("#mensagem").hide();

    let arrayInputs = document.getElementsByTagName("input"); /* Array que pega os inputs */

    let faltaCampos = false; /* Variável que diz se há campos vazios ou não */

    let arrayModelos = ['Novo Fit', 'Honda Civic', 'Honda CR-V', 'Honda City']; /* Array com os Modelos de Carro */

    /* Array com os Estados */
    let arrayEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',
    'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    
    let arrayDePlaces = []; /* Array que vai pegar o placeholder correspondente de cada Input */
        
    /* Laço que percorre o array de inputs em busca de inputs vazios */
    for(let i = 0; i < arrayInputs.length; i++){
        /* Se o input não foi preenchido */
        if (arrayInputs[i].value == ""){
            /* Faltam campos */
            faltaCampos = true;
            /* Pega o place holder atual e joga em um array de Placeholders */
            let placeAtual = arrayInputs[i].placeholder;
            arrayDePlaces.push(placeAtual);
            arrayInputs[i].placeholder = "Preencha este campo!";
            /* Assim se o usuário clicar no input poderá ver o placeholder antigo novamente, sem ficar confuso */
            arrayInputs[i].addEventListener("click", e => {
                for (let t = 0; t < arrayDePlaces.length; t++)
                {
                    if (arrayDePlaces[t] == placeAtual)
                    {
                        arrayInputs[i].placeholder = arrayDePlaces[t];
                    }
                }
            })
            /* Borda vermelha indicando o input vazio */
            arrayInputs[i].style = "border: 2px solid red;";
        }
    }

    /* O mesmo de cima porém para o Text Area da Mensagem */
    let textarea = document.getElementById("txtArea");

    if (textarea.value == "")
    {
        faltaCampos = true;
        let placeAtual = textarea.placeholder;
        textarea.placeholder = "Preencha este campo!";
        textarea.addEventListener("click", e => {
            textarea.placeholder = placeAtual;
        })
        textarea.style = "border: 2px solid red;";
    }

    /* Se faltam campos */
    if (faltaCampos){
        $("#mensagem").html("Preencha todos os campos!").fadeIn(400);
    }
    /* Verificação do Campo de Estados, verifica se o valor do input existe no array Estados */
    else if (!arrayEstados.includes(document.getElementsByName("estado")[0].value)){
        /* Borda vermelha no input com valor invalido */
        document.getElementsByName("estado")[0].style = "border: 2px solid red;";
        /* Exibe a mensagem */
        $("#mensagem").html("Insira um estado válido!").fadeIn(400);
    }
    /* Verificação do Campo Modelo de Carros, verifica se o valor do input existe no array Modelos */
    else if (!arrayModelos.includes(document.getElementsByName("modelo")[0].value)){
        document.getElementsByName("modelo")[0].style = "border: 2px solid red;";
        $("#mensagem").html("Insira um modelo válido!").fadeIn(400);
    }
    /* Se o usuário não  aceitar os termos */
    else if (!document.querySelector("#aceitoTermos").checked)
    {
        $("#mensagem").html("Aceite os Termos de Privacidade!").fadeIn(400);
    }
    /* Se o usuário não aceitar os termos */
    else{
        dados = $("#formulario").serialize(); /* Pega os dados do formulário */
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "php/inserir-proposta.php",
            async: true,
            data: dados,
            success: function(response){
                /* Reseta o formulário e mostra a mensagem de sucesso */ 
                document.querySelector("#formulario").reset(); 
                $("#mensagem").html(response).fadeIn(400).delay(2000).fadeOut(400);
                /* Tira a borda vermelha dos inputs que tiverem */
                for (let i = 0; i < arrayInputs.length; i++)
                {
                    arrayInputs[i].style = "border-style: none;";
                }
                textarea.style = "border-style: none;";
            },
            error: function(error){
                console.log("Erro: " + error.status);
                console.log(error);
            }
        })
    }
})