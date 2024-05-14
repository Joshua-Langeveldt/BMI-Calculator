function result() {

    let numb1 = document.querySelector ('[numb1]').value
    let operator = document.querySelector('[operator]').value
    let numb2 = document.querySelector('[numb2]').value
    //OutPut
    let output =document.querySelector('[output]')
   alert(eval(`${numb1} ${operator} ${numb2}`));
   /*output.textContent = */
}