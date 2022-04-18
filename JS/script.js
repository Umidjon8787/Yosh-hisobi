function ageInDays() {
    let birthYear = prompt("Tug'ilgan yilingizni kiriting");
    if (birthYear > 0 ){
        let ageInDays = (2022 - birthYear) * 365;
        let h1 = document.createElement('h1');
        let textAnswer = document.createTextNode('Siz jami' + ' ' + ageInDays + ' ' + 'Kun yashadingiz.');

        h1.setAttribute('id','ageIndays');
        h1.appendChild(textAnswer);

        document.getElementById('result').appendChild(h1)
    } else{
        alert("Tugilgan sanani kiriting")
    }
    
    
}

function remove() {
    document.getElementById('ageIndays').remove();
}