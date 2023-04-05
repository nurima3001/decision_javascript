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
const mobilXenia = {
    type: 'MPV',
    warna: 'Hitam',
    tahun: 2012,
    mesin:'Bensin',
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

const arrayMapMobil = arrayMobil.map((mobil) => {
    return `${mobil.type} ${mobil.kapasitas}`
})

console.log(arrayMapMobil)

const arrayfind = arrayMobil.find((mobil) => {
    return mobil.type === 'MPV'
})

console.log(arrayfind)
const arrayfilter = arrayMobil.filter((mobil) => {
    return mobil.type === 'MPV'
})
console.log(arrayfilter)

const arrayfindIndeks = arrayMobil.findIndeks((mobil) => {
    return mobil.type === 'MPV'
})

console.log(arrayfindIndeks, arrayMobil(arrayfindIndeks))

const sortArrayMobil = arrayMobil.sort((mobil1, mobil2) => {
    return mobil1.type < mobil2.type ? -1 : 1;
})

console.log(sortArrayMobil)