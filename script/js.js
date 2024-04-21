// function enviar() {
//     let n1 = window.document.getElementById('n1');
//     let n2 = window.document.getElementById('n2');
//     let n3 = window.document.getElementById('n3');
//     let n4 = window.document.getElementById('n4');
//     let n5 = window.document.getElementById('n5');


//     let maiorao5 = Math.max(n1.value, n2.value, n3.value, n4.value, n5.value);
//     let menorao5 = Math.min(n1.value, n2.value, n3.value, n4.value, n5.value);
//     let soma = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value) + parseFloat(n5.value));
//     let criterio = soma - parseFloat(menorao5) - parseFloat(maiorao5);
//     let ao5 = ((criterio / 3) / 100).toFixed(2);
//     console.log(ao5);

//     let maiorBPA = Math.max(n1.value, n2.value, n3.value, n4.value);
//     let menorBPA = Math.min(n1.value, n2.value, n3.value, n4.value);
//     let somaBPA = parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value);
//     let bpa = (((somaBPA - parseFloat(maiorBPA)) / 3) / 100).toFixed(2);
//     console.log(bpa);

//     let wpa = (((somaBPA - parseFloat(menorBPA)) / 3) / 100).toFixed(2)
//     console.log(wpa);



// }


function enviar() {
    let numeros = [

        (parseFloat(n1.value) / 100),
        (parseFloat(n2.value) / 100),
        (parseFloat(n3.value) / 100),
        (parseFloat(n4.value) / 100),
        (parseFloat(n5.value) / 100)
    ]

    let numerosAO5 = numeros;
    let numerosBPA = numeros.slice(0,4);



    let maiorao5 = Math.max(...numerosAO5);
    let menorao5 = Math.min(...numerosAO5);
    console.log("Maior AO5: " + maiorao5.toFixed(2));

    let soma = numerosAO5.reduce((a, b) => a + b, 0);
    let criterio = soma - menorao5 - maiorao5;
    let ao5 = criterio / 3;
    console.log("AO5: " + ao5.toFixed(2));

    let maiorBPA = Math.max(...numerosBPA);
    let menorBPA = Math.min(...numerosBPA);
    let somaBPA = numerosBPA.reduce((a, b) => a + b, 0);
    let bpa = (somaBPA - maiorBPA) / 3;
    console.log("BPA: " + bpa.toFixed(2));

    let wpa = ((somaBPA - menorBPA)) / 3;
    console.log("WPA : " + wpa.toFixed(2));



}

