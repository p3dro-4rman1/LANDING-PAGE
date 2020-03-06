/* 
   Requisita o arquivo PHP 
   que tem o Array de Estados 
   e Insere os estados dentro 
   do DataList.
*/
$.ajax({
    type: "POST",
    dataType: "json",
    url: "php/estadosBrasileiros.php",
    async: true,
    success: function(response){
        for(let i = 0; i < response.length; i++)
        {
            let opcao = document.createElement("option");
            opcao.setAttribute('value', response[i]);

            let dataList = document.getElementById("estados");
            dataList.appendChild(opcao);
        }
    }
})