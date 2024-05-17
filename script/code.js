// function result() {

//     let numb1 = document.querySelector ('[numb1]').value
//     let operator = document.querySelector('[operator]').value
//     let numb2 = document.querySelector('[numb2]').value
//     //OutPut
//     let output =document.querySelector('[output]')
//    alert(eval(`${numb1} ${operator} ${numb2}`));
//    /*output.textContent = */
// }

//JavaScript Code For Bmi CalC
let input1 = document.querySelector('#wgt')
let input2 = document.querySelector('#hgh')
let answer = document.querySelector('.answer1')

//Calculate Button Behaviour
calc.addEventListener('click', () => {
    let bmi = input1.value / (input2.value * input2.value); //bmi formula
    let formattedBMI = bmi.toFixed(2);
    answer.innerText = formattedBMI;
    alert(`Your BMI Is ${formattedBMI} kg`)

    switch (true) {

        case (formattedBMI <= 0.18):
            alert("You Are Underweight I Suggest You Eat More!");
            break;

            case (formattedBMI >= 0.19 && formattedBMI <= 0.29):
                alert("You Weight Is Normal");
                break;

                case (formattedBMI >= 0.30 && formattedBMI <= 0.49):
                    alert("You Are OverWeight Please Go To The Gym!");
                    break;

                    case (formattedBMI >= 0.50):
                        alert("ALERT OBESE!! You Might Die If you Dont Look After you Weight");
                        break;
    }

})

//Clear Button Behaviour
let ac = document.getElementById('clr')
ac.addEventListener('click',function(){
clearSum();
});
function clearSum(){
    input1.value = '';
    input2.value = '';
    answer.innerText = '';
}


