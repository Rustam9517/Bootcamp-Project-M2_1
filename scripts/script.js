let checkButton = document.querySelector('button');
let error = document.querySelector('.error');

checkButton.addEventListener('click',function () {
    let startSum = +(document.querySelector('#startSum').value);
    let monthlyAdd = +(document.querySelector('#monthlyAdd').value);
    let annualPercent = +(document.querySelector('#annualPercent').value);
    let days = +(document.querySelector('#days').value);
    let month = Math.floor(days/30);
    let result= (startSum*Math.pow(1+(annualPercent/100)/12,month)) + monthlyAdd*pow(month,annualPercent);
    //Вычисление ежемесячной суммы                           //Вычисление ежемесячного взноса и его увеличивание
    console.log(startSum);
    // Error notification start
    if(startSum<=0){
        console.log(`Начальная сумма вклада Должна быть положительным числом!!!!`);
        error.innerHTML = `Начальная сумма вклада Должна быть положительным числом!!!!`;
    }else
    if(monthlyAdd<=0){
        console.log(`Сумма ежемесячного пополнения Должна быть положительным числом!!!!`);
        error.innerHTML = `Сумма ежемесячного пополнения Должна быть положительным числом!!!!`;
    }else
    if(annualPercent<=0 || annualPercent>100){
        console.log(`Процентная ставка Должна быть положительным числом меньше 100!!!!`);
        error.innerHTML = `Процентная ставка Должна быть положительным числом меньше 100!!!!`;
    }else
    if(days<0 || Number.isInteger(days)===false){
        console.log(`Срок Должен быть положительным целым числом!!!!`);
        error.innerHTML = `Срок Должен быть положительным целым числом!!!!`;
    }
    else{
        alert(result.toFixed(2));
        error.innerHTML = "";
    }
    // Error notification end


    // Math operations Start
    function pow(time,annual){//Цикл меняющий ещемесячный взнос в зависимости от количества месяцев
        let power = 0;
        for(let i=time;i>0;i--){
            power += Math.pow(1+(annual/100)/12,i);
        }
        return power;
    }
    // Math operations End

});