// src/index.ts

function greet(name: string, umur: number): string {
    return 'ni hao, '+name+' da jia hao. wo de '+umur+' sui'; 
    // if we use '', add + on the last text (+name+) 'ni hao, '+name+' da jia hao'
}

const namaMahasiswa = "vio";
const umur: number= 20;
console.log(greet(namaMahasiswa, umur));


//Fungsi greet menerima parameter name bertipe string dan mengembalikan nilai string.
//Kita menggunakan template string (backtick) untuk menyusun pesan.
//Variabel namaMahasiswa dideklarasikan dengan tipe string (secara otomatis diinfer dari nilainya).

// manual: npx tsc; node src/filename.js
// langsung (?): npx ts-node src/index.ts (compile first)