var gelas = [
    'air putih',
    'jus apel',
    'jus jeruk',
    'air mineral',
    1,
    2,
    100
]

console.log(gelas);
console.log(gelas[0]);
console.log(gelas[1]);
console.log(gelas[2]);
console.log(gelas[3]);
function printArray(array) {
    for (let i = 0; i < array,length; i++) {
        console.log(i, array[i]);
    }
    console.log('')
}
printArray(gelas);

//menambahkan item ke dalam array
gelas.push('jus alpukat');
printArray(gelas);

//menghapus item array
delete gelas[0];
printArray(gelas)

// a sign array variable
gelas[gelas.length] = 'jus mangga';
printArray(gelas)

// menghapus element dari array
const gelasYangTerhapus = gelas.splice(0,1)
printArray(gelas)
printArray(gelasYangTerhapus)

// untuk copy element array
const copy = gelas.splice(0,3)
printArray(copy)
printArray(gelas)

function hapusNumber(array) {
    let i = 0;
    while (i < array.length) {
        if(typeof array[1] === 'number') {
            array.splice(i, 1);
        }else{
            i++;
        }
    }
}
hapusNumber(gelas);
printArray(gelas);

const sorted = gelas.sort(function (a, b) {
    if (a < b) {
        return -1
    } else {
        return 1
    }
})
printArray(gelas)