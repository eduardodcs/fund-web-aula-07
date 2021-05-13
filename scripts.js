var times = [{"modalidade": "Futebol", "time": "Palmeiras", "qtdeJogadores": "11", "cor": "Verde", "brasao" : "palmeiras.jpg"},
            {"modalidade": "Basquete", "time": "Chicago Bulls", "qtdeJogadores": "5", "cor": "Vermelho", "brasao" : "chicagobulls.jpg"},
            {"modalidade": "Futebol americano", "time": "Dallas Cowboys", "qtdeJogadores": "11", "cor": "Azul",  "brasao" : "cowboys.jpg"},
        ]


var htmlDivTimes = document.getElementById("div-times")        
var htmlSelected = document.getElementById("cores")
var htmlBrasao = document.getElementById("div-imagem")
var opcoes = "<option selected>Selecione uma cor</option>"
var timesHtml = ""


//Neste FOR busca todos os times da array, coloca nas tags, e ao sair do FOR coloca os dados no HTML
for (var i = 0; i < times.length; i++){
    var modalidadeSel = "<p class='text-center'>MODALIDADE: " + times[i].modalidade + "</p>"
    var timeSel = "<p class='text-center'>TIME: " + times[i].time + "</p>"
    var jogadoresSel = "<p class='text-center'>QTDE DE JOGADORES: " + times[i].qtdeJogadores + "</p>"
    timesHtml = timesHtml + "<div class='col-4 times'>" + modalidadeSel + timeSel + jogadoresSel + "</div>"
}
htmlDivTimes.innerHTML = timesHtml


//Neste FOR busca as cores de todos os times para serem exibidos como opções do SELECT
for (var i = 0; i  < times.length; i++){
    opcoes = opcoes + '<option value="' + i  + '">' + times[i].cor + '</option>'
}
htmlSelected.innerHTML = opcoes


//Detecta o evento de alteração do SELECT, identifica o opção escolhida e exibe o brasao do time
htmlSelected.addEventListener('change', function(){
    var opcaoEscolhida = this.value
    var brasao = '<img src="' + times[opcaoEscolhida].brasao + '" class="rounded mx-auto d-block">'
    htmlBrasao.innerHTML = brasao
})
