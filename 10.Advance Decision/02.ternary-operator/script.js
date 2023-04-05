var a = 10
var hasil
if(a % 2 == 0) {
    hasil = 'genap'
} else {
    hasil = 'ganjil'
}
console.log(hasil)

var b = 10
var hasilTernary = b % 2 == 0 ? 'genap' : 'ganjil'
console.log(hasilTernary);

// menggunakan Ternary Operator
var nilaiAkhirBootcamp = 100
var sertifikat =
        nilaiAkhirBootcamp >= 100 ? 'Outstanding' :
        nilaiAkhirBootcamp >= 90 ? 'Excellent' :
        nilaiAkhirBootcamp >= 80 ? 'Good' :
        nilaiAkhirBootcamp >= 60 ? 'Not Bad' : 'Failed';
console.log(sertifikat);

// menggunakan if
var sertifikatIf
if(nilaiAkhirBootcamp >= 100) {
    sertifikat = 'Outstanding'
} else if(nilaiAkhirBootcamp >= 90) {
    sertifikat = 'Excellent'
} else if(nilaiBahasaJohn >=80) {
    sertifikat = 'Good'
} else if(nilaiAkhirBootcamp >= 60) {
    sertifikat = 'Not Bad'
} else {
    sertifikat = 'Failed'
}
console.log(sertifikat);