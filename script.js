let namaVar = document.getElementById('variabel');
let angkaVar = document.getElementById('angka-variabel');
let kondisiTrue = document.getElementById('kondisi-true');
let angkaTrue = document.getElementById('angka-true');
let kondisiFalse = document.getElementById('kondisi-false');
let angkaFalse = document.getElementById('angka');
let outputVar = document.getElementsByClassName('output-variabel');
let outputAngkaVar = document.getElementById('output-angka-variabel');
let outputKondisiTrue = document.getElementById('output-kondisi-true');
let outputAngkaTrue = document.getElementById('output-angka-true');
let outputKondisiFalse = document.getElementById('output-kondisi-false');
let outputJumlahPenambahan = document.getElementById('jumlah-penambahan');

namaVar.addEventListener("input", function(){
    for (let elemen of outputVar) {
        elemen.textContent = namaVar.value;
    }
})

angkaVar.addEventListener("input", function(){
    outputAngkaVar.textContent = angkaVar.value;
})

kondisiTrue.addEventListener('input', function(){
    outputKondisiTrue.textContent = kondisiTrue.value;
})

angkaTrue.addEventListener('input', function(){
    outputAngkaTrue.textContent = angkaTrue.value;
})

kondisiFalse.addEventListener("input", function(){
    outputKondisiFalse.textContent = kondisiFalse.value;
})

kondisiFalse.addEventListener("change", function(){
    if (kondisiFalse.value =="+=" || kondisiFalse.value == '-=') {
    document.getElementById('jumlah-angka').classList.remove('hidden');
    document.getElementById('angka').classList.remove('hidden');
    }

    else {
        document.getElementById('jumlah-angka').classList.add('hidden');
        document.getElementById('angka').classList.add('hidden');

        document.getElementById('angka').value = "";
        outputJumlahPenambahan.textContent = "";
    }
})

angkaFalse.addEventListener("input", function(){
    if (kondisiFalse.value =="+=" || kondisiFalse.value == '-=') {
        outputJumlahPenambahan.textContent = ` ${angkaFalse.value}`;
    }
})

