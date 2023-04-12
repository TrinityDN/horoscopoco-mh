var sDatas = [["01-01", "01-19", "Capricórnio", "capricornio.png"],
["01-21", "02-18", "Aquário", "aquario.png"], ["02-19", "03-20", "Peixes", "peixes.png"], ["03-21", "04-19", "Áries", "aries.png"], ["04-21", "05-20", "Touro", "touro.png"], ["05-21", "06-20", "Gêmeos", "gemeos.png"], ["06-21", "07-22", "Câncer", "cancer.png"], ["07-23", "08-22", "Leão", "leao.png"], ["08-23", "09-22", "Virgem", "virgem.png"], ["09-23", "10-22", "Libra", "libra.png"], ["10-23", "11-21", "Escorpião", "escorpiao.png"], ["11-22", "12-21", "Sagitário", "sagitario.png"], ["12-22", "12-31", "Capricórnio", "capricornio.png"]];

var lLimpar = false;

function exibir() {
    if (lLimpar = !lLimpar) {
        //Pega ao valor digitado
        var dataBig = document.getElementById("data").value;
        //Converte para data
        var data = new Date(dataBig);
        //Separa dia, mês e ano
        var dia = data.getDate() + 1;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var dataVetor;
        //Cria a data para comparação
        var novaData = new Date(mes + "-" + dia + "-" + ano);

        //Percorre o vetor comparando as datas
        for (var i = 0; i < sDatas.length; i++) {
            //Junta o ano com a data do vetor para comparação total
            dataVetor = sDatas[i][0] + "-" + ano;
            dataSigl = new Date(dataVetor);
            dataVetor = sDatas[i][1] + "-" + ano;
            dataSig2 = new Date(dataVetor);
            //Faz a comparação
            if (novaData >= dataSigl && novaData <= dataSig2) {
                //Signo
                document.getElementById("resposta").innerHTML = sDatas[i][2];
                //Imagem do signo
                document.getElementById("signoimg").src = "images/" + sDatas[i][3];
                console.log("a");
                document.getElementById("botaoo").innerHTML = "Limpar";
                document.getElementById("data").disabled = true;

            }
        }
    } else {
        document.getElementById("resposta").innerHTML = "";
        document.getElementById("signoimg").src = "images/signos.png";
        document.getElementById("botaoo").innerHTML = "Exibir";
        document.getElementById("data").value = "";
        document.getElementById("data").focus;
        document.getElementById("data").disabled = false;

    }
}