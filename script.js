let inpuSorteio = document.getElementById('input');

function calculate() {

    let result = document.getElementById('result');

    let sorteio = inpuSorteio.value;
    
    result.innerHTML += `<p>${sorteio}</p>`;
    
}


function calculate1() {
    let result1 = document.getElementById('result1');
    
    
    let sorteio = inpuSorteio.value;

    let lenh = sorteio.length;

    let f = Math.floor(Math.random() * lenh);

    result1.innerHTML = `${sorteio[f]}`;

}