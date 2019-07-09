function Calculator(){
    var answer = document.querySelector('#answer')
    var num1 = Number(document.querySelector('#num1').value)
    var num2 = Number(document.querySelector('#num2').value)
    var select = document.querySelector('select')
    //parentesis retos pq select kinda é um array
    var operator = select.options[select.selectedIndex].value
    var calculatedAnswer;

    if(operator == 'add'){
        calculatedAnswer = num1 + num2
    }
    else if(operator == 'minus'){
        calculatedAnswer = num1 - num2
    }
    else if(operator == 'multiply'){
        calculatedAnswer = num1 * num2
    }
    else if(operator == 'divide'){
        calculatedAnswer = num1 / num2
    }
    else{
        //alert("Plese select an operator")
        calculatedAnswer = "Invalid operator"
    }

    answer.innerHTML = calculatedAnswer
}