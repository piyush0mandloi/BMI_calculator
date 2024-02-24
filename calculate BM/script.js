const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if( height ==='' || height <=0 || isNaN(height)){
        results.innerHTML =`Please write valid height ${height}`; 
    }
    else if( weight ==='' || weight <=0 || isNaN(weight)){
        results.innerHTML =`Please write valid weight ${weight}`; 
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi > 24.9){
            results.innerHTML = `As your bmi was ${bmi} so You are OverWeight`;
        }
        else if( bmi < 24.9 && bmi > 18.6){
            results.innerHTML = ` As your bmi was ${bmi} so You are Normal`
        }
        else{
            results.innerHTML = `As your bmi was ${bmi} so You are UnderWeight`;
        }
        // results.innerHTML = `<span> your bmi was ${bmi}</span>`
    }

})