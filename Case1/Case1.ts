type IFruit = {
        fruitId: number,
        fruitName: string,
        fruitType: 'IMPORT' | 'LOCAL',
        stock: number
    }

const fruits: IFruit[] = [
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
]

//TODO: soal 1. buah apa saja yang dimiliki Andi
const buah_andi = fruits.forEach(fruit => console.log(fruit.fruitName)) // * jawaban soal 1 

//TODO: soal 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?
// * jawaban no 2 adalah 2 Local dan Import
const wadah_buah = () => { // * jawaban no 2 masing-masing wadah
    let wadah_local: IFruit[] = []; //membuat array wadah local
    let wadah_import: IFruit[] = []; //membuat array wadah import
    fruits.forEach(fruit => { //mengloop setiap array fruits dan mengcheck apakah fruitType adalah local atau import
        if (fruit.fruitType === 'LOCAL') {
            wadah_local.push(fruit); //jika fruitType adalah local maka akan ditambahkan ke array wadah local
        } else {
            wadah_import.push(fruit); //jika fruitType adalah import maka akan ditambahkan ke array wadah import
        }
    });
    wadah_local.forEach((fruit: IFruit) => console.log(fruit.fruitName, fruit.fruitType)); //menampilkan nama buah dan tipe buah dari array wadah local
    wadah_import.forEach((fruit: IFruit) => console.log(fruit.fruitName, fruit.fruitType)); //menampilkan nama buah dan tipe buah dari array wadah import
};
wadah_buah()

//TODO: soal 3. Berapa total stock buah yang ada di masing-masing wadah?
const stock = () => { // * jawaban no 3 total stock buah
    let stock_local: number = 0; //membuat variable stock local
    let stock_import: number = 0; //membuat variable stock import
    fruits.forEach(fruit => { //mengloop setiap array fruits dan mengcheck apakah fruitType adalah local atau import
        if (fruit.fruitType === 'LOCAL') {
            stock_local += fruit.stock; //jika fruitType adalah local maka stock local akan ditambahkan dengan stock buah
        } else {
            stock_import += fruit.stock; //jika fruitType adalah import maka stock import akan ditambahkan dengan stock buah
        }
    });
    console.log(`Total stock buah local: ${stock_local}`); //menampilkan total stock buah local
    console.log(`Total stock buah import: ${stock_import}`); //menampilkan total stock buah import
}
stock()

//TODO: 4. Apakah ada komentar terkait kasus di atas?
