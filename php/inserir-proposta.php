<?php

    // Identifica os erros
    ini_set('display_errors',1);
    ini_set('display_startup_erros', 1);
    error_reporting(E_ALL);
    // Muda o unicode pra UTF-8 PT-BR
    ini_set('default_charset','UTF-8');

    // Pega os Names do Formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $fone = $_POST['fone'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];
    $modelo = $_POST['modelo'];
    $horario = $_POST['horario'];
    $mensagem = $_POST['mensagem'];

    // Inclui o arquivo que faz a conexão com o banco de dados
    include_once "conexao.php";

    // Bloco Try Catch
    try{
        // Comando de Inserção com a passagem de parâmetros
        $stmt = $conn->prepare("INSERT INTO PROPOSTA (NOME, EMAIL, FONE, CIDADE, 
        ESTADO, MODELOCARRO, HORARIOLIGAR, MENSAGEM) VALUES (:nome, :email, :fone,
        :cidade, :estado, :modelo, :horario, :mensagem)");

        // Os parâmetros recebem as variáveis obtidas com o método POST
        $stmt->bindParam(":nome", $nome);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":fone", $fone);
        $stmt->bindParam(":cidade", $cidade);
        $stmt->bindParam(":estado", $estado);
        $stmt->bindParam(":modelo", $modelo);
        $stmt->bindParam(":horario", $horario);
        $stmt->bindParam(":mensagem", $mensagem);
        
        // Executa o comando no banco de dados
        $stmt->execute();

        // Retorna uma mensagem de sucesso!
        echo json_encode("Sua proposta foi realizada com sucesso!");

    } catch(Exception $ex) {
        echo "Erro: $e->getMessage()";
    }
?>