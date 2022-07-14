var fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];
//TODO: soal 1. buah apa saja yang dimiliki Andi
var buah_andi = fruits.forEach(function (fruit) { return console.log(fruit.fruitName); }); // * jawaban soal 1 
//TODO: soal 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?
// * jawaban no 2 adalah 2 Local dan Import
var wadah_buah = function () {
    var wadah_local = []; //membuat array wadah local
    var wadah_import = []; //membuat array wadah import
    fruits.forEach(function (fruit) {
        if (fruit.fruitType === 'LOCAL') {
            wadah_local.push(fruit); //jika fruitType adalah local maka akan ditambahkan ke array wadah local
        }
        else {
            wadah_import.push(fruit); //jika fruitType adalah import maka akan ditambahkan ke array wadah import
        }
    });
    wadah_local.forEach(function (fruit) { return console.log(fruit.fruitName, fruit.fruitType); }); //menampilkan nama buah dan tipe buah dari array wadah local
    wadah_import.forEach(function (fruit) { return console.log(fruit.fruitName, fruit.fruitType); }); //menampilkan nama buah dan tipe buah dari array wadah import
};
wadah_buah();
//TODO: soal 3. Berapa total stock buah yang ada di masing-masing wadah?
var stock = function () {
    var stock_local = 0; //membuat variable stock local
    var stock_import = 0; //membuat variable stock import
    fruits.forEach(function (fruit) {
        if (fruit.fruitType === 'LOCAL') {
            stock_local += fruit.stock; //jika fruitType adalah local maka stock local akan ditambahkan dengan stock buah
        }
        else {
            stock_import += fruit.stock; //jika fruitType adalah import maka stock import akan ditambahkan dengan stock buah
        }
    });
    console.log("Total stock buah local: ".concat(stock_local)); //menampilkan total stock buah local
    console.log("Total stock buah import: ".concat(stock_import)); //menampilkan total stock buah import
};
stock();
