const mobilJeep = {
    type: 'SUV',
    warna: 'Hitam',
    tahun: 2018,
    mesin: 'Diesel',
    kapasitas: '5000cc',
}
const mobilAvanza = {
    type: 'MPV',
    warna: 'Putih',
    tahun: 2018,
    mesin:'Diesel',
    kapasitas: '1300cc',
}

const mobilAgya = {
    type: 'LCGC',
    warna: 'Putih',
    tahun: 2018,
    mesin:'Diesel',
    kapasitas: '1000cc',
}

const arrayMobil = (mobilJeep, mobilAvanza, mobilAgya)

console.log(arrayMobil)

function printMobil(_arrayMobil) {
    console.log('Tipe Warna Tahun Kapasitas')
    for (let i = 0; i < arrayMobil.length; i++) {
        const mobil = arrayMobil(i);
        console.log(`${mobil.type}  ${mobil.warna}  ${mobil.tahun}  ${mobil.mesin}  ${mobil.kapasitas}`)
    }
}
printMobil(arrayMobil)

for(const mobil of arrayMobil) {
    for(const key in mobil) {
        console.log(key, ''.mobil[key]);
    }
    console.log('')
}