function compararNumeros(num1, num2) {
    if (num1 < num2) {
        return "Numero 2 é maior"
    } else if {num1 == num2) {
        return "Os numero sao iguais"
    } else {
        return "Numero 1 é maior"
    }
}

function numberCheck('numero') {
    if (numero > 0) {
        return "Numero positivo"
    } else if (numero < 0) {
        return "Numero negativo"
    } else {
        return "Numero zero"
    }
}

function dayOfTheWek(dia) {
    switch (dia) {
        case 1:
            return 'Sunday'
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Dia da semana não encontrado"
    }   
}