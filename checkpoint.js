// Aula 09
// Checkpoint

var prato = "Carne"
var tempo_usuario = 10

    switch (prato) {
        case "Pipoca":
            tempo_padrao = 10
            cod_prato = 1
            break;
    
        case "Macarrão":
            tempo_padrao = 8
            cod_prato = 2
            break;

        case "Carne":
            tempo_padrao = 15
            cod_prato = 3
            break;
            
        case "Feijão":
            tempo_padrao = 12
            cod_prato = 4
            break;

        case "Brigadeiro":
            tempo_padrao = 8
            cod_prato = 5
            break;
        
        default:
            tempo_padrao = tempo_usuario
    }

    if (tempo_usuario == 0) {
        tempo_usuario = tempo_padrao
    }

    console.log("Tempo sugerido: " + tempo_padrao + " segundos")
    console.log("Tempo utilizado: " + tempo_usuario + " segundos")

    function microondas (cod_prato, tempo_usuario, tempo_padrao){
        if (cod_prato == 0) {
        console.log("Prato inexistente");
        }
        else if (tempo_usuario >= tempo_padrao * 3) {
        console.log("Kabumm");
        }
        else if (tempo_usuario >= tempo_padrao * 2) {
            console.log("A comida queimou");
        }
        else if (tempo_usuario < tempo_padrao) {
            console.log("Tempo insuficiente");
        }

        console.log("Prato pronto, bom apetite!!!")
    }

    microondas(cod_prato, tempo_usuario, tempo_padrao);


